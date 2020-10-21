<template>
  <div class="text-container pa-4">
    <div class="text-inner">
      <div class="text-wrap">
        <span class="user-name mr-1">{{ post.userProfile.name }}</span>
        <span class="txt">
          {{ isMore ? text : text.slice(0, 10) + '...' }}
        </span>
        <span class="btn-more" @click="isMore = true" v-show="!isMore">
          더보기
        </span>
      </div>
      <a class="link" href="#"></a>
    </div>
    <!-- /.text -->
  </div>
  <!-- /.text-wrap -->
</template>

<script>
//부모 컴포넌트에서 v-bind로 받아오면 더 효율적이다.
// ex) this.post.content.text >>> text
export default {
  name: 'FeedText',
  props: ['post', 'text', 'comments'],
  data() {
    return {
      isMore: false,
    };
  },
  methods: {},
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
.text-container {
  .btn-more {
    color: #888;
  }
}
</style>
