//Get new Input
function getInput(inputValue) {
    const newInput = parseFloat(inputValue.value);
    return newInput;

}

//Get Input Total
function getInputTotal(inputField, newInput) {
    const inputTotalField = document.getElementById(inputField);
    const prevInputTotal = parseFloat(inputTotalField.innerText);

    const newInputTotal = newInput + prevInputTotal;

    inputTotalField.innerText = newInputTotal;

    return newInputTotal;


}

//Get Balance Total

function getTotalBalance(Button, blanaceInputField, newInput) {
    const balanceTotalField = document.getElementById(blanaceInputField);
    const balanceTotal = parseFloat(balanceTotalField.innerText);

    if (Button == 'deposit') {
        const newBalanceTotal = newInput + balanceTotal;
        balanceTotalField.innerText = newBalanceTotal;

    }
    else if (Button == 'withdraw') {
        if (balanceTotal > newInput) {
            const newBalanceTotal = balanceTotal - newInput;

            balanceTotalField.innerText = newBalanceTotal;

        }
        else {
            alert('You dont have sufficient Balance to withdraw this amount')
        }


    }





}

document.getElementById('deposit-button').addEventListener('click', function () {
    const getDeposit = document.getElementById('deposit-input');
    const newDeposit = getInput(getDeposit);

    const newDepsiteTotal = getInputTotal("deposit-total", newDeposit);

    getTotalBalance('deposit', 'balace-total', newDeposit);




})

document.getElementById('withdra-button').addEventListener('click', function () {
    const getWithdraw = document.getElementById('withdraw-input');
    const newWithdraw = getInput(getWithdraw)

    const newwithdrawTotal = getInputTotal('withdraw-total', newWithdraw)

    getTotalBalance('withdraw', 'balace-total', newWithdraw)




})