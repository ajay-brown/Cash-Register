let calculator = calculatorModule();

window.calculator = (function() {
    
let currDisp = document.getElementById("currentDisplay"); 
let x = 0; //initial value entered
let operation = 0;
let maxLength = 10;
let numberStore = calculator.load(x); 
console.log(numberStore);
function buttonClick(num) {
   
    if (currDisp.length > maxLength) {
        currDisp.innerHTML = "Number is too big!"
    } else if (numberStore === 0) { //if initial display is 0, first input
        numberStore = num; //updated stored number to entered number
        currDisp.innerHTML = num; // change display to entered number
    } else if (numberStore != 0) { //if number is not 0, second and onwards inputs
        numberStore = Number(numberStore + num); //number store value is updated
        currDisp.innerHTML = num; //display new number entered
    }
    console.log(numberStore);
}

/////////
let numSeven = document.getElementById("seven").addEventListener("click", function() {buttonClick(7)
});

let numEight = document.getElementById("eight").addEventListener("click", function() { buttonClick(8)
});

let numNine = document.getElementById("nine").addEventListener("click", function() { buttonClick(9)
});

let divideFunc = document.getElementById("divide").addEventListener("click", function() { 

    console.log(numberStore);
   operation = 1; //keeping track of operation
   console.log(operation);
  });

let clearFunc = document.getElementById("clear").addEventListener("click",function() {
    calculator.clearMemory;
    numberStore = 0;
    calculator.getTotal = 0;
    currDisp.innerHTML = 0; 
        });
/////////
let numFour = document.getElementById("four").addEventListener("click", function() {buttonClick(4)
});

let numFive = document.getElementById("five").addEventListener("click", function (){ buttonClick(5)
});

let numSix = document.getElementById("six").addEventListener("click", function() {buttonClick(6)
});

let multFunc = document.getElementById("multiply").addEventListener("click", function() {
 
    let toMult = +currDisp.innerHTML;
    calculator.multiply(toMult);
    operation = 2;
    console.log(numberStore);
  //  return calculator.getTotal;
     });
let balanceFunc = document.getElementById("balance").addEventListener("click",function() { 
   let balance = Number(calculator.recallMemory); //converts to number
    currDisp.innerHTML = balance;
        });
/////////
let numOne = document.getElementById("one").addEventListener("click", function() { buttonClick(1)
});

let numTwo = document.getElementById("two").addEventListener("click", function() {buttonClick(2)
});

let numThree = document.getElementById("three").addEventListener("click", function() {buttonClick(3)
});

let subtractFunc = document.getElementById("subtract").addEventListener("click", function() {
   calculator.load(numberStore);
    let toSubtract = +currDisp.innerHTML;
    calculator.subtract(toSubtract);
    operation = 3;
  });

let depositFunc = document.getElementById("deposit").addEventListener("click", function() {
       calculator.load(numberStore);
       calculator.getTotal;
    calculator.saveMemory; //saving total to memory
    currDisp.innerHTML = calculator.recallMemory;
       
 });
/////////
let numZero = document.getElementById("zero").addEventListener("click", function() {buttonClick(0)
});

let numZeroes = document.getElementById("zeroes").addEventListener("click", function() {function doubleZero() {
    let toDoubleZero = +currDisp.innerHTML; 
    currDisp.innerHTML = toDoubleZero.toFixed(2); //add two zeroes to value
  
}
});

let toDecimal = document.getElementById("decimal").addEventListener("click", function() {
        if (currDisp.length === 0) { //if already zero add 0.
            currDisp.innerHTML = "0." ; 
        } else {
          currDisp.innerHTML = currDisp + "." ;  //insert decimal to number
        }
    });

let addFunc = document.getElementById("add").addEventListener("click", function() {
   calculator.load(numberStore) //load stored number
   let toAdd = +currDisp.innerHTML;
    calculator.add(toAdd);  //add x value
    operation = 4;
//    return calculator.getTotal;
 } );

let withdrawFunc = document.getElementById("withdraw").addEventListener("click", function() { 
   calculator.load(numberStore);
   let toWithdraw = +currDisp.innerHTML;
    calculator.subtract(toWithdraw)
    calculator.saveMemory; //saving total to memory
    currDisp.innerHTML = Number(calculator.recallMemory); //show total
       });
       
/////////
let equalsTo = document.getElementById("equals").addEventListener("click", function(operation) {
    console.log(operation);
    if (operation === 1) {
        let toDivide = +currDisp.innerHTML; //to Divide saved as a value
      return calculator.divide(toDivide); // number displayed divided by total
    } else if (operation === 2) {
        currDisp.innerHTML = numberStore;
    } else if (operation ===3) {
        currDisp.innerHTML = numberStore;
    } else if (operation === 4) {
        currDisp.innerHTML = numberStore;
    } else {
        currDisp.innerHTML = "Nothing Happened!";
    }
    operation = 0;
  }



)} ) ();