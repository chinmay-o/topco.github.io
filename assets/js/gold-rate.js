
let data = null;
var url = "https://sheets.googleapis.com/v4/spreadsheets/1NBmuhKvEgvnfuGZXz7N1DmefHV7c7KaXlk0lFaqx_Mg/values/Data!A2%3AC2?majorDimension=COLUMNS&key="
var apiKey = "AIzaSyAxtMtDoFdL-OePGW-h1SMXGYnpEtZ56cY";

fetch(url+apiKey)
  .then((response) => response.json()) //2
  .then((values) => {
    data = values; //3
    let date = data.values[0];
    let gram = data.values[1];
    let eightGram = gram * 8;
    let silver = data.values[2];
    document.getElementById("datePrint").innerHTML += "<h3>" + date + "</h3>";
    document.getElementById("gramPrint").innerHTML += "<span>" + gram + "</span>";
    document.getElementById("eightPrint").innerHTML += "<span>" + eightGram + "</span>";
    document.getElementById("silverPrint").innerHTML += "<span>" + silver + "</span>";

    document.getElementById("gramPrintMobile").innerHTML += "<span>" + gram + "</span>";
    document.getElementById("eightPrintMobile").innerHTML += "<span>" + eightGram + "</span>";
    document.getElementById("silverPrintMobile").innerHTML += "<span>" + silver + "</span>";
  });
