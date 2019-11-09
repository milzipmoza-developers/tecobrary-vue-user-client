import Api from '@/services/node/Api'

export default {
  login() {
    return Api.github().get('oauthuser')
  },
  
  user(params) {
    return Api.github().post('user', params)
  },

  tokenAuth(header) {
    return Api.githubAuth(header).post('tokenauthenticate')
  }
}