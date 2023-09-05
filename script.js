/*
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

*/

const DB = {
  collections: {
    posts: {
      posts_1: {
        name: 'Post 1',
        text: 'Some text 1'
      },
      posts_2: {
        name: 'Post 2',
        text: 'Some text 2'
      }
    },
    comments: {
      comments_1: {
        postId: 'post_1',
        text: 'Comment 1'
      },
      comments_2: {
        postId: 'post_1',
        text: 'Comment 2'
      }
    }
  }
};

const useCollection = coll => {

  const getPostItem = useCollection('collections');
  const item = getPostItem('posts_1');
console.log(item);
  return function(){
    console.log(posts);
    console.log(posts_1);
  }
};

const post = useCollection();
post();