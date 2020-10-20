<template>
  <div class="story-slider">
    <div class="wrapper">
      <div class="story-item mr-4">
        <v-badge
          avatar
          bordered
          overlap
          icon="mdi-plus"
          offset-x="24"
          offset-y="24"
          bottom
          class="d-flex"
        >
          <div class="story-img">
            <img :src="myProfile.img" alt="" />
          </div>
        </v-badge>
        <span>내 스토리</span>
      </div>
      <div class="story-item mr-4" v-for="(storyItem, i) in story" :key="i">
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
    ...mapState(['story', 'myProfile']),
  },
};
</script>

<style lang="scss" scoped>
.story-slider {
  overflow-x: auto;
}

.wrapper {
  white-space: nowrap;
  padding: 16px 24px;
}

.story-item {
  display: inline-block;
  text-align: center;
  .story-img {
    overflow: hidden;
    border: solid 2px orangered;
    border-radius: 100px;
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.story-item:first-child .story-img {
  border: none;
}
</style>
