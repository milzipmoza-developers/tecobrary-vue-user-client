<template>
  <v-app>
    <BookList v-bind:books="books"/>
    <v-layout row justify-center mb-2>
      <v-pagination
        dark
        color="#A4A4A4"
        v-model="page"
        :length="this.length"
        v-if="this.length !== 1"
        circle
      ></v-pagination>
    </v-layout>
    <!-- TODO: 컴포넌트로 분리 -->
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      fixed bottom right fab dark color="black"
      to="/rent"
    >
      <v-img
        max-height="20"
        max-width="20"
        :src="require('@/assets/qr-code.png')"></v-img>
    </v-btn>

    <!-- TODO: 컴포넌트로 분리 -->
    <v-snackbar
      v-model="snackbar.snackbar"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.error }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        닫기
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import BookService from '../services/node/BookService'

import BookList from '../components/BookList'

const _snackBarTimeout = 2000

const _error = 'error'
const _success = 'success'

export default {
  data: () => ({
    books: [],
    page: 1,
    length: 1,
    snackbar: {
      snackbar: false,
      color: 'error',
      timeout: _snackBarTimeout,
      error: '',
    }
  }),

  watch: {
    page: async function(nextPage) {
      this.scrollToTop()
      this.books = (await BookService.books({ page: nextPage })).data
    }
  },

  components: {
    BookList,
  },

  async beforeMount() {
    this.clearLocalStorageToken()
    this.books = (await BookService.books({ page: this.page })).data
    this.length = Math.floor(((await BookService.total()).data.lastId - 1) / 12) + 1
    this.autoLoginProcessing()
    this.messageShower()
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    },

    _initializeSnackBar() {
      setTimeout(() => {
        this.snackbar.error = ''
        this.snackbar.color = ''
      }, _snackBarTimeout + 500)
    },

    _popSnackbar(message, color) {
      this.snackbar.snackbar = true
      this.snackbar.error = message
      this.snackbar.color = color
    },

    messageShower() {
      if (this.$route.params.message) {
        this._popSnackbar(this.$route.params.message, _success)
      }
      if (this.$route.params.error) {
        this._popSnackbar(this.$route.params.error, _error)
      }
    },

    async autoLoginProcessing() {
      const user = JSON.parse(this.$cookie.get('user'))
      const token = this.$cookie.get('token')

      const isUserLoggedIn = this.$store.state.isUserLoggedIn
      if (token && user && !isUserLoggedIn) {
        await this.$store.dispatch('setUser', user)
        await this.$store.dispatch('setToken', user)
      }
    },

    clearLocalStorageToken() {
      if (localStorage.token) {
        delete localStorage.token
      }
    }
  }
}
</script>
