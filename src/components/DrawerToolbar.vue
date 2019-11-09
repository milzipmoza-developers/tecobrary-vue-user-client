<template>
    <v-toolbar flat class="transparent pt-3 pb-3">
        <v-list class="pa-0">
            <v-list-tile avatar
                         v-if="!$store.state.isUserLoggedIn"
                         v-on:click="locateGithubOAuth"
            >
                <v-list-tile-avatar>
                    <img src="../assets/unknown_user.png"/>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>
                        <div>로그인이 필요합니다</div>
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
                    v-if="$store.state.isUserLoggedIn"
                    v-on:click="$router.push('/mypage')"
            >
                <v-list-tile-avatar>
                    <img :src="$store.state.user.avatarUrl"/>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>
                        <div>{{ $store.state.user.name }}</div>
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-toolbar>
</template>

<script>
  export default {
    methods: {
      locateGithubOAuth() {
        window.location = 'http://localhost:9090/github/user/oauth'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>