

document.getElementById('signin-form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var username = getInput('regEmail');
  var credential = getInput('regPassword');

  firebase.auth().signInWithEmailAndPassword(username, credential)
    .then((userCredential) => {

      // Signed in
      var user = userCredential.user;
      console.log('Signed In');
      window.location.href = "/admin.html";
      // ...
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function getInput(id) {

  return document.getElementById(id).value;
}
