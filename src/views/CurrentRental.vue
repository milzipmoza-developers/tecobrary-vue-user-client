<template>
  <v-app>
    <ViewTitle title="대여현황"/>
    <CurrentRentTitle />
    <v-layout column pr-2 pl-2>
      <div style="height: 200px;" v-if="rentList.length === 0">
        <v-layout justify-center align-center fill-height>
          <div>
            대여 목록이 없어요 !
          </div>
        </v-layout>
      </div>
      <div
        v-for="(rent, i) in rentList"
        :key="i"
        style="border-bottom: 0.5px solid black;"
      >
        <v-layout row pb-2 pt-2>
          <v-flex xs1>
            <v-layout fill-height justify-center align-center>
              <div>
                {{ rent.serial }}
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs4>
            <v-layout pl-1 pr-1 fill-height justify-center align-center>
              <div style="text-align: center;">
                {{ _titleParser(rent.bookTitle) }}
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs3>
            <v-layout fill-height justify-center align-center>
              <div>
                {{ _dateParser(rent.rentDate) }}
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout fill-height justify-center align-center>
              <div>
                {{ _calculatePeriod(rent.rentDate) }} 일
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout justify-center align-center>
              <v-btn small dark class="black" fab @click="_returnBtnHandler(rent.serial)">
                반납
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-layout>
    <v-snackbar
      v-model="snackbar.snackbar"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.error }}
      <v-btn
        dark
        flat
        @click="this.$router.go(-1)"
      >
        닫기
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import RentService from '@/services/node/RentService'

import ViewTitle from '@/components/ViewTitle'
import CurrentRentTitle from '@/components/CurrentRentTitle'

const _snackBarTimeout = 2000

const _error = 'error'
const _success = 'success'

export default {
  data: () => ({
    rentList: [],
    snackbar: {
      snackbar: false,
      color: 'error',
      timeout: _snackBarTimeout,
      error: '',
    }
  }),

  components: {
    ViewTitle,
    CurrentRentTitle
  },

  methods: {
    async getRentStatus() {
      const token = this.$store.state.token
      try {
        const response = await RentService.userRentStatus(token, { body: "hi"})
        this.rentList = response.data
      } catch (error) {
        this._popSnackbar(error.response.data.message, _error)
      }
    },

    async _returnBtnHandler(serial) {
      const token = this.$store.state.token
      try {
        const rentInfo = { serial: serial }
        const response = await RentService.returnBook(token, { rentInfo })
        this._popSnackbar(response.data.message, _success)
        this._initializeSnackBar()
        this.getRentStatus()
      } catch (error) {
        this._popSnackbar(error.response.data.error, _error)
        this._initializeSnackBar()
      }
    },

    _calculatePeriod(startDate) {
      const rentDate = new Date(startDate)
      const today = Date.now()
      return Math.round((today - rentDate) / (24 * 60 * 60 * 1000))
    },

    _titleParser(title) {
      return title.substring(0, 25)
    },

    _dateParser(date) {
      return date.substring(0, 10)
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
  },

  beforeMount () {
    this.getRentStatus()
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>