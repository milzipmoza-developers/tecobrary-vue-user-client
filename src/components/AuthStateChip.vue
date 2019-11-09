<template>
    <v-layout pa-2>
        <v-chip color="red" text-color="white" pa-3
                v-if="this.authorization.toLowerCase() === 'none'">
            <v-avatar>
                <v-icon>error</v-icon>
            </v-avatar>
            미인증
        </v-chip>
        <v-chip color="blue" text-color="white" pa-3
                v-if="this.authorization.toLowerCase() === 'user'">
            <v-avatar>
                <v-icon>check_circle</v-icon>
            </v-avatar>
            인증됨
        </v-chip>
        <v-chip color="orange" text-color="white" pa-3
                v-if="this.authorization.toLowerCase() === 'manager'">
            <v-avatar>
                <v-icon>stars</v-icon>
            </v-avatar>
            관리자
        </v-chip>
        <v-chip color="black" text-color="white" pa-3
                v-if="this.authorization.toLowerCase() === 'king'
                || this.authorization.toLowerCase() === 'god'">
            <v-avatar>
                <v-icon>event_seat</v-icon>
            </v-avatar>
            개발
        </v-chip>
    </v-layout>
</template>

<script>
  export default {
    props: {
      authorization: {
        type: String,
        required: true,
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>