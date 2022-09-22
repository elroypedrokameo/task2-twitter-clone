<template>
  <div class="tweet-card">
    <div>
      <form
        class="form-tweet"
        action="submit"
        ref="form"
        v-on:submit.prevent="$emit('addFeeds')"
      >
        <textarea
          :value="text"
          ref="input"
          @input="$emit('update:modelValue', $event.target.value)"
          class="input-tweet"
          placeholder="Write something"
          name=""
          id=""
          cols="30"
          rows="10"
        >
        </textarea>
        <div class="character-button">
          <p class="character">{{ text.length }}/{{ maxCharacter }}</p>
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
      primary: 'primary',
      secondary: 'secondary',
    }
  },
  props: {
    input: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: 0
    },
    maxCharacter: {
      type: Number,
      default: 20
    }
  },
  computed: {
    isDisabled() {
      return this.text.length > this.maxCharacter
    }
  },
  components: {
    Button
  },

  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    countChar() {
      return this.text.length
    },
  }
}
</script>

<style scoped>
  .tweet-card {
    /* border: solid 1px black; */
    background-color: #BFACE0;
    border-radius: 10px;;
    width: 52.4rem;
    height: 9rem;
    margin-top: 20px;
    padding: 15px 0 0 0;
  }

  .primary {
    background-color: #645CAA;
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