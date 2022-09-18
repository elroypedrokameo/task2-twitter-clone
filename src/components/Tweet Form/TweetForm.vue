<template>
  <div class="tweet-card">
    <div>
      <form class="form-tweet" action="submit" @submit.prevent="handleSubmit()">
        <textarea @input="characterCheck()" v-model="text" class="input-tweet" placeholder="Write something" name="" id="" cols="30" rows="10"></textarea>
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

export default {
  data() {
    return {
      text: '',
      maxChar: 10,
      isDisabled: false,
      primary: 'primary',
      secondary: "secondary",
      captions: []
    }
  },
  components: {
    Button
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
      this.captions.push(this.text)
      console.log('Tweet', this.text)
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
</style>