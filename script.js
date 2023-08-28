
const newCounter = () => {
let value = 0;
  const counter = () =>{
    value ++;
    return value;
  }
  return counter;
} 

const whiteCounter = newCounter();
const blackCounter = newCounter();

console.log('first', whiteCounter());
console.log('second', blackCounter());
console.log('second', blackCounter());
console.log('second', blackCounter());
console.log('first', whiteCounter());