<template>
<v-app>
  <TitleToolBar title="반납하기"/>
  <v-layout column>
    님의 전체 대여 목록
  </v-layout>
</v-app>
</template>

<script>
import TitleToolBar from '@/components/TitleToolBar'

export default {
  data: () => ({
    dialog: false,
    error: null,
  }),

  components: {
    TitleToolBar
  },

  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>