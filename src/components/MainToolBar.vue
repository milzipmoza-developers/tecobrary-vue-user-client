<template>
  <div>
    <v-toolbar class="toolbar" app flat color="white">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-flex xs12>
        <v-layout column>
          <v-layout column align-center justify-center fill-height>
            <v-layout row align-center>
              <div @onclick="this.$router.push('/')">
                <img height="30" src="../assets/dark_only_icon.png"/>
              </div>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
      <v-btn
        small flat icon color="black"
        to="/search"
        v-if="$router.currentRoute.path === '/'">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn small flat icon disabled
        v-if="$router.currentRoute.path !== '/'"> <!-- 레이아웃 배치용,, 기능 없는 버튼 -->
        <v-icon></v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <DrawerToolbar />
      <v-divider></v-divider>
      <DrawerItems />
    </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerToolbar from '@/components/DrawerToolbar'
import DrawerItems from '@/components/DrawerItems'

export default {
  data: () => ({
    drawer: false,
    error: null
  }),

  components: {
    DrawerToolbar,
    DrawerItems,
  }
}
</script>


<style>
.toolbar-title {
  align-content: center;
  justify-content: center;
  font-size: 24px;
}
.v-input {
  height: 36px;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 36px;
}
.v-input__control {
  height: 36px;
}
.v-input__slot {
  height: 36px;
  margin: 0px;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  border: 1px solid gray;
  border-radius: 10px;
}

.to_login {
  color: black;
}
</style>
