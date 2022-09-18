<template>
  <div class="container-like">
    <!-- <svg>

    </svg> -->
    <h3>Like</h3>
    <p>{{ likes }}</p>
  </div>
</template>

<script>
export default {
  props: {
    likes: Number
  },
}
</script>

<style scoped>
  .container-like {
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 8px;
  }
</style>