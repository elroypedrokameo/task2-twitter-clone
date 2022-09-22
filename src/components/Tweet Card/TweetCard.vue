<template>
  <div class="tweet-container">
    <div class="user">
      <Avatar :width="`50px`" :style="{ width: width + 'px', height: height + 'px' }" :avatar="feed.avatar" />
      <div class="user-info">
        <h3 class="fullname">{{ feed.fullname }}</h3>
        <p class="username">@{{ feed.username }}</p>
      </div>
    </div>
    <p class="caption">{{ feed.caption }}</p>
    <div class="user-action">
      <div>
        <div v-if="this.liked === true">
          <LikedIcon v-on:updateLikes="handleLike()" :likes="this.like" />
        </div>
        <div v-else>
          <LikeIcon v-on:updateLikes="handleLike()" :likes="this.like"/>
        </div>
      </div>
      <RetweetIcon v-on:updateRetweets="handleRetweet()" :retweets="this.retweet" />
      <DeleteIcon />
    </div>
    <form
      v-on:submit.prevent="$emit('addComment', id)"
      class="reply-form"
      action="submit"
    >
      <input
        type="text"
        placeholder="Reply"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </form>
    <div v-if="hasReply" >
      <TweetCard 
        v-for="reply in feed.reply"
        :key="reply.id"
        :feed="reply"
        class="reply"
      />
    </div>
  </div>
</template>

<script>
import LikeIcon from './LikeIcon.vue'
import LikedIcon from './LikedIcon.vue'
import RetweetIcon from './RetweetIcon.vue'
import DeleteIcon from './DeleteIcon.vue'

export default {
  name: 'TweetCard',
  props: {
    feed: {
      type: Object,
      required: true
    },
    comment: {
      type: String,
      default: ''
    },
    form: {
      type: String,
      required: true
    },
  },
  methods: {
    handleLike() {
      this.liked = !this.liked
      if(this.liked === true) {
        this.like++
      } else {
        this.like--
      }
    },

    handleRetweet() {
      this.retweet++
    },

    handleComment(id) {
      if (this.comment.length === 0) {
        alert('Masukkan komentar terlebih daulu!')
      } else {
        for(let i = 0; i < this.reply.length; i++) {
          if(this.reply[i].id === id) {
            this.feeds[i].reply.unshift({
              id: this.feeds[i].reply.length + 1,
              fullname: 'Elroy Pedro',
              username: 'elroykameo',
              caption: this.comment,
              avatar: 'https://img.nimo.tv/t/201910061570391243203_1629512473223_avatar.png/w180_l0/img.png',
              likes: 0,
              retweets: 0,
              reply: []
            })
            this.comment = ''
            // this.$refs.inputcomment.reset()
            console.log("Comment", this.feeds[i])
          }
        }
      }
    }
  },
  computed: {
    hasReply() {
      const { reply } = this.feed
      return reply && reply.length > 0
    },
  },
  data() {
    return {
      width: 50,
      height: 50,
      liked: false,
      like: this.feed.likes,
      retweet: this.feed.retweets,
      comment: ''
    }
  },
  components: {
    LikeIcon,
    RetweetIcon,
    LikedIcon,
    DeleteIcon
  }
}
</script>

<style scoped>
  .caption {
    margin-top: 5px;
  }

  .tweet-container {
    padding: 20px;
    margin-top: 20px;
    width: 50rem;
    border-radius: 10px;
    background-color: #BFACE0;
    height: auto;
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
    width: 40rem;
    border-radius: 10px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .user-action {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: -7rem;
    margin-bottom: -7rem;
  }

  .retweet {
    margin-left: 10px;
  }
  .user-action p {
    margin-left: 10px;
  }

  .reply {
    background-color: #645CAA;
    width: 45rem;
  }

  .user-info {
    margin-left: 10px;
  }

  .user-info h3 {
    margin-top: 15px;
  }

  .user-info p {
    margin-top: -15px;
  }

  .reply-form {
    margin-top: 15px;
  }
</style>