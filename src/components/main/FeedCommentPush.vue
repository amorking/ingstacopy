<template>
  <div class="comments-wrapper">
    <div class="d-flex align-center mb-4">
      <v-avatar class="profile mr-4">
        <img :src="myProfile.img" alt="프로필 이미지" />
      </v-avatar>
      <v-text-field
        solo
        rounded
        label="댓글을 입력하세요."
        hide-details="auto"
        v-model="myComment"
      >
        <template v-slot:append>
          <v-btn icon class="comment-ico" @click="pushComment">
            <v-icon>
              mdi-send
            </v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <div
      v-for="(comment, i) in comments"
      :key="i"
      no-gutters
      align="start"
      class="comment d-flex"
    >
      <div class="d-flex">
        <v-avatar class="mr-4" size="32" color="#ddd">
          <v-icon color="#bbb">mdi-account</v-icon>
        </v-avatar>
        <div class="comment-txt">
          <strong class="mr-2">
            {{ comment.name }}
          </strong>
          <span>{{ comment.text }}</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
    </div>
  </div>
  <!-- /.comments-wrapper -->
</template>

<script>
export default {
  name: 'FeedCommentPush',
  props: ['comments', 'myProfile', 'index'],
  data() {
    return {
      myComment: '',
    };
  },
  methods: {
    pushComment() {
      this.$store.commit('pushComment', {
        index: this.index,
        name: 'me',
        text: this.myComment,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-wrapper {
  p {
    margin: 0;
  }
  .comment-ico {
    margin-right: -10px;
  }
}
</style>
