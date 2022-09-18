<template>
  <div class="container-like">
    <h3>Retweet</h3>
    <p>{{ retweets }}</p>
  </div>
</template>

<script>
export default {
  props: {
    retweets: Number
  }
}
</script>

<style scoped>
  h3 {
    margin-left: 30px;
  }
  .container-like {
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 8px;
  }
</style>