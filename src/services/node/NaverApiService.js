import Api from './Api'

export default {
  search(params) {
    return Api.naverApi().post('search', params)
  }
}