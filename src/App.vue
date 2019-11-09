<template>
  <div id="app">
    <MainToolBar />
    <v-content align-start>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
import MainToolBar from '@/components/MainToolBar'

export default {
  components: {
    MainToolBar,
  }
}
</script>

<style>
#app {
  font-family: 'Do Hyeon', sans-serif;
  background-color: white;
}
.toolbar {
  border-bottom: 2px solid #E7ECF4;
}
</style>