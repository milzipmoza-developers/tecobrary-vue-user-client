<template>
  <v-app>
    <ViewTitle title="우테코 필독서 / 참고서"/>
    <v-tabs
      v-model="tab"
      color="white"

      fixed-tabs
    >
      <v-tabs-slider color="black"></v-tabs-slider>
      <v-tab
        v-for="(item, id1) in items"
        :key="id1"
      >
        {{ item.label }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, id2) in items"
        :key="id2"
      >
        <v-card flat>
          <v-container
            fluid
            grid-list-lg
          >
            <v-layout row wrap
              v-if="!item.books"
              justify-center align-center
              pa-5
            >
              <div>
                아직 없어요 ㅠ
              </div>
            </v-layout>
            <v-layout row wrap
              v-for="(book, id3) in item.books"
              :key="id3">
              <v-flex xs12>
                <v-card color="#F6F6F6" class="black--text">
                  <v-card-title primary-title>
                    <v-layout column>
                      <v-layout row>
                        <v-flex xs4>
                          <v-img
                            style="border: 1px solid #DDDDDD"
                            aspect-ratio="0.7"
                            max-height="75px;"
                            max-width="100px;"
                            :src="book.image"
                          ></v-img>
                        </v-flex>
                        <v-flex xs8>
                          <v-layout column pa-3 justify-center>
                            <div class="book-info">{{ book.title }}</div>
                            <div class="book-info">{{ book.author }}</div>
                            <div class="book-info">{{ book.publisher }}</div>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                      <v-layout pa-2>
                        <ul>
                          <li
                            class="book-desc"
                            v-for="(desc, id4) in book.desc"
                            :key="id4"
                          >
                            {{ desc.content }}
                          </li>
                        </ul>
                      </v-layout>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-app>
</template>

<script>
import ViewTitle from '@/components/ViewTitle'

import level1Books from '@/hardcodes/Level1Books'
import level2Books from '@/hardcodes/Level2Books'
import level3Books from '@/hardcodes/Level3Books'

export default {
  data:() => ({
    tab: 2,
    items: [
      { label: '레벨 1', books: level1Books },
      { label: '레벨 2', books: level2Books },
      { label: '레벨 3', books: level3Books },
      { label: '레벨 4' },
    ],
  }),

  components: {
    ViewTitle
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-desc {
  font-family: 'Jua', sans-serif;
}

.book-info {
  font-size: 20px;
  border-bottom: 1px solid #DDDDDD;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>