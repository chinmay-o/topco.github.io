
var arrayLoad = false;
let htmlPath = window.location.pathname;
const htmlPathArray = htmlPath.split("/");
var fileName = htmlPathArray[htmlPathArray.length-1];

let productsListRef = firebase.database().ref('product-database');

var productArray = [];

productsListRef.on("value", function(snapshot) {

  productArray = [];
  for (let key in snapshot.val()) {

    productArray.push({
      id: key.substr(key.length - 6).toUpperCase(),
      title: snapshot.val()[key].title,
      type: snapshot.val()[key].type,
      gram: snapshot.val()[key].gram,
      netGram: snapshot.val()[key].netGram,
      category: snapshot.val()[key].category,
      productURL01: snapshot.val()[key].productURL01,
      productURL02: snapshot.val()[key].productURL02,
      productURL03: snapshot.val()[key].productURL03
    });
  }
  arrayLoad = true;
  productArray.reverse();
}, function(error) {
  console.log("Error: " + error.code);
});

var productLoad = setInterval(productsShowcase, 100);

function productsShowcase () {

  if (arrayLoad) {

    productHTML();
    clearInterval(productLoad);
  }
}

function errorCode(productKey) {

  console.log(productKey);
}

// "'+ productArray[i].key +'"
function errorCode01(productKey) {

  document.getElementById(productkey).src = productArray.find(entry => entry.key == productkey).productURL02;
}

function errorCode02(productSet) {

  console.log('hello');
}

function searchProduct() {
    let input = document.getElementById('searchbar').value;
    input = input.toUpperCase();

    console.log(input);

    for (i = 0; i < productArray.length; i++) {

        if (!(productArray[i].id).toUpperCase().includes(input)) {

            $('#' + productArray[i].id).css("display", "none");
        }
        else {

            console.log((productArray[i].id).toUpperCase());
            $('#' + productArray[i].id).css("display", "table-row")
        }
    }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function productHTML() {

  if (fileName == 'add-products.html') {

    for (var i = 0; i < productArray.length; i++) {

      document.getElementById('products-admin').innerHTML += '<tr class="adminProducts" id='+ productArray[i].id +'>' +
        '<td class="product-price"><span class="price">'+ productArray[i].id +'</span></td>' +
        '<td class="product-thumbnail">' +
          '<a href="#">' +
            '<img src="'+ productArray[i].productURL03 +'" class="img-fluid" alt="">' +
          '</a>' +
        '</td>' +
        '<td class="product-name">' +
          '<a href="#">'+ productArray[i].title +'</a>' +
          '<span class="product-variation">Type: '+ productArray[i].type +'</span>' +
        '</td>' +

        '<td class="product-price"><span class="price">'+ productArray[i].category +'</span></td>' +

        '<td class="total-price"><span class="price">'+ productArray[i].gram +' Grams</span></td>' +

        '<td class="total-price"><span class="price">'+ productArray[i].netGram +' Grams</span></td>' +

        '<td class="product-remove">' +
          '<a href="#">' +
            '<i class="ion-android-close"></i>' +
          '</a>' +
        '</td>' +
      '</tr>'
    }
  } else if (fileName == '' || fileName == 'index.html') {

    var tempShuffledArray = shuffle(productArray);
    var carat;

    for (var i = 0; i < 10; i++) {

      if (tempShuffledArray[i].category == 'Ray') {

        carat = '18CT';
      } else {

        carat = '22CT';
      }

      document.getElementById('product-home').innerHTML += '<div class="col-12 col-lg-3 col-md-6 col-sm-6 col-xl-is-five mb-45 '+ tempShuffledArray[i].category +'">' +
        '<div class="single-product">' +

        '<div class="single-product__image">' +
        '<a class="image-wrap" href="#">' +
        '<img src="'+ tempShuffledArray[i].productURL01 +'" class="img-fluid" alt="">' +
        '</a>' +

        '<div class="single-product__floating-badges">' +
        '<span class="hot">'+ carat +'</span>' +
        '</div>' +

        '</div>' +

        '<div class="single-product__content">' +

        '<div class="title">' +
        '<h3> <a href="#">'+ tempShuffledArray[i].title +'</a></h3>' +
        '<a href="https://api.whatsapp.com/send?phone=919400186522&text=Hi,%20This%20is%20an%20enquiry%20about%20'+ tempShuffledArray[i].title +'('+ tempShuffledArray[i].id +').">Enquire</a>' +
        '</div>' +
        '<div class="price">' +
        '<span class="discounted-price">'+ tempShuffledArray[i].gram +' Grams</span>' +
        '</div>' +
        '<div class="price">' +
        '<span class="discounted-price">Net Wt.: '+ tempShuffledArray[i].netGram +' Grams</span>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>'
    }
  } else {

    var tempShuffledArray = shuffle(productArray);
    var carat;

    for (var i = 0; i < tempShuffledArray.length; i++) {

      if (tempShuffledArray[i].category == 'Ray') {

        carat = '18CT';
      } else {

        carat = '22CT';
      }

      document.getElementById('product-page').innerHTML += '<div class="col-12 col-lg-3 col-md-6 col-sm-6 col-xl-is-five mb-45 '+ tempShuffledArray[i].category +' '+ tempShuffledArray[i].type +'">' +
        '<div class="single-product">' +

        '<div class="single-product__image">' +
        '<a class="image-wrap" href="#">' +
        '<img src="'+ tempShuffledArray[i].productURL02 +'" class="img-fluid" alt="">' +
        '</a>' +

        '<div class="single-product__floating-badges">' +
        '<span class="hot">'+ carat +'</span>' +
        '</div>' +

        '</div>' +

        '<div class="single-product__content">' +

        '<div class="title">' +
        '<h3> <a href="#">'+ tempShuffledArray[i].title +'</a></h3>' +
        '<a href="https://api.whatsapp.com/send?phone=919400186522&text=Hi,%20This%20is%20an%20enquiry%20about%20'+ tempShuffledArray[i].title +'('+ tempShuffledArray[i].id +').">Enquire</a>' +
        '</div>' +
        '<div class="price">' +
        '<span class="discounted-price">'+ tempShuffledArray[i].gram +' Grams</span>' +
        '</div>' +
        '<div class="price">' +
        '<span class="discounted-price">Net Wt.: '+ tempShuffledArray[i].netGram +' Grams</span>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>'
    }
  }
}
