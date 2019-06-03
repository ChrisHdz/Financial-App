const { remote } = require('electron');
const { BrowserWindow } = remote;

var term;
var apr;
var amt;
var mPmt;


window.onload = function()
{
  document.getElementById("apr").focus();
  document.getElementById("sbt").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues()
{
  term = document.getElementById("trm").value;
  apr = document.getElementById("apr").value;
  amt = document.getElementById("amt").value;
  apr /= 1200;
  mPmt = calculatePayment();
  document.getElementById("pmt").value = "$" + mPmt.toFixed(2);
};

function calculatePayment()
{
	var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
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