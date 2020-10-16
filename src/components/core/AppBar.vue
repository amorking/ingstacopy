<template>
  <v-app-bar class="core-app-bar" height="60" color="white" elevation="1">
    <router-link to="">
      <v-btn icon>
        <v-icon class="mt-1" large>
          mdi-camera-outline
        </v-icon>
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <img
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt="insta_logo"
      max-width="120"
      class="mt-1"
    />
    <v-spacer></v-spacer>
    <router-link to="">
      <v-btn icon>
        <v-icon large>
          mdi-send-outline
        </v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'CoreAppBar',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-toolbar__content {
  width: 100%;
}
</style>
