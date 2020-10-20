<template>
  <div class="like px-4">
    <span class="like-count">좋아요 {{ post.like[0] }}</span>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on"> 외 {{ post.like.length - 1 }}명</span>
      </template>

      <!-- 아래 요소는 v-menu처럼 home의 바깥에서 생성됩니다. 부모 컴포의 CSS를 상속 받기 어렵다고 생각합시다. -->
      <v-card class="pa-4">
        <ul class="pa-0">
          <li
            class="d-flex align-center py-2"
            v-for="(liker, i) in post.like"
            :key="i"
          >
            <v-avatar class="mr-4" size="32" color="#ddd">
              <v-icon color="#bbb">mdi-account</v-icon>
            </v-avatar>
            {{ liker }}
            <v-spacer></v-spacer>
            <v-btn color="primary">팔로우</v-btn>
          </li>
        </ul>
        <div class="d-flex under-btn">
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            닫기
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
  <!-- /.liker -->
</template>

<script>
export default {
  name: 'FeedLike',
  props: ['post'],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.like {
  font-weight: bold;
}
</style>
