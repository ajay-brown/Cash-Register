let calculator = calculatorModule()
let currDisp = document.getElementById("currentDisplay"); 



function toDisplay(num) {
    currDisp.innerHTML = num
}

function buttonClick(num) {
    toDisplay(num)
}

/////////
let numSeven = document.getElementById("seven").onclick = buttonClick(7);

let numEight = document.getElementById("eight").onclick = buttonClick(8);

let numNine = document.getElementById("nine").onclick = buttonClick(9);

let divideFunc = document.getElementById("divide").onclick = function() {
    currDisp.innerHTML = "/"
    calculator.divide
            };

let clearFunc = document.getElementById("clear").onclick = function() {
    currDisp.innerHTML = 0; 
        };
/////////
let numFour = document.getElementById("four").onclick = buttonClick(4);

let numFive = document.getElementById("five").onclick = buttonClick(5);

let numSix = document.getElementById("six").onclick = buttonClick(6);

let multFunc = document.getElementById("multiply").onclick = function() {
    currDisp.innerHTML = "x"
    calculator.multiply
        };
let balanceFunc = document.getElementById("balance").onclick = function() { 
    currDisp.innerHTML = calculator.getTotal
        };
/////////
let numOne = document.getElementById("one").onclick = buttonClick(1);

let numTwo = document.getElementById("two").onclick = buttonClick(2);

let numThree = document.getElementById("three").onclick = buttonClick(3);

let subtractFunc = document.getElementById("subtract").onclick = function(num) {
    currDisp.innerHTML = "-"
    calculator.subtract;
        };

let depositFunc = document.getElementById("deposit").onclick = function(num) {
        currDisp.innerHTML = calculator.add;
        };
/////////
let numZero = document.getElementById("zero").onclick = buttonClick(0);

let numZeroes = document.getElementById("zeroes").onclick = buttonClick(00);

let toDecimal = document.getElementById("decimal").onclick = buttonClick(".");

let addFunc = document.getElementById("add").onlick = function(num) {
    currDisp.innerHTML = "+"
    calculator.add;
};

let withdrawFunc = document.getElementById("withdraw").onclick = function(num) {
    currDisp.innerHTML = calculator.subtract
        };
/////////
let equalsTo = document.getElementById("equals");

