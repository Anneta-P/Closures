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
    if(!item) {
      return null;
    }
    const itemWithId = {...item, id};
    return itemWithId;
  }
  return getItemByCollectionAndId;
}


const getPostItemById = useCollection('posts');

const item1 = getPostItemById('posts_1');
console.log(item1);

const notFoundItem = getPostItemById('posts_4');
console.log(notFoundItem);

console.log('DB', DB);











