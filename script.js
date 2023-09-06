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
      },
      abra: {
        name: 'Post 3',
        text: 'Some text 3'
      },
    },
    comments: {
      comments_1: {
        postId: 'post_1',
        text: 'Comment 1'
      },
      comments_2: {
        postId: 'post_1',
        text: 'Comment 2'
      },
      abra: {
        name: 'Comment 3',
        text: 'Comment 3'
      },
    }
  }
};



// const getCommentsById = (id) => {
//   const collectionName = 'comments';
//   const item = DB.collections[collectionName][id];
//   return item;
// };

// const getPostsById = (id) => {
//   const collectionName = 'posts';
//   const item = DB.collections[collectionName][id];
//   return item;
// };

const useCollection = (collectionName) => {
  const getItemByCollectionAndId = (id) => {
    const item = DB.collections[collectionName][id];
    return item;
  }
  return getItemByCollectionAndId;
}

const getPostItemById = useCollection('posts');
const getCommentItemById = useCollection('comments');

// FINAL GOAL!!!
const item1 = getPostItemById('abra');
const item2 = getCommentItemById('abra');
console.log('ITEM 1', item1);
console.log('ITEM 2', item2);
console.log('ARE EQUAL?', item1 === item2);