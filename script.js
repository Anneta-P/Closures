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

const useCollection = (coll) => {
  const getItemByCollectionAndId = (id) => {
    const item = DB.collections[coll][id];
    return item;
  }
  return getItemByCollectionAndId;
}

function getItemByCollectionAndId(){
  let element;
  element = document.getElementById("posts_4");
  return element;
};

const notFoundItem = getItemByCollectionAndId('posts_4');


const getPostItemById = useCollection('posts');
const getCommentItemById = useCollection('comments');


const item1 = getPostItemById('posts_1');
const item2 = getCommentItemById('posts_1');

console.log(item1);
console.log(notFoundItem);






