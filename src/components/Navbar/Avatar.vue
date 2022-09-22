<template>
  <img :src="avatar" :style="{ width: width, height: height }" alt="">
</template>

<script>
export default {
  props: {
    avatar: String,
    width: String,
    height: String
  }
}
</script>

<style scoped>
  img {
    border-radius: 50%;
  }
</style>