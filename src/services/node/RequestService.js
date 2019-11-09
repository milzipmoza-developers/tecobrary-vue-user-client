import Api from './Api'

export default {
  request(book) {
    return Api.request().post('', book)
  }
}