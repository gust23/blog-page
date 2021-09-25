<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div class="layout" v-if="posts.length">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import getPosts from '../composables/getPosts';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import { useRoute } from 'vue-router';

export default {
  components: { PostList, TagCloud },
  setup(props) {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();
    const tagPosts = computed(() => {
      return posts.value.filter((item) => item.tags.includes(route.params.tag));
    });
    console.log(props.tag);
    return {
      posts,
      error,
      tagPosts,
    };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
