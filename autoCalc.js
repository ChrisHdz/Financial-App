const { remote } = require('electron');
const { BrowserWindow } = remote;

var amount 
var months 
var down 
var annInterest
var monInt

window.onload = function()
{
  document.getElementById("interest").focus();
  document.getElementById("submit").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues()
{
    amount = document.getElementById('amount').value
    months = document.getElementById('months').value
    down = document.getElementById('down').value
    annInterest = document.getElementById('interest').value
    monInt = annInterest / 1200,
  mPmt = calculatePayment();
  document.getElementById("output").value = "$" + mPmt.toFixed(2);
};

function calculatePayment()
{
	var payment = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (down || 0)));
	return payment;
}


const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function () {
    var window = remote.getCurrentWindow();
    forceClose(window)
})

function forceClose(window) {
  
    // try close first
    window.close()
    
    // force with destroy
    if(!window.closed) {
      window.destroy()
    }
    
    //just logging out the event
    window.on('closed', (e) => {
      console.log(e)
    })
    
  }


