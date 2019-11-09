import Api from './Api'

export default {
  showBookSerials(param) {
    return Api.serials().post('/book', param)
  }
}