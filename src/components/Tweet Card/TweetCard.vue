<template>
  <div class="container">
    <Tweet
      v-for="feed in feeds"
      :key="feed.id"
      :fullname="feed.fullname"
      :username="feed.username"
      :caption="feed.caption"
      :likes="feed.likes"
    />
    <!-- {
      for(feed in feeds) {
        for(reply in feed.reply) {
          if (reply.length > 0) {
            <Tweet
              :key="reply.id"
              :fullname="reply.fullname"
              :username="reply.username"
              :caption="reply.caption"
              :likes="reply.likes"
            />
          }
        }
      }
    } -->
  </div>
</template>

<script>
  import Tweet from './Tweet.vue'
  export default {
    methods: {
      handleLikes() {
        for(feed in this.feeds) {
          this.liked = !this.liked
          if(this.liked) {
            this.likes++
          } else {
            this.likes--
          }
        }
      }
    },
    data() {
      return {
        liked: false,
        feeds: [
          {
            id: 1,
            fullname: 'Elroy Pedro Kameo',
            username: 'elroy',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 7,
            retweets: 20,
            reply: [
              {
                id: 1,
                fullname: 'David de Gea',
                username: 'D_DeGea',
                caption: 'Testing',
                likes: 9
              }
            ]
          },
          {
            id: 2,
            fullname: 'John Doe',
            username: 'john',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 8,
            retweets: 20,
            reply: [
              {
                id: 2,
                fullname: 'Lizandro Marinez',
                username: 'lisandromartinezzz',
                caption: 'Testing 2',
                likes: 8
              }
            ]
          },
          {
            id: 3,
            fullname: 'Marcus Rashford',
            username: 'rashford',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 12,
            retweets: 20,
            likes: [
              {
                id: null,
                fullname: null,
                username: null,
                caption: null,
                likes: null
              }
            ]
          },
          {
            id: 4,
            fullname: 'Bruno Fernandes',
            username: 'rashford',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 1,
            retweets: 20,
            likes: [
              {
                id: null,
                fullname: null,
                username: null,
                caption: null,
                likes: null
              }
            ]
          }
        ]
      }
    },
    components: {
      Tweet
    },
  }
</script>

<style scoped>

</style>