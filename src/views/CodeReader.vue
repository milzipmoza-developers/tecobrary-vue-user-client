<template>
  <v-app>
    <TitleToolBar title="대여하기"/>
    <v-layout column>
      <div>
        <v-alert
          :value="true"
          type="error"
          v-if="error !== null"
        >
          {{ error }}
        </v-alert>
      </div>
      <qrcode-stream @decode="onDecode" @init="onInit"/>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-text>
            대출하시겠습니까?
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red"
              flat
              @click="closeHandler()"
            >
              취소
            </v-btn>
            <v-btn
              color="primary"
              flat
              @click="rentBook()"
            >
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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

import TitleToolBar from '@/components/TitleToolBar'

const _snackBarTimeout = 2000

const _error = 'error'
const _success = 'success'

const _INVALID_QRCODE_ERROR = '유효하지 않은 QRCODE'

export default {
  data: () => ({
    dialog: false,
    error: null,
    qrText: '',
    snackbar: {
      snackbar: false,
      color: 'error',
      timeout: _snackBarTimeout,
      error: '',
    }
  }),

  components: {
    TitleToolBar
  },

  methods: {
    onDecode (decodeString) {
      this.dialog = true
      this.qrText = decodeString
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "에러: 카메라 권한을 허가해주세요."
        } else if (error.name === 'NotFoundError') {
          this.error = "에러: 카메라가 없는 디바이스 입니다."
        } else if (error.name === 'NotSupportedError') {
          this.error = "에러: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "에러: 카메라가 이미 사용중인가요?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "에러: 설치된 카메라가 적절하지 않습니다."
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: 이 브라우저는 지원하지 않습니다."
        }
      }
    },

    async rentBook () {
      const token = this.$store.state.token
      try {
        const rentInfo = this._jsonParser(this.qrText)
        const response = await RentService.rentBook(token, { rentInfo })
        this.dialog = false
        this._initializeSnackBar()
        this._initQrText()
        this._popSnackbar(response.data.message, _success)
        this._autoToMain()
      } catch (error) {
        this.dialog = false
        this._initializeSnackBar()
        this._initQrText()
        if (error.response) {
          this._popSnackbar(error.response.data.error, _error)
        } else {
          this._popSnackbar(error.message, _error)
        }
      }
    },

    _jsonParser(qrText) {
      try {
        const parsedQr = JSON.parse(qrText)
        if (!parsedQr.hasOwnProperty('serial')) {
          throw new Error(_INVALID_QRCODE_ERROR + "[1]")
        }
        return parsedQr
      } catch (error) {
        throw new Error(_INVALID_QRCODE_ERROR + "[2]")
      }
    },

    _autoToMain() {
      setTimeout(() => {
        this.$route.go(-1)
      }, _snackBarTimeout)
    },

    closeHandler() {
      this.dialog = false
      this._autoToMain()
    },

    _initializeSnackBar() {
      this.snackbar.error = ''
      this.snackbar.color = ''
    },

    _initQrText() {
      this.qrText = ''
    },

    _popSnackbar(message, color) {
      this.snackbar.snackbar = true
      this.snackbar.error = message
      this.snackbar.color = color
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>