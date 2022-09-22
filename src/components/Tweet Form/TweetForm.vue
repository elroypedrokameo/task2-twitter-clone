<template>
  <div class="tweet-card">
    <div>
      <form class="form-tweet" action="submit" ref="form" @submit.prevent="handleSubmit()">
        <textarea @input="characterCheck()" ref="input" v-model="text" class="input-tweet" placeholder="Write something" name="" id="" cols="30" rows="10"></textarea>
        <div class="character-button">
          <p class="character">{{countCharacters()}}/{{ maxChar }}</p>
          <Button :disabled="isDisabled" :class="[isDisabled ? secondary : primary]"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'
import Tweet from '../Tweet Card/Tweet.vue'

export default {
  mounted() {
    this.$refs.input.focus();
    console.log('Caption', this.captions)
  },

  data() {
    return {
      text: '',
      maxChar: 30,
      isDisabled: false,
      primary: 'primary',
      secondary: "secondary",
      captions: [
        {
          id: null,
          fullname: null,
          username: null,
          caption: null,
        },
      ]
    }
  },

  components: {
    Button,
    Tweet
  },

  methods: {
    countCharacters() {
      return this.text.length
    },

    characterCheck() {
      if (this.text.length > this.maxChar) {
        this.isDisabled = true
      } else {
        this.isDisabled = false;
      }
    },

    handleSubmit() {
      if(this.text === '') {
        alert('Anda belum menulis sesuatu!')
      } else {
        this.captions.push({
          id: this.captions.length,
          fullname: 'Elroy Pedro Kameo',
          username: 'elroy',
          caption: this.text
        })
        this.$refs.form.reset()
        this.text = ''
        console.log('Hasil Submit', this.captions)
      }
    }
  }
}
</script>

<style scoped>
  .tweet-card {
    border: solid 1px black;
    border-radius: 0px 0px 10px 10px;;
    width: 52.4rem;
    height: 9rem;
  }

  .primary {
    background-color: #00bd7e;
  }

  .secondary {
    background-color: rgb(92, 85, 85);
  }

  .form-tweet {
    display: flex;
    flex-direction: column;
  }

  .character-button {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .input-tweet {
    background-color: rgb(198, 255, 236);
    width: 48rem;
    height: 1rem;
    border: none;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
    margin-top: 5px;
  }

  .input-tweet:focus {
    outline: none;
  }

  .character {
    margin-top: -2px;
  }

  .user-tweet {
    margin: 30rem;
  }
</style>