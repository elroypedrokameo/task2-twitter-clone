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
      <div v-if="this.feed.username === this.user.username">
        <DeleteIcon @click="$emit('deleteFeed')" />
      </div>
    </div>
    <button v-if="isChild" class="btn-reply" @click="handleOnShowReply()" v-show="feed.reply">
      Reply
    </button>
    <div  v-if="this.showCommentForm === true">
      <TweetForm
        :btnCancel="true"
        :text="this.comment"
        :maxCharacter="maxCharacter"
        @closeForm="handleOnShowReply()"
        class="tweet-comment-form"
        v-on:addFeeds="handleComment()"
        v-model="this.comment"
      />
    </div>
    <div v-if="hasReply" >
      <TweetCard 
        v-for="reply in feed.reply"
        :key="reply.id"
        :feed="reply"
        :isChild="false"
        @deleteFeed="handleDeleteComment(reply)"
        class="reply"
        v-model="this.comment"
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
  data() {
    return {
      width: 50,
      height: 50,
      liked: false,
      like: this.feed.likes,
      retweet: this.feed.retweets,
      comment: '',
      showCommentForm: false,
      maxCharacter: 30,
      user: {
          fullname: 'Elroy Pedro Kameo',
          username: 'elroykameo',
          avatar: 'https://img.nimo.tv/t/201910061570391243203_1629512473223_avatar.png/w180_l0/img.png'
        },
    }
  },
  props: {
    feed: {
      type: Object,
      required: true
    },
    isChild: {
      type: Boolean,
      default: true
    }
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

    handleOnShowReply() {
      this.showCommentForm = !this.showCommentForm
    },

    handleComment() {
      if(this.comment.length > 0) {
        this.feed.reply.unshift({
          id: this.feed.reply.length + 1,
          fullname: this.user.fullname,
          username: this.user.username,
          avatar: this.user.avatar,
          caption: this.comment,
          likes: 0,
          retweets: 0,
          reply: []
        })
        this.comment = ''
        
        console.log("Comment", this.feed)
      } else {
        alert('Please input your comment')
      }

      this.handleOnShowReply()
    },

    handleDeleteComment(id) {
      // console.log("Delete Comment", this.feed.reply)
      for(let i = 0; i < this.feed.reply.length; i++) {
        if(this.feed.reply[i] === id) {
          this.feed.reply.splice(i, 1)
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

  .btn-reply {
    margin-top: 8px;
    padding: 5px;
    width: 47.4rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

  .tweet-comment-form {
    width: 47.4rem!important;
    background-color: #00bd7e!important;
  }
</style>