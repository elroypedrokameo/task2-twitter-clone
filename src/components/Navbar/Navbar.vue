<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-brand">
        <h2>Twitter Clone</h2>
      </div>
      <div class="user">
        <div>
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
    width: 100%;
    height: 5rem;
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
    margin-right: 40px;
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