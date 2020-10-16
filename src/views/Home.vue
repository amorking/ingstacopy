<template>
  <div class="home">
    <div class="home-content">
      <AppBar></AppBar>
      <CoreView></CoreView>
      <ToolBar></ToolBar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    AppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
    ToolBar: () => import('@/components/core/ToolBar.vue'),
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #e7e7e7;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.home-content {
  position: relative;
  background: #fff;
  width: 100%;
  max-width: 560px;
  min-height: 100vh;
}
</style>
