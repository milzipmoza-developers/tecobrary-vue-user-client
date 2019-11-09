<template>
  <v-layout column>
    <v-toolbar flat dense class="black" dark>
      <v-toolbar-title>우아한 도서목록</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab dark small color="black" v-on:click="grid = !grid">
        <v-icon dark v-if="grid">list</v-icon>
        <v-icon dark v-if="!grid">grid_on</v-icon>
      </v-btn>
    </v-toolbar>
    <v-flex xs12 v-if="grid">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex
            v-for="(book, i) in books"
            :key="i"
            xs4
            @click="() => moveToSelected(book)"
          >
            <v-card class="image-container" flat tile ml-2 mr-2>
              <v-img
                :src="book.image"
                aspect-ratio="0.7"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 pa-2 v-if="!grid">
      <div
        v-for="(book, i) in books"
        :key="i"
        @click="() => moveToSelected(book)">
        <v-layout class="list-item" row ma-2 pb-2>
          <v-img xs2
            v-bind:src="book.image"
            aspect-ratio="0.7"/>
          <v-flex xs8>
            <v-layout column align-center justify-center fill-height pa-1>
              <v-flex xs6>
                <div class="book-title">
                  {{ book.title }}
                </div>
              </v-flex>
              <v-flex xs6 pt-2>
                <div class="book-author">
                  {{ book.author }}
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column align-center justify-center fill-height pa-1>
              <div class="book-publisher">
                {{ book.publisher }}
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  data: () =>({
    grid: true,
  }),
  methods: {
    moveToSelected(item) {
      this.$router.push({path: '/book', query : { id: item.id }});
    }
  }
}
</script>


<style>
.book-image-box {
  border-radius: 10px;
}
.book-title {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.book-author {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 12px;
}
.book-publisher {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 10px;
}
.theme--light.v-sheet {
  background-color: #fff;
  border: 1px solid #D8D8D8;
}
.image-container {
  border-radius: 10px;
}
.list-item {
  border-bottom: 1px solid #D8D8D8;
}
.book-title {
  overflow: hidden;
}
</style>
