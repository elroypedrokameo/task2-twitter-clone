<template>
  <div v-on:click="$emit('updateRetweets')" class="retweet-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      style="margin-top: 2px"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
      />
    </svg>
    <p class="title">{{ retweets }}</p>
  </div>
</template>

<script>
export default {
  props: {
    retweets: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  .retweet-icon {
    display: flex;
    align-items: center;
    margin-right: 6px;
    margin-left: 20px;
  }

  .title {
    margin-left: 8px;
  }
</style>