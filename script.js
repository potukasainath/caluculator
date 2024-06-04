let billAmountInput = document.getElementById('billAmount');
let percentageTipInput = document.getElementById('percentageTip');
let tipAmountInput = document.getElementById('tipAmount');
let totalAmountInput = document.getElementById('totalAmount');
let errorMessageInput = document.getElementById('errorMessage');
let errorMessage = "Please Enter a valid input.";

function calculateTip() {
    let billAmountInputvalue = billAmountInput.value;

    let percentageTipInputvalue = percentageTipInput.value;
    if (billAmountInputvalue === "") {
        errorMessageInput.textContent = errorMessage;
    } else if (percentageTipInputvalue === "") {
        errorMessageInput.textContent = errorMessage;
    } else {

        errorMessageInput.textContent = "";
        let billAmout = parseInt(billAmountInputvalue);
        let percentageTip = parseInt(percentageTipInputvalue);

        let calculateTip = (percentageTip / 100) * billAmout;
        let calculateTotal = billAmout + calculateTip;
        tipAmountInput.value = calculateTip;
        totalAmountInput.value = calculateTotal;
    }
}