function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
//variable declaration-start

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


//variable declaration-end
//function-form-validation-starts

function validationName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}


function validationPhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'phone is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits';
        return falsel;

    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits please.';
        return false;

    }
    phoneError.innerHTML = 'valid';
    return true;
}
function validationEmail(){

    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;

}
function validationMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 5;
    var left = required - message.length;
    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;

    }
    messageError.innerHTML = 'valid';
    return true;

}
function validationFrom(){
    if(!validationName() || !validationPhone() || !validationEmail() || !validationMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'PLEASE FILL ALL THE ABOVE OPTIONS';
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false;
    }

}
//function-form-validation-ends