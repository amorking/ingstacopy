<template>
  <div class="story-slider">
    <div class="wrapper">
      <div class="story-item" v-for="(storyItem, i) in story" :key="i">
        <div class="story-img">
          <img :src="storyItem.img" />
        </div>
        <span>{{ storyItem.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StorySlider',
  computed: {
    ...mapState(['story']),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.story-slider {
  overflow-x: auto;
}

.wrapper {
  width: 1000px;
  white-space: nowrap;
  padding: 24px;
}

.story-item {
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  .story-img {
    overflow: hidden;
    border: 1px solid red;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
