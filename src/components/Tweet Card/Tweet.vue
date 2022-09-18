<script>
  import Like from './LikeIcon.vue'
  import RetweetIcon from './RetweetIcon.vue'
  import Avatar from '../Navbar/Avatar.vue'

  export default {
    data () {
      return {
        width: 50,
        height: 50,
        avatar: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90',
        likes: 10,
        liked: false,
        retweets: 0,
        primary: 'primary',
      }
    },
    components: {
      Like,
      RetweetIcon,
      Avatar,
    },
    props: {
      fullname: String,
      username: String,
      caption: String
    },
    methods: {
      handleLikes() {
        this.liked = !this.liked
        if (this.liked) {
          this.likes++
        } else {
          this.likes--
        }
      },

      handleRetweets() {
        this.retweets += 1
      }
    }
  }
</script>

<template>
  <div class="tweet-container">
    <div class="user">
      <Avatar :avatar="avatar" :style="{ width: width + 'px', height: height + 'px' }" />
      <div class="usernames">
        <h4>{{ fullname }}</h4>
        <p>@{{ username }}</p>
      </div>
    </div>
    <p class="caption">{{ caption }}</p>
    <form action="submit">
      <input placeholder="Reply" type="text">
    </form>
    <div class="user-action">
      <Like @click="handleLikes()" :likes="likes" :class="[liked ? 'primary' : '']" />
      <RetweetIcon @click="handleRetweets()" :retweets="retweets" />
    </div>
  </div>
</template>

<style scoped>
  .tweet-container {
    padding: 20px;
    margin-top: 20px;
    width: 50rem;
    border-radius: 10px;
    background-color: rgb(226, 238, 203);
  }

  .user {
    display: flex;
    align-items: center;
    margin-top: -10px;
  }

  .primary {
    color: #00bd7e;
  }
  .usernames {
    margin-left: 8px;
  }

  .usernames h4{
    margin-top: 15px;
  }

  .usernames p {
    margin-top: -15px;
  }

  input {
    padding: 10px;
    width: 48rem;
    border-radius: 10px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .user-action {
    display: flex;
    align-items: center;
    margin: 5px;
    cursor: pointer;
  }
</style>