
let goldRateDBKL = firebase.database().ref('goldRate-database-kerala').limitToLast(1);
let goldRateDBKA = firebase.database().ref('goldRate-database-karnataka').limitToLast(1);

let todaysGoldRateKL;
let todaysGoldRateKA;
let goldRateArrayKL = [];
let goldRateArrayKA = [];

goldRateDBKL.on("value", function(snapshot) {

   todaysGoldRateKL = snapshot.val();
   for (let key in todaysGoldRateKL) {

     goldRateArrayKL.push(todaysGoldRateKL[key]);
   }
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

function goldRateDisplay() {

  document.getElementById('dateKL').innerHTML = goldRateArrayKL[0].date;
  document.getElementById('dateKA').innerHTML = goldRateArrayKA[0].date;
  document.getElementById('gramPrintKL').innerHTML = goldRateArrayKL[0].rateGold;
  document.getElementById('eightPrintKL').innerHTML = (goldRateArrayKL[0].rateGold)*8;
  document.getElementById('silverPrintKL').innerHTML = goldRateArrayKL[0].rateSilver;
  document.getElementById('gramPrintKA').innerHTML = goldRateArrayKA[0].rateGold;
  document.getElementById('eightPrintKA').innerHTML = (goldRateArrayKA[0].rateGold)*8;
  document.getElementById('silverPrintKA').innerHTML = goldRateArrayKA[0].rateSilver;
}

var loadAPI = setInterval(checkAPILoader, 100);

function checkAPILoader() {

  if (goldRateArrayKL != 0 && goldRateArrayKA != 0) {

    goldRateDisplay();
    clearInterval(loadAPI);
  }
}
