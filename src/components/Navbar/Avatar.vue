<template>
  <img :src="avatar" alt="">
</template>

<script>
export default {
  props: {
    avatar: String
  }
}
</script>

<style>
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>