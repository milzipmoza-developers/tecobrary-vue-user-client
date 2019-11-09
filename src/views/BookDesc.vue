<template>
  <v-app>
    <TitleToolBar title="상세 정보"/>
    <div>
      <v-layout column>
        <v-layout column>
          <v-toolbar flat dense dark height="30px" class="black">
            <v-toolbar-title>책 정보</v-toolbar-title>
          </v-toolbar>
          <BookDescInfo v-bind:bookinfo="bookinfo"/>
        </v-layout>
        <v-layout column v-if="this.$store.state.isUserLoggedIn">
          <v-toolbar flat dense dark height="30px" class="black">
            <v-toolbar-title>대여 현황</v-toolbar-title>
          </v-toolbar>
          <v-layout xs12 pa-2 style="border-bottom: 1px solid black;">
            <v-flex xs4>
              <v-layout column fill-height justify-center align-center>
                <div>일련번호</div>
              </v-layout>
            </v-flex>
            <v-flex xs8>
              <v-layout column fill-height justify-center align-center>
                <div>도서 상태</div>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row xs12 pa-2 v-for="(serial, i) in serialInfo"
            :key="i">
            <v-flex xs4>
              <v-layout column fill-height justify-center align-center>
                <div>{{ serial.id }}</div>
              </v-layout>
            </v-flex>
            <v-flex xs8>
              <v-layout column fill-height justify-center align-center>
                <div v-if="_statusParser(serial.status) === '대출중'" style="color: red;">대출중</div>
                <div v-if="_statusParser(serial.status) === '비치중'" style="color: green;">비치중</div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import BookService from '@/services/node/BookService'
import SerialService from '@/services/node/SerialService'

import TitleToolBar from '@/components/TitleToolBar'
import BookDescInfo from '@/components/BookDescInfo'

export default {
  props: {
    id: {
      type: Number
    }
  },

  data: () => ({
    bookinfo: {
      title: '',
      author: '',
      publisher: '',
      isbn: ''
    },
    serialInfo: [],
    errorMessage: ''
  }),

  components: {
    TitleToolBar,
    BookDescInfo,
  },

  methods: {
    titleParser(title) {
      if (title.length >= 13) {
        return `${title.substring(0, 13)} ...`
      }
      return title
    },

    async showBookSerials(bookId) {
      try {
        const response = await SerialService.showBookSerials({ bookId })
        this.serialInfo = response.data.bookSerials
      } catch (error) {
        this.errorMessage = error
      }
    },

    _statusParser(status) {
      if (status) {
        return '대출중'
      } else {
        return '비치중'
      }
    }
  },
  

  async beforeMount() {
    this.bookinfo = (await BookService.book({ id: this.id })).data
    if (this.$store.state.isUserLoggedIn) {
      this.showBookSerials(this.id)
    }
  },
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>