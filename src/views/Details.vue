<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>
      {{ post.title }}
    </h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">Delete post</button>
    <button @click="router.go(-1)" class="back">Back</button>
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { db } from '../firebase/config';
export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { post, error, load } = getPost(route.params.id);

    load();

    const handleDelete = async () => {
      await db
        .collection('posts')
        .doc(props.id)
        .delete();

      router.push({ name: 'Home' });
    };

    return { post, error, handleDelete, router };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0% auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
button.back {
  margin: 10px auto;
}
</style>
