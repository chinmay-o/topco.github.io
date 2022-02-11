
var load = false;

let enquiryDB = firebase.database().ref('enquiry-database');
let goldRateDBKL = firebase.database().ref('goldRate-database-kerala').limitToLast(1);
let goldRateDBKA = firebase.database().ref('goldRate-database-karnataka').limitToLast(1);

let enquiryList;
let todaysGoldRateKL;
let todaysGoldRateKA;
let goldRateArrayKL = [];
let goldRateArrayKA = [];

var interv = setInterval(checkLoader, 100);

function checkLoader() {

  if (load) {
    enquiryTable();
    clearInterval(interv);
  }
}

enquiryDB.on("value", function(snapshot) {

   enquiryList = snapshot.val();
   load = true;
}, function (error) {

   console.log("Error: " + error.code);
});

goldRateDBKA.on("value", function(snapshot) {

   todaysGoldRateKA = snapshot.val();
   for (let key in todaysGoldRateKA) {

     goldRateArrayKA.push(todaysGoldRateKA[key]);
   }
}, function (error) {

   console.log("Error: " + error.code);
});

goldRateDBKL.on("value", function(snapshot) {

   todaysGoldRateKL = snapshot.val();
   for (let key in todaysGoldRateKL) {

     goldRateArrayKL.push(todaysGoldRateKL[key]);
   }
}, function (error) {

   console.log("Error: " + error.code);
});

var arrayValue = [];

function enquiryTable() {

  arrayValue = [];

  for (let key in enquiryList) {

    arrayValue.push({
      timestamp: enquiryList[key].timestamp,
      name: enquiryList[key].name,
      mobile: enquiryList[key].mobile,
      subject: enquiryList[key].subject,
      remark: enquiryList[key].remark,
    });
  }
  arrayValue.reverse();
  enquiryHTML();
}

function enquiryHTML() {

  for(var i = 0; i < arrayValue.length; i++) {

    document.getElementById('enquiryLisiting').innerHTML += '<tr>'+
      '<td class="product-price"><span class="price">'+ arrayValue[i].timestamp +'</span></td>'+
      '<td class="product-price"><span class="price">'+ arrayValue[i].name +'</span></td>'+
      '<td class="product-price"><span class="price">'+ arrayValue[i].mobile +'</span></td>'+
      '<td class="product-price"><span class="price">'+ arrayValue[i].subject +'</span></td>'+
      '<td class="product-price"><span class="price">'+ arrayValue[i].remark +'</span></td>'+
      '</tr>';
  }
}

let goldRefKL = firebase.database().ref('goldRate-database-kerala');
let goldRefKA = firebase.database().ref('goldRate-database-karnataka');

function goldRateForm() {

  document.getElementById('todayDateKL').value = moment().format('DD/MM/YYYY');
  document.getElementById('todayDateKA').value = moment().format('DD/MM/YYYY');
  document.getElementById('22CTRate1GKL').value = goldRateArrayKL[0].rateGold;
  document.getElementById('22CTRate1GKA').value = goldRateArrayKA[0].rateGold;
  document.getElementById('silverRate1GKL').value = goldRateArrayKL[0].rateSilver;
  document.getElementById('silverRate1GKA').value = goldRateArrayKA[0].rateSilver;
}

var loadAPI = setInterval(checkAPILoader, 100);

function checkAPILoader() {

  if (goldRateArrayKL != 0 && goldRateArrayKA != 0) {

    goldRateForm();
    clearInterval(loadAPI);
  }
}

setInterval(function() {

  if(firebase.auth().currentUser == null) {

    window.location.href = "/admin-signin.html";
  }
}, 3600);

document.getElementById('goldRateKA_form').addEventListener('submit', submitFormKA);
document.getElementById('goldRateKL_form').addEventListener('submit', submitFormKL);

function submitFormKA(e) {

  e.preventDefault();

  var date = getInput('todayDateKA');
  var rate = getInput('22CTRate1GKA');
  var rateSilver = getInput('silverRate1GKA');

  saveRatesKA(date, rate, rateSilver);
}

function submitFormKL(e) {

  e.preventDefault();

  var date = getInput('todayDateKL');
  var rate = getInput('22CTRate1GKL');
  var rateSilver = getInput('silverRate1GKL');

  saveRatesKL(date, rate, rateSilver);
}

function saveRatesKA(date, rate, rateSilver){

  var todaysRate = goldRefKA.push();
  todaysRate.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    date: date,
    rateGold: rate,
    rateSilver: rateSilver,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#goldRateKA_form')[0].reset();
    setTimeout(function () {

      goldRateForm();
    }, 6000);
  })
  .catch(function(error) {

    console.log('Synchronization failed');
  });
}

function saveRatesKL(date, rate, rateSilver){

  var todaysRate = goldRefKL.push();
  todaysRate.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    date: date,
    rateGold: rate,
    rateSilver: rateSilver,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#goldRateKL_form')[0].reset();
    setTimeout(function () {

      goldRateForm();
    }, 6000);
  })
  .catch(function(error) {

    console.log('Synchronization failed');
  });
}

function getInput(id) {

  return document.getElementById(id).value;
}

function signingOut() {

  firebase.auth().signOut().then(() => {

    window.location.href = "/signin.html";
  }).catch((error) => {

    console.log('Signing Out Failed')
  });
}
