
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

      document.getElementById('products-admin').innerHTML += '<tr id='+ productArray[i].id +'>' +
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
        '<a href="#">Enquire</a>' +
        '</div>' +
        '<div class="price">' +
        '<span class="discounted-price">'+ tempShuffledArray[i].gram +' Grams</span>' +
        // '<span class="discounted-price"> | 22 CT</span>' +
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

      document.getElementById('product-page').innerHTML += '<div class="col-12 col-lg-3 col-md-6 col-sm-6 col-xl-is-five mb-45 '+ tempShuffledArray[i].category +'">' +
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
        '<a href="#">Enquire</a>' +
        '</div>' +
        '<div class="price">' +
        '<span class="discounted-price">'+ tempShuffledArray[i].gram +' Grams</span>' +
        // '<span class="discounted-price"> | 22 CT</span>' +
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

//
// function productHTML() {
//
//   // /aishagold.com/products.html
//   if (htmlPath == '/products.html') {
//
//     for (var i = 0; i < productArray.length; i++) {
//
//       document.getElementById('products-pages').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 element-item prints " data-category="'+ productArray[i].category +'">' +
//         '<div class="portfolio-fullimage bg-white">' +
//         '<img id='+ productArray[i].key +' onerror="errorCode('+ productArray[i].key.toString() +')" src="' + productArray[i].productURL01 + '" alt="image_not_found">' +
//         '<a href="#!" class="details-btn"><i class="fal fa-plus"></i></a>' +
//         '<div class="item-content">' +
//         '<h3 class="item-title">'+ productArray[i].title +'</h3>' +
//         '<span class="item-brand">'+ productArray[i].gram + ' | ' + productArray[i].karat +'</span>' +
//         '</div>' +
//         '</div>' +
//         '</div>'
//     }
//
//   } else if (htmlPath == '/aishagold.com/add-products.html') {
//
//     for(var i = 0; i < productArray.length; i++) {
//
//       document.getElementById('product-listings').innerHTML += '<tr data-aos="fade-up" data-aos-delay="200">'+
//         '<td><img src="'+ productArray[i].productURL01 +'" width="100" alt=""></td>'+
//         '<td><h6 class="item-title">'+ productArray[i].title +'</h6></td>'+
//         '<td><h6 class="item-title">'+ productArray[i].category +'</h6></td>'+
//         '<td><h6 class="item-title">'+ productArray[i].gram +'</h6></td>'+
//         '<td><h6 class="item-title">'+ productArray[i].karat +'</h6></td>'+
//         '</tr>';
//     }
//
//   } else {
//
//     for (var i = 0; i < 6; i++) {
//
//       document.getElementById('home-products').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">' +
//         '<a href="#!" class="portfolio-fullimage add-effect">' +
//         '<img src="' + productArray[i].productURL01 + '" alt="image_not_found">' +
//         '<span class="item-content-2">' +
//         '<strong class="item-title">'+ productArray[i].title +'</strong>' +
//         '<small class="item-brand">'+ productArray[i].gram + ' | ' + productArray[i].karat +'</small>' +
//         '</span>' +
//         '</a>' +
//         '</div>'
//     }
//   }
// }
