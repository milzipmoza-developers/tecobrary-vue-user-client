<template>
  <v-layout row>
    <v-img xs4 pa-2
      contain
      min-width="100"
      max-height="200"
      :src="bookinfo.image"/>
    <v-layout column xs8 ma-2>
      <v-layout row>
        <v-flex xs3>
          제목
        </v-flex>
        <v-flex xs9>
          {{ bookinfo.title }}
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs3>
          저자
        </v-flex>
        <v-flex xs9>
          {{ bookinfo.author }}
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs3>
          출판사
        </v-flex>
        <v-flex xs9>
          {{ bookinfo.publisher }}
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs3>
          ISBN
        </v-flex>
        <v-flex xs9>
          {{ bookinfo.isbn }}
        </v-flex>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  props: {
    bookinfo: {
      type: Object,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>