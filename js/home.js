// step 1
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
   event.preventDefault();
    // step 2
 const amountInput = document.getElementById('input-amount').value;
 console.log(amountInput);
 const pinNumber = document.getElementById('input-pin-number').value;
 console.log(pinNumber);

  //  step 3
//   wrong way to validate pin number
  if(pinNumber === '2008'){
    console.log('add money to your account');
    // step 4
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);
    // step 5
    const addMoneyNumber = parseFloat(amountInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    console.log(newBalance);
    // step 6
    document.getElementById('account-balance').innerText = newBalance;
  }
  else{
    alert('Failed to add money! please try again');
  }
})