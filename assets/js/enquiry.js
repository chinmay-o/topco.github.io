
let enquiryRef = firebase.database().ref('enquiry-database');

document.getElementById('enquiry_form01').addEventListener('submit', submitForm);
document.getElementById('enquiry_form02').addEventListener('submit', submitFormX);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('customerName01');
  var mobile = getInput('customerMobile01');

  saveEnquiry(name, mobile);
}

function submitFormX(e) {

  e.preventDefault();

  var name = getInput('customerName02');
  var mobile = getInput('customerMobile02');

  saveEnquiry(name, mobile);
}

function getInput(id) {

  return document.getElementById(id).value;
}

function saveEnquiry(name, mobile){

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    mobile: mobile,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#enquiry_form01')[0].reset();
    $('#enquiry_form02')[0].reset();
  })
  .catch(function(error) {

    console.log('Synchronization failed');
  });
}
