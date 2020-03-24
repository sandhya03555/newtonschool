function calculateTip() {
    var billAmt = document.getElementById("amt").value;
    var serviceQual = document.getElementById("service").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
      document.getElementById("each");
      
    } else {
      document.getElementById("each");
    }
  
    var total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    document.getElementById("totalTip");
    document.getElementById("tip").innerHTML = total;
  
  }
  document.getElementById("totalTip");
  document.getElementById("each");
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };