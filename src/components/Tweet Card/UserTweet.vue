<template>
  <div class="container">
    <div class="user">
      <Avatar :avatar="avatar" />
      <div class="user-info">
        <h3>{{ fullname }}</h3>
        <p>@{{ username }}</p>
      </div>
    </div>
    <div class="tweet">
      <p>{{ caption }}</p>
    </div>
    <div class="icons">
      <LikeIcon :likes="likes" />
      <RetweetIcon />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>