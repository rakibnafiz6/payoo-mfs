// console.log('Button Clicking File added');
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '5' && pinNumber === '2008'){
        console.log('You are login ');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})