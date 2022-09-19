<template>
  <div class="container">
    <h2>Feeds</h2>
    <Tweet
      v-for="feed in feeds"
      :key="feed.id"
      :fullname="feed.fullname"
      :username="feed.username"
      :caption="feed.caption"
    />
  </div>
</template>

<script>
  import Tweet from './Tweet.vue'
  export default {
    // methods: {
    //   handleLikes() {
    //     this.liked = !this.liked
    //     if (this.liked) {
    //       this.likes++
    //     } else {
    //       this.likes--
    //     }
    //   },

    //   handleRetweets() {
    //     this.retweets += 1
    //   }
    // },
    data() {
      return {
        feeds: [
          {
            id: 1,
            fullname: 'Elroy Pedro Kameo',
            username: 'elroy',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 7,
            retweets: 20,
          },
          {
            id: 2,
            fullname: 'John Doe',
            username: 'john',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 8,
            retweets: 20,
          },
          {
            id: 3,
            fullname: 'Marcus Rashford',
            username: 'rashford',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 12,
            retweets: 20,
          },
          {
            id: 4,
            fullname: 'Bruno Fernandes',
            username: 'rashford',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.',
            likes: 1,
            retweets: 20,
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