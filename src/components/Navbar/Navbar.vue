<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-brand">
        <h2>Twitter Clone</h2>
      </div>
      <div class="user">
        <div class="username">
          <h3>{{ fullname }}</h3>
          <p>@{{ username }}</p>
        </div>
        <Avatar :width="`50px`" :style="{ width: width + 'px', height: height + 'px' }" :avatar="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from './Avatar.vue'

export default {
  data() {
    return {
      width: 50,
      height: 50
    }
  },
  inject: ['fullname', 'username', 'avatar'],
  components: {
    Avatar
  }
}
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 5rem;
    padding: 10px 20px;
    background-color: #BFACE0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar {
    width: 53rem;
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

  .username {
    margin-right: 10px;
  }
</style>