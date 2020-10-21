<template>
  <div class="feed">
    <div class="feed-wrap mb-4">
      <div class="feed-user-info d-flex align-center pa-4">
        <v-avatar class="profile mr-4">
          <img :src="post.userProfile.img" alt="프로필 이미지" />
        </v-avatar>
        <span class="user-name">{{ post.userProfile.name }}</span>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="#222">
            mdi-dots-horizontal
          </v-icon>
        </v-btn>
      </div>
      <!-- /.feed-user-info -->
      <div class="content">
        <v-img
          :src="post.content.img"
          :aspect-ratio="1 / 1"
          alt="컨텐츠 이미지"
        />
        <FeedIcon :post="post"></FeedIcon>
        <FeedLike :post="post"></FeedLike>
        <FeedText :post="post" :text="post.content.text"></FeedText>
        <FeedComment
          :comments="post.comments"
          :myProfile="myProfile"
          :index="index"
        ></FeedComment>
      </div>
      <!-- /.content -->
      <div class="comment-wrap d-flex align-center px-4 pb-6">
        <v-avatar class="mr-4">
          <v-img :src="myProfile.img"></v-img>
        </v-avatar>
        <v-text-field
          class="comment-box"
          label="댓글을 입력하세요."
          solo
          rounded
          hide-details="auto"
        >
          <template v-slot:append>
            <v-btn icon class="comment-ico">
              <v-icon>
                mdi-send
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>
      <!-- /.comment -->
    </div>
    <!-- /.feed-wrap -->
  </div>
  <!-- /.feed -->
</template>

<script>
export default {
  name: 'Feed',
  props: ['post', 'myProfile', 'index'],
  components: {
    FeedIcon: () => import('@/components/main/FeedIcon.vue'),
    FeedLike: () => import('@/components/main/FeedLike.vue'),
    FeedText: () => import('@/components/main/FeedText.vue'),
    FeedComment: () => import('@/components/main/FeedComment.vue'),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.feed {
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .feed-wrap {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .feed-user-info {
      width: 100%;
      border-bottom: 1px solid #ddd;
    }
    .user-name {
      font-weight: bold;
    }
    .comment-ico {
      margin-right: -10px;
    }
  }
}
</style>
