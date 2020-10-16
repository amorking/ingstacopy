<template>
  <v-footer class="core-tool-bar px-6" height="60" color="white" absolute>
    <v-row justify="space-between" dense>
      <v-col
        class="d-flex justify-center"
        cols="2"
        v-for="(tab, i) in tabs"
        :key="i"
      >
        <router-link :to="tab.to">
          <!-- tabs에서 각각의 tab에 대한 to -->
          <v-btn class="mx-4" icon>
            <v-icon size="32">
              {{ tab.icon }}
            </v-icon>
          </v-btn>
        </router-link>
      </v-col>
      <v-col class="d-flex justify-center" cols="2">
        <router-link to="/">
          <v-btn icon>
            <v-avatar size="32">
              <img src="https://picsum.photos/id/237/200/300" alt="" />
            </v-avatar>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'CoreAppBar',
  data() {
    return {
      tabs: [
        {
          to: '/',
          icon: 'mdi-home-variant',
        },
        { to: '/', icon: 'mdi-magnify' },
        { to: '/', icon: 'mdi-comment-plus-outline' },
        { to: '/', icon: 'mdi-heart-outline' },
      ],
    };
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
