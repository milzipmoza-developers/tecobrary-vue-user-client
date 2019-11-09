<template>
  <v-app>
    <ViewTitle title="희망도서신청"/>
    <v-layout column pa-2>
      <v-layout row justify-center align-center pl-2>
        <v-text-field
          label="키워드를 입력하세요"
          v-model="keyword"
          flat
          solo
        ></v-text-field>
        <v-btn dark black fab small @click="this.search">
          <v-icon>search</v-icon>
        </v-btn>
        <!-- <v-btn small black flat icon @click="this.search">
          <v-icon>search</v-icon>
        </v-btn> -->
      </v-layout>
    </v-layout>
    <div>
      <v-alert
        :value="errorDialog"
        type="error"
      >
        검색어는 두 글자 이상 입력해주세요.
      </v-alert>
    </div>
    <v-layout column fill-height>
      <v-list two-line>
        <template v-for="(item, i) in items">
          <div class="info-container pa-2"
            :key="i"
            @click="selectItem(item)"
            >
            <v-layout row>
              <v-flex xs9>
                <v-layout column justify-center fill-height pa-1>
                  <div class="info-title">{{ item.title }}</div>
                </v-layout>
              </v-flex>
              <v-layout xs3 column>
                <v-flex xs6>
                  <v-layout column align-center justify-center fill-height pa-1>
                    <div class="info-author">{{ textContentParser(item.author) }}</div>
                  </v-layout>
                </v-flex>
                <v-flex xs6>
                  <v-layout column align-center justify-center fill-height pa-1>
                    <div class="info-publisher">{{ textContentParser(item.publisher) }}</div>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-layout>
          </div>
        </template>
      </v-list>
    </v-layout>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card flat>
          <v-card-title>
            <div>
              <span class="dialog-title">{{ selectedItem && selectedItem.title }}</span><br>
              <span class="dialog-author">{{ selectedItem && selectedItem.author }}</span><br>
              <span class="dialog-publisher">{{ selectedItem && selectedItem.publisher }}</span><br>
              <span class="dialog-isbn">{{ selectedItem && selectedItem.isbn }}</span><br>
              <v-divider></v-divider>
              <span class="dialog-description">{{ selectedItem && selectedItem.description }}</span><br>
            </div>
          </v-card-title>
        </v-card>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            뒤로가기
          </v-btn>

          <v-btn
            color="blue darken-1"
            flat="flat"
            @click="this.requestButtonHandler"
          >
            신청하기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar.snackbar"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.error }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        닫기
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import NaverApiService from '@/services/node/NaverApiService'
import RequestService from '@/services/node/RequestService'

import ViewTitle from '@/components/ViewTitle'

const _snackBarTimeout = 2000

export default {
  data: () => ({
    keyword: '',
    items: [],
    selectedItem: null,
    error: null,
    errorDialog: false,
    dialog: false,
    snackbar: {
      snackbar: false,
      color: 'error',
      timeout: _snackBarTimeout,
      error: '',
    }
  }),

  components: {
    ViewTitle
  },

  methods: {
    async search() {
      this.items = []
      if (this.keyword.length < 2) {
        this.errorDialog = true
        return
      }
      const response = await NaverApiService.search({ title: this.keyword })
      this.items = response.data.items
      this.errorDialog = false
    },

    textContentParser(text) {
      if (text.length > 7) {
        return text.substring(0, 7) + "..."
      }
      return text
    },

    selectItem(item) {
      this.dialog = true
      this.selectedItem = item
    },

    requestButtonHandler: async function() {
      this.dialog = false
      try {
        const response = await RequestService.request({
          book: this.selectedItem,
          user_id: this.$store.state.user.id
        })
        this.$router.push({ name: 'main', params: { message: response.data.message }})
      } catch (error) {
        this._popSnackbar(error.response.data.error, 'error')
      }
    },

    _popSnackbar(message, color) {
      this.snackbar.snackbar = true
      this.snackbar.error = message
      this.snackbar.color = color
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-container {
  border-bottom: 1px solid #D8D8D8;
}
.info-title {
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  font-family: 'Nanum Gothic', sans-serif;
  overflow: hidden;
}
.info-author {
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  height: 12px;
  font-family: 'Nanum Gothic', sans-serif;
  overflow: hidden;
}
.info-publisher {
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  height: 12px;
  font-family: 'Nanum Gothic', sans-serif;
  overflow: hidden;
}

.dialog-title {
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  font-family: 'Nanum Gothic', sans-serif;
}
.dialog-author {
  font-size: 12px;
  line-height: 24px;
  font-family: 'Nanum Gothic', sans-serif;
}
.dialog-publisher {
  font-size: 12px;
  line-height: 24px;
  font-family: 'Nanum Gothic', sans-serif;

}
.dialog-isbn {
  font-size: 12px;
  line-height: 24px;
  font-family: 'Nanum Gothic', sans-serif;
}
.dialog-description {
  font-size: 12px;
  line-height: 18px;
  font-family: 'Nanum Gothic', sans-serif;
}
</style>