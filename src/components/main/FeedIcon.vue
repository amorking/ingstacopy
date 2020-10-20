<template>
  <div class="icons-container">
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
  </div>
</template>

<script>
export default {
  name: 'FeedIcon',
  props: ['post'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
