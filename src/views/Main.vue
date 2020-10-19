<template>
  <div class="main">
    <StorySlider></StorySlider>
    <Feed></Feed>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    StorySlider: () => import('@/components/main/StorySlider.vue'),
    Feed: () => import('@/components/main/Feed.vue'),
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  padding: 60px 0;
}
</style>
