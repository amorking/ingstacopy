<template>
  <v-app-bar
    class="core-app-bar"
    height="80"
    color="white"
    style="padding: 0 16px;"
    elevation="0"
  >
    <v-btn icon style="padding: 4px;">
      <v-icon large color="#e60023">
        mdi-pinterest
      </v-icon>
    </v-btn>
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
a {
  text-decoration: none;
  outline: none;
}
</style>
