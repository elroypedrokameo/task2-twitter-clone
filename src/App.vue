<template>
  <div class="main">
    <Navbar />
    <TweetForm
      v-on:addFeeds="handleSubmit()"
      :text="this.text"
      :maxCharacter="maxCharacter"
      v-model="this.text"
    />
    <h2 class="feeds">Feeds</h2>
    <TweetCard
      v-for="feed in feeds"
      :key="feed.id"
      :feed="feed"
      v-on:addComment="handleComment(feed.id)"
      v-model="this.comment"
    />
  </div>
</template>

<script>
  import Navbar from './components/Navbar/Navbar.vue'

  export default {
    name: 'App',
    data() {
      return {
        user: {
          fullname: 'Elroy Pedro Kameo',
          username: 'elroykameo',
          avatar: 'https://img.nimo.tv/t/201910061570391243203_1629512473223_avatar.png/w180_l0/img.png'
        },
        text: '',
        maxCharacter: 30,
        comment: '',
      }
    },
    methods: {
      handleSubmit() {
        if(this.text.length === 0) {
          alert('Masukkan caption terlebih dahulu!')
        } else {
          this.feeds.unshift({
            id: this.feeds.length,
            fullname: this.user.fullname,
            username: this.user.username,
            caption: this.text,
            avatar: this.user.avatar,
            likes: 0,
            retweets: 0,
            reply: [
            ]
          })
          this.text = ''
          console.log("Feeds", this.feeds)
        }
      },
    },
    computed: {
      feeds() {
        return [
          {
            id: 1,
            fullname: 'Bruno Fernandes',
            username: 'b_fernandes8',
            caption: 'Amazing thank you for the @ManUtd fans in Moldova. Pleased we deliver the result for you. 🙌 #MUFC',
            avatar: 'https://pbs.twimg.com/profile_images/1421602708772081668/vlWOX6iN_400x400.jpg',
            likes: 1000,
            retweets: 2,
            reply: [
              {
                id: 1,
                fullname: 'Manchester United',
                username: 'ManUtd',
                caption: '🔥🔥🔥',
                avatar: 'https://pbs.twimg.com/profile_images/1572156794725715968/HWq2jckd_400x400.jpg',
                likes: 10,
                retweets: 2,
                reply: []
              }
            ]
          },
          {
            id: 2,
            fullname: 'Monkey D. Luffy',
            username: 'mugiwaranoluffy',
            caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOuU7liBfM5fPZg7CDr4KLpdT1R-KPiKyHw&usqp=CAU',
            likes: 10,
            retweets: 5,
            reply: [
              {
                id: 1,
                fullname: 'Shanks',
                username: 'akagaminoshanks',
                caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_l82L9AKB6EJNPHvoLGRS1EmRvCMHsTJCg&usqp=CAU',
                likes: 10,
                retweets: 5,
                reply: []
              },
              {
                id: 2,
                fullname: 'Roronoa Zoro',
                username: 'zoro',
                caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmHcFnaO6sNhIxN6nrpKm-HtlnhuYT2xLDg&usqp=CAU',
                likes: 10,
                retweets: 5,
                reply: []
              }
            ]
          },
          {
            id: 3,
            fullname: 'Cristiano Ronaldo',
            username: 'Cristiano',
            caption: 'Feliz por estar de volta a casa! 😀🇵🇹🙏🏽',
            avatar: 'https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg',
            likes: 1000,
            retweets: 2,
            reply: [
              
            ]
          }
        ]
      }
    },
    provide() {
      return this.user
    },
    components: {
      Navbar
    },
  }

</script>

<style scoped>
  .main {
    margin: -8px 0 0 -8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE;
  }
  .feeds {
    margin-top: 30px;
    margin-bottom: -5px;
  }
</style>
