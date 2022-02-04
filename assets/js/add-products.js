
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig02 = {

    apiKey: "AIzaSyDjP_uEKPEYwvN9DbSiBFi9L5YWYw1qB4Y",
    authDomain: "topco-web-01.firebaseapp.com",
    projectId: "topco-web-01",
    storageBucket: "topco-web-01.appspot.com",
    messagingSenderId: "822111365813",
    appId: "1:822111365813:web:ff3f8ef894fd5a8e012cfc",
    measurementId: "G-1WP9X5D2SN",
};

const firebaseConfig03 = {

    apiKey: "AIzaSyCHjLgG1Bvix7qXlRElRFMqDUDMAL2Cr20",
    authDomain: "topco-web-02.firebaseapp.com",
    projectId: "topco-web-02",
    storageBucket: "topco-web-02.appspot.com",
    messagingSenderId: "222066140544",
    appId: "1:222066140544:web:58b7700f8291655d888d65",
    measurementId: "G-KK8C6FGXYH",
};

var uploadFinishSwitch = 0;

firebase.initializeApp(firebaseConfig02, "storageApp02");
firebase.initializeApp(firebaseConfig03, "storageApp03");

let credentialRef = firebase.database().ref('credential-database/-MuU_r0SeBmrxbMG_A9R');
let productsRef = firebase.database().ref('product-database');

var credentialDB = [];

setTimeout(function() {

  credentialFetch();
}, 2000);

setInterval(function() {

  if(firebase.auth().currentUser == null) {

    firebase.app("storageApp02").auth().signOut();
    firebase.app("storageApp03").auth().signOut();
    window.location.href = "/signin.html";
  }
}, 3600);

function chooseUpload() {

  var uploadProgress = setInterval(function() {

    if (document.querySelector('#product-img').files[0] != null) {

      $('.loading').css("display", "block");
      imageURL01();
      imageURL("storageApp02", "#previewImageTagID02", String(credentialDB[0]), String(credentialDB[1]));
      imageURL("storageApp03", "#previewImageTagID03", String(credentialDB[0]), String(credentialDB[1]));
      clearInterval(uploadProgress);
    }
  }, 200)
}

function credentialFetch() {

  credentialRef.on("value", function(snapshot) {

    credentialDB.push(snapshot.val().rateGold);
    credentialDB.push(snapshot.val().rateSilver);
  }, function(error) {

    console.log("Error: " + error.code);
  });
}

function signOut() {

  firebase.app("storageApp02").auth().signOut();
  firebase.app("storageApp03").auth().signOut();
  firebase.auth().signOut().then(() => {

    window.location.href = "/signin.html";
  }).catch((error) => {

    console.log('Signing Out Failed')
  });
}

document.getElementById('product_form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var title = getInput('productName');
  var category = getInput('productCategory');
  var type = getInput('productType');
  var gram = getInput('productGram');
  var netGram = getInput('productNTgram');

  saveProduct(title, category, type, netGram, gram);
}

function saveProduct(title, category, type, netGram, gram) {

  var productData = productsRef.push();
  productData.set({

      timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
      title: title,
      category: category,
      type: type,
      netGram: netGram,
      gram: gram,
      productURL01: document.querySelector('#previewImageTagID01').src,
      productURL02: document.querySelector('#previewImageTagID02').src,
      productURL03: document.querySelector('#previewImageTagID03').src,
    })
    .then(function() {

      console.log('Synchronization succeeded');
      $('#product_form')[0].reset();
      $('#product_form h4').css("display", "block");
      $('.done').css("display", "none");
      uploadFinishSwitch = 0;
      location.reload();

      document.querySelector('#previewImageTagID01').src = '';
      document.querySelector('#previewImageTagID02').src = '';
      document.querySelector('#previewImageTagID03').src = '';
    })
    .catch(function(error) {

      console.log('Synchronization failed');
    });
}

function imageUploadFirebase(firebaseApp, documentSrc) {

  const ref = firebase.app(firebaseApp).storage().ref();
  const file = document.querySelector('#product-img').files[0];
  const name = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
      uploadFinishSwitch += 1;
      document.querySelector(documentSrc).src = url;
    })
    .catch(console.error);
}

function imageURL01() {

  const ref = firebase.storage().ref();
  const file = document.querySelector('#product-img').files[0];
  const name = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
      uploadFinishSwitch += 1;
      document.querySelector('#previewImageTagID01').src = url;
      checkUploadStatus();
    })
    .catch(console.error);
}

function imageURL(storageApp, documentSrc, email, credential) {

  firebase.app(storageApp).auth().onAuthStateChanged(function(user) {
    if (user) {

      imageUploadFirebase(storageApp, documentSrc);
    } else {

      firebase.app(storageApp).auth().signInWithEmailAndPassword(email, credential)
        .then((userCredential) => {

          imageUploadFirebase(storageApp, documentSrc);
        })
        .catch((error) => {

          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  });
}

function checkUploadStatus() {

  var uploadProgressFinish = setInterval(function() {

    if (uploadFinishSwitch == 3) {

      $('.loading').css("display", "none");
      $('.done').css("display", "block");
      $('#product_form h4').css("display", "none");
      clearInterval(uploadProgressFinish);
    }
  }, 200)
}

function getInput(id) {

  return document.getElementById(id).value;
}
