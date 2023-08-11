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



// ЗАВДАННЯ 1
// const useCollection = collectionName => {
//   const fakeDatabase = {
//     posts: [
//       { id: 'posts_1', name: 'Post 1', text: 'Some text 1' },
//       { id: 'posts_2', name: 'Post 2', text: 'Some text 2' },
//     ],
//   };

//   const getPostItem = id => {
//     const collection = fakeDatabase[collectionName];
//     for (const item of collection) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return null;
//   };

//   return getPostItem;
// };

// const getPostItem = useCollection('posts');


// const item1 = getPostItem('posts_1');
// console.log(item1);


// const notFoundItem = getPostItem('posts_4');
// console.log(notFoundItem);

// function useCollection(collectionName) {

//   const fakeDatabase = {
//     posts: [
//       { id: 'posts_1', name: 'Post 1', text: 'Some text 1' },
//       { id: 'posts_2', name: 'Post 2', text: 'Some text 2' },
    
//     ],
//   };

 
//   function getPostItem(id) {
   
//     const collection = fakeDatabase[collectionName];

  
//     for (const item of collection) {
//       if (item.id === id) {
//         return item;
//       }
//     }


//     return null;
//   }


//   return getPostItem;
// }




const useCollection = coll => {
  if (!DB.collections.hasOwnProperty(coll)) {
    DB.collections[coll] = {};
  }

  return {
    get: id => {
      const item = DB.collections[coll][id];
      if (item) {
        return { ...item, id };
      } else {
        return null;
      }
    },
    create: (id, data) => {
      DB.collections[coll][id] = data;
    },
    deleteOne: id => {
      delete DB.collections[coll][id];
    },
    edit: (id, newData) => {
      if (DB.collections[coll].hasOwnProperty(id)) {
        DB.collections[coll][id] = { ...DB.collections[coll][id], ...newData };
      } else {
        throw new Error(`Item '${id}' does not exist in collection '${coll}'.`);
      }
    }
  };
};


const postsCollection = useCollection('posts');

const item1 = postsCollection.get('posts_1');
console.log(item1);

const notFoundItem = postsCollection.get('posts_3');
console.log(notFoundItem);



collection.get('some-id');
collection.create(data);
collection.deleteOne('some-id');
collection.edit('some-id', dataToEdit);