import { ref } from 'vue';
import { db } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const res = await db
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .get();
      posts.value = res.docs.map((item) => {
        // console.log(item.data());
        return {
          ...item.data(),
          id: item.id,
        };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return {
    posts,
    error,
    load,
  };
};

export default getPosts;

// json server fetch
// ------------------------------------------------------ //
// let data = await fetch('http://localhost:3000/posts');
// if (!data.ok) {
//   throw Error('no data available');
// }
// posts.value = await data.json();
