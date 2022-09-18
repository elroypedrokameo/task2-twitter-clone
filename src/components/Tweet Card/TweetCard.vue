<template>
  <div class="container">
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
    data() {
      return {
        feeds: [
          {
            id: 1,
            fullname: 'Elroy Pedro Kameo',
            username: 'elroy',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.'
          },
          {
            id: 2,
            fullname: 'John Doe',
            username: 'john',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.'
          },
          {
            id: 3,
            fullname: 'Marcus Rashford',
            username: 'rashford',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.'
          },
          {
            id: 4,
            fullname: 'Bruno Fernandes',
            username: 'rashford',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam. At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Cras ornare arcu dui vivamus arcu felis.'
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