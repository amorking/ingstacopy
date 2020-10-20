<template>
  <div class="text-wrap pa-4">
    <div class="text">
      <p>
        <span class="user-name mr-1">
          {{ post.userProfile.name }}
        </span>
        {{ post.content.text }}
        <a class="link" href="#"></a>
      </p>
    </div>
    <div class="comment-wrap">
      <ul>
        <li v-for="(comment, i) in post.comments" :key="i">
          <span class="user-name mr-1">{{ comment.name }}</span>
          <span>{{ comment.text }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- /.text-wrap -->
</template>

<script>
export default {
  name: 'FeedText',
  props: ['post'],
};
</script>

<style lang="scss" scoped></style>
