<template>
  <div class="container">
    <div class="navbar-brand">
      <h2>Twitter Clone</h2>
    </div>
    <div class="user">
      <div>
        <h3>{{ fullname }}</h3>
        <p>@{{ username }}</p>
      </div>
      <Avatar :avatar="avatar" />
    </div>
  </div>
</template>

<script>
  import Avatar from './Avatar.vue'

export default {
  inject: ['fullname', 'username', 'avatar'],
  components: {
    Avatar
  }
}
</script>

<style>
  .container {
    width: 50rem;
    height: 5rem;
    margin: auto;
    padding: 10px 20px;
    background-color: rgb(94, 202, 202);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .user h3 {
    margin-top: 15px;
  }

  .user  p {
    margin-top: -15px;
  }
</style>