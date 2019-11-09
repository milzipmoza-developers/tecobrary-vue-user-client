import Api from './Api'

export default {
  total() {
    return Api.user().get('total')
  },

  books(params) {
    return Api.user().post('books', params)
  },

  search(params) {
    return Api.user().post('search', params)
  },

  book(params) {
    return Api.user().post('bookinfo', params)
  }
}