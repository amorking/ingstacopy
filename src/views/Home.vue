<template>
  <div class="home">
    <div class="home-content"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
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
  background: #fff;
  min-width: 560px;
  min-height: 100vh;
}
</style>
