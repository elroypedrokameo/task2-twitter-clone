<script>
  import Navbar from './components/Navbar/Navbar.vue';

  export default {
    provide() {
      return {
        fullname: 'Elroy Pedro Kameo',
        username: 'elroy',
        avatar: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90'
      }
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
    margin-top: -8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
