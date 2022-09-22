<template>
  <div class="container-like" v-on:click="$emit('updateLikes')">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

      <defs>
      </defs>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path d="M 45 84.334 L 6.802 46.136 C 2.416 41.75 0 35.918 0 29.716 c 0 -6.203 2.416 -12.034 6.802 -16.42 c 4.386 -4.386 10.217 -6.802 16.42 -6.802 c 6.203 0 12.034 2.416 16.42 6.802 L 45 18.654 l 5.358 -5.358 c 4.386 -4.386 10.218 -6.802 16.42 -6.802 c 6.203 0 12.034 2.416 16.42 6.802 l 0 0 l 0 0 C 87.585 17.682 90 23.513 90 29.716 c 0 6.203 -2.415 12.034 -6.802 16.42 L 45 84.334 z M 23.222 10.494 c -5.134 0 -9.961 2 -13.592 5.63 S 4 24.582 4 29.716 s 2 9.961 5.63 13.592 L 45 78.678 l 35.37 -35.37 C 84.001 39.677 86 34.85 86 29.716 s -1.999 -9.961 -5.63 -13.592 l 0 0 c -3.631 -3.63 -8.457 -5.63 -13.592 -5.63 c -5.134 0 -9.961 2 -13.592 5.63 L 45 24.311 l -8.187 -8.187 C 33.183 12.494 28.356 10.494 23.222 10.494 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
    </svg>
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      style="margin-top: 2px"
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
      />
    </svg> -->
    <p> {{ this.likes }}</p>
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      required: true
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .container-like {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  svg {
    width: 25px;
  }

  p {
    margin-left: 5px;
    margin-top: 15px;
  }
</style>