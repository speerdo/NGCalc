let app = angular.module("CalculatorApp", []);

app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl () {
   this.display = '0';
   this.number1 = '';
   this.nubmer2 = '';
   this.operator = '';
   let bool = false;

   this.computeResult = function() {
    bool = false; //bool is a workaround for adding numbers
    this.number2 = parseFloat(this.display);
    let num1 = this.number1;
    let num2 = this.number2;

    if (this.operator === '+') {
      this.number1 = num1 + num2;
    } else if (this.operator === '-') {
      this.number1 = num1 - num2;
    } else if (this.operator === '*') {
      this.number1 = num1 * num2;
    } else if (this.operator === '/') {
      this.number1 = num1 / num2;
    }
     this.display = this.number1;
     this.operator = '';
   }

   this.numberClicked = function(button) {
   if (this.display === '0') {
     this.display = '';
   }
     if (this.number1 !== '' && bool == false) {
       this.display = '';
       bool = true;
   }
    this.display += button;
  }

  this.plusminusClicked = function() {
    if ((this.display != '' || this.display != '0') && this.display[0] != '-') {
      this.display = '-' + this.display;
    }
    else if (this.display[0] === '-') {
      this.display = this.display.slice(1);
    }
  }

   this.decimalClicked = function() {
     if (this.number1 != '' && bool == false) {
       this.display = '';
       bool = true;
     }
     if (this.display.indexOf('.') === -1) {
       this.display += '.';
     }
   }
   this.percentClicked = function() {

   let current = parseFloat(this.display);
   current/=100;
   this.display = current;
   }

   this.operatorClicked = function(button) {
     bool = false;
     if (this.number1 != '') {
       this.computeResult(button);
     }
     else
     this.number1 = parseFloat(this.display);
     this.operator = button;
   }
  this.ACClicked = function(button) {
    this.display = '0';
    this.number1 = '';
    this.nubmer2 = '';
    this.operator = '';
    let bool = false;
  }
}
