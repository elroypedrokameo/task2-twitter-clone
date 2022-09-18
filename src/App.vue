<script>
  import Navbar from './components/Navbar/Navbar.vue';
  import TweetForm from './components/Tweet Form/TweetForm.vue'
  import TweetCard from './components/Tweet Card/TweetCard.vue'

  export default {
    provide() {
      return {
        fullname: 'Elroy Pedro Kameo',
        username: 'elroy',
        avatar: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90'
      }
    },
    components: {
      Navbar,
      TweetForm,
      TweetCard
    }
  }
</script>

<template>
  <div class="main">
    <Navbar />
    <TweetForm />
    <div>
      <h2 class="feeds">Feeds</h2>
      <TweetCard />
    </div>
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
