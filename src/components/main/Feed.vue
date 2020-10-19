<template>
  <div class="feed">
    <div
      class="feed-wrap mb-4"
      v-for="(postItem, i) in post"
      :key="i"
      :v-model="postItem"
    >
      <div class="feed-user-info d-flex align-center pa-4">
        <v-avatar class="profile mr-4">
          <img :src="postItem.userProfile.img" alt="프로필 이미지" />
        </v-avatar>
        <span class="user-name">{{ postItem.userProfile.name }}</span>
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
          :src="postItem.content.img"
          :aspect-ratio="1 / 1"
          alt="컨텐츠 이미지"
        />
        <v-toolbar class="content-tool-bar" elevation="0">
          <v-btn icon>
            <v-icon color="#222">
              mdi-heart-outline
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#222">
              mdi-chat-outline
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#222">
              mdi-send-outline
            </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="#222">
              mdi-bookmark-outline
            </v-icon>
          </v-btn>
        </v-toolbar>
        <!-- /.content-tool-bar -->
        <div class="liker px-4">
          <span class="liker-count">좋아요 {{ postItem.like.length }}개</span>
        </div>
        <div class="text-wrap pa-4">
          <div class="text">
            <p>
              <span class="user-name mr-1">
                {{ postItem.userProfile.name }}
              </span>
              {{ postItem.content.text }}
              <a
                class="link"
                href="#"
                v-for="(hashItem, i) in postItem.content.hash"
                :key="i"
              >
                {{ `#${hashItem}` }}
              </a>
            </p>
          </div>
          <div class="comment-wrap">
            <ul>
              <li v-for="(comment, i) in postItem.comments" :key="i">
                <span class="user-name mr-1">{{ comment.name }}</span>
                <span>{{ comment.text }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- /.text-wrap -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.feed-wrap -->
  </div>
  <!-- /.feed -->
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Feed',
  computed: {
    ...mapState(['post']),
  },
  data() {
    return {};
  },
  methods: {},
  beforeMount() {
    this.$store.commit(
      'setHash',
      this.post.forEach((el) => {
        //내용을 쭉--쓰고 맨 뒤에 hashTag를 #으로 구분해서 붙였다는 가정
        let hashArr = el.content.text.split('#'); //post 배열의 각 오브젝트에서 content.text를 #으로 split
        let parsedHash = hashArr.splice(1, hashArr.length); //#으로 split된 배열의 1번째 자리부터 hashArr.length만큼 지우고, splice는 지운 값을 리턴한다.
        el.content.hash = parsedHash; //content에 hash라는 키를 추가하고 hash의 값을 parseHash로 초기화
        el.content.text = hashArr[0]; //content에 text를 hashArr에서 hashTag를 제외한 0번째 원소, 즉 내용으로 초기화.
        return el; //parsing한 내용을 추가한 el을 리턴
      })
    );
  },
};
</script>

<style lang="scss" scoped>
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
  .liker {
    font-weight: bold;
  }
}
</style>
