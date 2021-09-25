import { ref } from 'vue';
import { db } from '../firebase/config';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const res = await db
        .collection('posts')
        .doc(id)

        .get();
      if (!res.exists) {
        throw Error('That post does not exist');
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return {
    post,
    error,
    load,
  };
};

export default getPost;

// json serve fetch
// ------------------------------------------------------- //
// let data = await fetch('http://localhost:3000/posts/' + id);
// if (!data.ok) {
//   throw Error('that post does not exist');
// }
// post.value = await data.json();
