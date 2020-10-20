<template>
  <div class="main">
    <StorySlider></StorySlider>
    <Feed
      v-for="(post, i) in posts"
      :key="i"
      :post="post"
      :myProfile="myProfile"
    >
      <!-- 매개변수 이름에 post를 넣어준다. v-bind:post = "post" -->
    </Feed>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    StorySlider: () => import('@/components/main/StorySlider.vue'),
    Feed: () => import('@/components/main/Feed.vue'),
  },
  computed: {
    ...mapState(['posts', 'myProfile']),
  },
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
.main {
  padding: 60px 0;
}
</style>
