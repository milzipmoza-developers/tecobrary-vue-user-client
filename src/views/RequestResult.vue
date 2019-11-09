<template>
  <v-app>
    <ViewTitle title="신청결과"/>
    <v-layout column fill-height justify-center align-center>
      <div>
        {{JSON.stringify(item)}}
      </div>
    </v-layout>
  </v-app>
</template>

<script>
import ViewTitle from '@/components/ViewTitle'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },

  components: {
    ViewTitle
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>