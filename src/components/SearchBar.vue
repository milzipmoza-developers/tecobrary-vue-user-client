<template>
  <v-layout column>
    <v-toolbar class="toolbar" fixed flat color="white">
      <v-toolbar-side-icon>
        <v-icon @click="$router.push('/')">keyboard_arrow_left</v-icon>
      </v-toolbar-side-icon>
      <v-flex xs12>
        <v-layout column>
          <v-layout fixed column>
            <v-text-field
              flat
              rows="1"
              label="검색"
              solo
              closable
              v-model="keyword"
              @input="searchChangeHander()"
            ></v-text-field>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-toolbar>
    <v-layout class="auto-completion" column>
      <v-container>
        <div class="search-item-box"
          v-for="(searchItem, i) in searchItems"
          :key="i"
          @click="() => moveToSelected(searchItem)"
          >
          {{ searchItem.title }}
        </div>
      </v-container>
    </v-layout>
  </v-layout>
</template>

<script>
import BookService from '../services/node/BookService'

export default {
  data: () => ({
    keyword: '',
    searchItems: [],
    error: null
  }),

  methods: {
    async searchChangeHander() {
      if (this.keyword === null || this.keyword.length <= 1) {
        this.searchItems = []
        return
      }
      try {
        const response = await BookService.search({ keyword: this.keyword })
        this.searchItems = response.data
      } catch (err) {
        this.error = err
      }
    },

    moveToSelected(item) {
      this.$router.push({path: '/book', query : { id: item.id }});
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-item-box {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #D8D8D8;
  overflow: hidden;
}

.no-result-box {
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>