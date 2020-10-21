<template>
  <div class="comments-container px-4 mb-4">
    <div class="button-wrapper">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ on, attrs }">
          <button v-bind="attrs" v-on="on">
            댓글 {{ comments.length }}개 모두 보기
          </button>
        </template>
        <v-card class="pa-4">
          <!-- 아래 요소는 v-menu처럼 home의 바깥에서 생성됩니다. 부모 컴포의 CSS를 상속 받기 어렵다고 생각합시다. -->
          <CommentPush
            :comments="comments"
            :myProfile="myProfile"
            :index="index"
          ></CommentPush>
          <div class="under-btn d-flex">
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              닫기
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
    <!-- /.button-wrapper -->
    <div class="comments-wrapper">
      <v-row
        v-for="(comment, i) in comments"
        :key="i"
        no-gutters
        align="center"
      >
        <p>
          <strong class="mr-2">{{ comment.name }}</strong
          >{{ comment.text }}
        </p>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedComments',
  props: ['comments', 'myProfile', 'index'],
  components: {
    CommentPush: () => import('@/components/main/FeedCommentPush.vue'),
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  button {
    color: gray;
    margin-bottom: 8px;
  }
}
.comments-wrapper {
  p {
    margin: 0;
  }
  .comment-ico {
    margin-right: -10px;
  }
}
</style>
