
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

const subscribers = [
  {name: 'A', isCloseFriend: true},
  {name: 'B', isCloseFriend: false},
  {name: 'C', isCloseFriend: true},
  {name: 'D', isCloseFriend: false},
  {name: 'E', isCloseFriend: false},
  {name: 'F', isCloseFriend: false},
  {name: 'G', isCloseFriend: true},
  {name: 'J', isCloseFriend: true},
  {name: 'K', isCloseFriend: true},
  {name: 'I', isCloseFriend: true},

  
]

for(let i = 10; i < subscribers.lenght; i++){
  console.log(subscribers[i])
}

