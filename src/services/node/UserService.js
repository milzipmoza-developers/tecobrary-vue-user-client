import Api from './Api'

export default {
  editName(param) {
    return Api.user().patch('editname', param)
  }
}