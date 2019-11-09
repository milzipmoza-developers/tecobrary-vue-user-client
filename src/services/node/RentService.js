import Api from './Api'

export default {
  rentBook (header, param) {
    return Api.rent(header).post('rent', param)
  },

  returnBook (header, param) {
    return Api.rent(header).post('return', param)
  },

  userRentStatus (header, param) {
    return Api.rent(header).post('user', param)
  }
}