<template>
    <v-app>
        <ViewTitle title="로그인"/>
        <v-layout column justify-center align-center>
            <v-dialog
                    v-model="loadingDialog"
                    width="50%"
            >
                <v-card>
                    <v-toolbar flat dense class="black" dark>
                        <v-toolbar-title>열심히 로그인 중 !</v-toolbar-title>
                    </v-toolbar>

                    <v-layout pa-5 justify-center>
                        <v-progress-circular
                                :size="45"
                                :width="3"
                                color="black"
                                indeterminate
                        ></v-progress-circular>
                    </v-layout>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-app>
</template>

<script>
  import GithubOAuthService from "../services/spring/GithubOAuthService";
  import config from '../config'

  import ViewTitle from '../components/ViewTitle'

  export default {
    data: () => ({
      loadingDialog: true
    }),

    components: {
      ViewTitle,
    },

    async beforeCreate() {
      try {
        const response = await GithubOAuthService.login(this.$route.query.code)
        if (response.config.baseURL !== config.springUrl) {
          this._pushMainWithError('비정상적인 접근')
        } else if (response.data) {
          const {user, token} = response.data
          if (user.id) {
            user.userNo = user.id
          }
          if (user.userNo) {
            user.id = user.userNo
          }
          await this.$store.dispatch('setUser', user)
          await this.$store.dispatch('setToken', token)
          this._setCookieTecobraryToken(token)
          this._setCookieLoginInfo(user, token)
          this._pushMainWithMessage(`${this.$store.state.user.name} 님 환영합니다.`)
        } else {
          this._pushMainWithError('응답 없음')
        }
      } catch (error) {
        this._pushMainWithError(`${error.code} 로 인한 로그인 실패`)
      }
    },

    methods: {
      _pushMainWithError(error) {
        this.$router.push({
          name: 'main',
          params: { error }
        })
      },

      _pushMainWithMessage(message) {
        this.$router.push({
          name: 'main',
          params: { message }
        })
      },

      _setCookieTecobraryToken(token) {
        this.$cookie.set('tecobrary_token', token, 7)
      },

      _setCookieLoginInfo(user, token) {
        this.$cookie.set('user', JSON.stringify(user), 7)
        this.$cookie.set('token', token, 7)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>