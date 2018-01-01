let calculator = calculatorModule();

window.calculator = (function() {
    
let currDisp = document.getElementById("currentDisplay"); 

let operation = 0; //store operation on calculator
let maxLength = 10;
let numberStore = calculator.load();


//function toDisplay(num) {
//    currDisp.innerHTML = num
//}

function buttonClick(num) {
   
    if (currDisp.length > maxLength) {
        currDisp.innerHTML = "Number is too big!"
    } else if (numberStore === 0) {
        numberStore = num;
        currDisp.innerHTML = num;
    } else if (numberStore != 0) {
        numberStore = numberStore + num;
        currDisp.innerHTML = numberStore;
    }
}

/////////
let numSeven = document.getElementById("seven").addEventListener("click", function() {buttonClick(7)
});

let numEight = document.getElementById("eight").addEventListener("click", function() { buttonClick(8)
});

let numNine = document.getElementById("nine").addEventListener("click", function() { buttonClick(9)
});

let divideFunc = document.getElementById("divide").addEventListener("click", function() { function divide(num) {
    currDisp.innerHTML = "/";
    calculator.divide(num);
    operation = 1;
  //  return calculator.getTotal;
 } });

let clearFunc = document.getElementById("clear").addEventListener("click",function() {
    calculator.clearMemory;
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

let multFunc = document.getElementById("multiply").addEventListener("click", function() {function multiply(num) {
    currDisp.innerHTML = "x" + num;
    calculator.multiply(num);
    operation = 2;
  //  return calculator.getTotal;
   }   });
let balanceFunc = document.getElementById("balance").addEventListener("click",function() { 
   let balance = Number(calculator.recallMemory);
    currDisp.innerHTML = balance;
        });
/////////
let numOne = document.getElementById("one").addEventListener("click", function() { buttonClick(1)
});

let numTwo = document.getElementById("two").addEventListener("click", function() {buttonClick(2)
});

let numThree = document.getElementById("three").addEventListener("click", function() {buttonClick("3")
});

let subtractFunc = document.getElementById("subtract").addEventListener("click", function() {function subtract(num) {
    currDisp.innerHTML = "-" + num;
    calculator.subtract(num);
    operation = 3;
 } });

let depositFunc = document.getElementById("deposit").addEventListener("click", function() {function deposit(num) {
        currDisp = calculator.load;
    calculator.saveMemory 
       
 } });
/////////
let numZero = document.getElementById("zero").addEventListener("click", function() {buttonClick(0)
});

let numZeroes = document.getElementById("zeroes").addEventListener("click", function() {buttonClick(00)
});

let toDecimal = document.getElementById("decimal").addEventListener("click", function() {
        if (currDisp.length === 0) { //if already zero add 0.
            currDisp = "0." ; 
        } else {
          currDisp = currDisp + "." ;  //insert decimal to number
        }
    });

let addFunc = document.getElementById("add").addEventListener("click", function() {function add(num) {
    currDisp.innerHTML = "+" + num;
    calculator.add(num);
    operation = 4;
//    return calculator.getTotal;
} } );

let withdrawFunc = document.getElementById("withdraw").addEventListener("click", function() {function withdraw(num) {
    calculator.subtract(num) = calculator.saveMemory; //saving total to memory
    currDisp.innerHTML = calculator.recallMemory; //show total
    }    });
/////////
let equalsTo = document.getElementById("equals").addEventListener("click", function() {function calculate(operation) {
    if (operation === 1) {
       return calculator.getTotal;
    } else if (operation === 2) {
        return calculator.getTotal;
    } else if (operation ===3) {
        return calculator.getTotal;
    } else if (operation === 4) {
        return calculator.getTotal;
    } else {
        return null;
    }
}  }



)} ) ();