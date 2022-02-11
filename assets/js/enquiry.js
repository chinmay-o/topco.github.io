
let enquiryRef = firebase.database().ref('enquiry-database');

document.getElementById('enquiry_form01').addEventListener('submit', submitForm);
document.getElementById('enquiry_form02').addEventListener('submit', submitFormX);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('customerName01');
  var mobile = getInput('customerMobile01');

  saveEnquiry(name, mobile, "submitForm");
}

function submitFormX(e) {

  e.preventDefault();

  var name = getInput('customerName02');
  var mobile = getInput('customerMobile02');

  saveEnquiry(name, mobile, "submitFormX");
}

function getInput(id) {

  return document.getElementById(id).value;
}

function clearMessage() {

  setTimeout(function() {

    document.getElementById('form-messege').innerHTML = "";
  }, 6000)
}

function saveEnquiry(name, mobile, formName){

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    mobile: mobile,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    if (formName == "submitForm") {

      $('#enquiry_form01')[0].reset();
      document.getElementById('form-messege').innerHTML = "Successfully Submitted";
    } else if (formName == "submitFormX") {

      $('#enquiry_form02')[0].reset();
      document.getElementById('mailchimp-message').innerHTML = "Successfully Submitted";
    }
    clearMessage();
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    if (formName == "submitForm") {

      document.getElementById('form-messege').innerHTML = "Failed to Submit. Try again";
    } else if (formName == "submitFormX") {

      document.getElementById('mailchimp-message').innerHTML = "Failed to Submit. Try again";
    }
    clearMessage();
  });
}
