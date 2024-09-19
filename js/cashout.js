document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
    event.preventDefault();
        console.log('cash out added');
    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);
    if(pinNumber === '2008'){
     const balance = document.getElementById('account-balance').innerText;
     console.log(balance);
     const balanceNumber = parseFloat(balance);
     const cashOutNumber = parseFloat(cashOut);
     const newBalance = balanceNumber - cashOutNumber;
     document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out. please try again');
    }
})