

const displayed = document.querySelector('#operations');
let buffer = 0;
let runningTotal = 0;
let perviousOperator;


function buttonClick(value) {
     if (isNaN(value)) {
          handleSymbol(value);
     }
     else {
          handleNumber(value);
     }
     displayed.innerHTML = buffer;
}

function handleSymbol(symbol) {
     switch (symbol) {
          
          case '=':
               if (perviousOperator === null) {
                    return;
               }
               flushOperation(parseInt(buffer));
               perviousOperator = null; 
               buffer = runningTotal;
               runningTotal = 0;
               break;
          
          case '<-':
               if (buffer.length === 1) {
                    buffer = '0';
               }
               
               else {
                    buffer = buffer.substring(0, buffer.length - 1);
               }
               break;
     
          // Operators
          case '+':
          case '-':
          case '*':
          case '÷':
               handleMath(value);
               break;
     }     
}

function handleMath(symbol) {
     if (buffer === '0') {
          return;
     }
     const intBuffer = paseInt(buffer);
     
     if (runningTotal === 0) {
          runningTotal = intBuffer;
     }
     
     else {
          flushOperation(intBuffer);
     }
     perviousOperator = symbol;
     buffer = 0;
}

function flushOperation(intBuffer) {
     if (perviousOperator === '+') {
          runningTotal += intBuffer;
     }
     
     else if (perviousOperator === '-') {
          runningTotal -= intBuffer;
     }
     
     else if (perviousOperator === '*') {
          runningTotal *= intBuffer;
     }
     
     else if (perviousOperator === '÷') {
          runningTotal /= intBuffer;
     }
}

function handleNumber(numberString) {
     if (buffer === '0') {
          buffer = numberString;
     }
     
     else {
          buffer += numberString;
     }
}

function inits() {
     document.querySelector('.calc-buttons').addEventListener('click', function(event) {
          buttonClick(event.target.innerText);
     });
}

inits();
