<template>
  <div class="main">
    <StorySlider></StorySlider>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    StorySlider: () => import('@/components/main/StorySlider.vue'),
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
