<template>
  <button class='button' v-on:click='buttonClick' >
    <img class='image' :src='require("../assets/github-logo.png")' />
    {{ 'Github 로그인' }}
  </button>
</template>

<script>
import GithubService from '../services/node/GithubService'

export default {
  methods: {
    async buttonClick() {
      try {
        const response = await GithubService.login()
        window.location.href = response.data
      } catch (error) {
        alert(error)
      }
    }
  },
}
</script>

<style scoped>
  .button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    background: #000000;
    color: white;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button:hover {
    cursor: pointer;
  }
  .image {
    width: 25px;
    margin-right: 10px;
    height: auto;
  }
</style>