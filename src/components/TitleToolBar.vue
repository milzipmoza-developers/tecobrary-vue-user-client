<template>
  <v-toolbar class="toolbar" fixed flat color="white">
    <v-toolbar-side-icon>
      <v-icon @click="$router.go(-1)">keyboard_arrow_left</v-icon>
    </v-toolbar-side-icon>
    <v-flex xs12>
      <v-layout column>
        <v-layout column align-center justify-center fill-height>
          <v-layout row align-center>
            <div class="title-text">
              {{ title }}
            </div>
          </v-layout>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn small flat icon disabled> <!-- 레이아웃 배치용,, 기능 없는 버튼 -->
      <v-icon></v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-text {
  font-size: 24px;
}
</style>