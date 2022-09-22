<script>
  import Navbar from './components/Navbar/Navbar.vue';

  export default {
    data() {
      return {
        user: {
          fullname: 'Elroy Pedro Kameo',
          username: 'elroykameo',
          avatar: 'https://img.nimo.tv/t/201910061570391243203_1629512473223_avatar.png/w180_l0/img.png'
        }
      }
    },
    provide() {
      return this.user
    },
    components: {
      Navbar
    }
  }
</script>

<template>
  <div class="main">
    <Navbar />
  </div>
</template>

<style scoped>
  .main {
    margin: -8px 0 0 -8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE;
  }
</style>
