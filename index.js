

function calculateLoan(){
    loandAmountValue = document.getElementById('loan-amount').value
    interesRate =document.getElementById("interest-rate").value
    monthToPayValue = document.getElementById('month-to-pay').value;

    interest = (loandAmountValue * (interesRate * 0.01))/monthToPayValue;

    monthlyPament = (loandAmountValue / monthToPayValue + interest).toFixed(2);

    document.getElementById('paytment').innerHTML = `Monthly Payment ${monthlyPament}`


}