<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <post-list v-if="showPosts" :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts';
import { ref, reactive, computed, watch, watchEffect } from 'vue';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import Spinner from '../components/Spinner.vue';
export default {
  components: { PostList, Spinner, TagCloud },
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

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
