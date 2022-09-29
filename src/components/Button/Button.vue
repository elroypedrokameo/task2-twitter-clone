<template>
  <button class="button" >{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
  .button {
    width: 5rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .primary {
    background-color: #645CAA;
  }

  .secondary {
    background-color: rgb(92, 85, 85);
  }

  .button:hover {
    cursor: pointer;
  }
</style>