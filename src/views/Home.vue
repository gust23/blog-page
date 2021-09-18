<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts';
import { ref, reactive, computed, watch, watchEffect } from 'vue';
import PostList from '../components/PostList.vue';
export default {
  components: { PostList },
  name: 'Home',
  setup() {
    const showPosts = ref(true);
    const { posts, error, load } = getPosts();
    load();
    return {
      posts,
      showPosts,
      error,
    };
  },
};
</script>
