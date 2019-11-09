<template>
    <v-app>
        <ViewTitle title="마이페이지"/>
        <div>
            <v-alert
                    :value="this.$store.state.user.name === ''
                    || this.$store.state.user.name === null"
                    type="error"
                    style="margin: 0px auto;"
            >
                닉네임을 설정해주세요.
            </v-alert>
            <v-layout class="profile-contianer"
                      pa-4
                      v-if="$store.state.user !== null"
                      column justify-center align-center>
                <v-layout pa-4>
                    <v-avatar
                            size="150px"
                            color="white"
                    >
                        <img :src="$store.state.user.avatarUrl" alt="avatar">
                    </v-avatar>
                </v-layout>
                <Divider></Divider>
                <v-layout class="profile-desc" pa-2 pt-3 pb-3>
                    <v-layout row>
                        <v-layout xs8 justify-center align-center>
                            <div
                                    v-if="!nameEditable"
                            >
                                {{ $store.state.user.name }}
                            </div>
                            <input
                                    v-if="nameEditable"
                                    type="text"
                                    v-model="newName"
                                    autofocus
                                    style="text-align: center; border-bottom: 1px solid black;"
                                    placeholder="변경할 닉네임"
                            />
                        </v-layout>
                        <v-icon
                                color="black"
                                v-if="!nameEditable"
                                v-on:click="editName"
                        >
                            edit
                        </v-icon>
                        <v-icon
                                color="black"
                                v-if="nameEditable"
                                v-on:click="saveNameEdit"
                                style="padding-right: 10px;"
                        >
                            save
                        </v-icon>
                        <v-icon
                                color="black"
                                v-if="nameEditable"
                                v-on:click="cancelNameChange"
                        >
                            close
                        </v-icon>
                    </v-layout>
                </v-layout>
                <div
                        v-if="nameEditable"
                        :class="nameEditErrorAreaColor"
                        style="width: 100%; text-align: center;"
                >
                    {{ nameEditError }}
                </div>
                <Divider></Divider>
                <v-layout class="profile-desc" pa-2 pt-3 pb-3 justify-center align-center>
                    <div>{{ $store.state.user.email }}</div>
                </v-layout>
                <Divider></Divider>
                <v-layout pa-2 pt-3 pb-3>
                    <AuthStateChip :authorization="$store.state.user.authorization"/>
                </v-layout>
                <v-btn dark block color="black" @click="this.logout" round>
                    <div style="padding: 8px;">로그아웃</div>
                </v-btn>
            </v-layout>
            <v-layout row justify-center>
                <v-dialog
                        v-model="nameEditDialog"
                        max-width="290"
                >
                    <v-card>
                        <v-card-title drak class="black">
                            <div style="color: white; font-size: 24px;">알림</div>
                        </v-card-title>

                        <v-card-text>
                            닉네임을 변경하시겠습니까?
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                    color="error"
                                    flat="flat"
                                    @click="_closeNameEditDialog()"
                            >
                                취소
                            </v-btn>

                            <v-btn
                                    color="primary"
                                    flat="flat"
                                    v-on:click="patchNewName(); nameEditDialog = false"
                            >
                                확인
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
            </v-layout>
        </div>
    </v-app>
</template>

<script>
  import ViewTitle from '../components/ViewTitle'
  import AuthStateChip from '../components/AuthStateChip'
  import Divider from '../components/style/Divider'

  import UserService from '../services/node/UserService'

  const _nickNamePattern = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi;

  const _invalidLengthMsg = '닉네임의 길이는 최소 1자 최대 30자 입니다.'
  const _notNewNameMsg = '기존의 닉네임과 같습니다.'
  const _invalidPatternMsg = '닉네임은 띄어쓰기와 특수문자를 포함할 수 없습니다.'

  const _error = 'red'
  const _warning = 'yellow'
  const _none = 'white'

  export default {
    data: () => ({
      nameEditable: false,
      nameEditDialog: false,
      newName: '',
      nameEditErrorAreaColor: 'white',
      nameEditError: null,
      error: null,
      snackbar: {
        snackbar: false,
        color: '',
        timeout: 1500,
        error: ''
      }
    }),

    components: {
      ViewTitle,
      AuthStateChip,
      Divider
    },

    methods: {
      logout: function () {
        this.$store.dispatch('removeUser')
        this.$cookie.delete('token')
        this.$cookie.delete('user')
        this.$router.push('/')
      },

      saveNameEdit() {
        if (!this._validNewNameLength() ||
          !this._isNewName() ||
          !this._validPattern()) {
          return
        }
        this._initNameEditError()
        this._nameEditableChanger()
        this.nameEditDialog = true
      },

      _validNewNameLength() {
        if (this.newName.length <= 0 || this.newName.length > 30) {
          this._nameEditError(_error, _invalidLengthMsg)
          return false
        }
        return true
      },

      _isNewName() {
        const userState = this.$store.state.user
        if (this.newName === userState.name) {
          this._nameEditError(_warning, _notNewNameMsg)
          return false
        }
        return true
      },

      _validPattern() {
        if (_nickNamePattern.test(this.newName)) {
          this._nameEditError(_error, _invalidPatternMsg)
          return false
        }
        return true
      },

      _initNameEditError() {
        this._nameEditError(_none, null)
      },

      _nameEditError(color, message) {
        this.nameEditErrorAreaColor = color
        this.nameEditError = message
      },

      _nameEditableChanger() {
        if (this.nameEditable) {
          this.nameEditable = false
        } else {
          this.nameEditable = true
        }
      },

      cancelNameChange() {
        this._nameEditableChanger()
      },

      editName() {
        this._nameEditableChanger()
      },

      async patchNewName() {
        try {
          const response = await UserService.editName({
            user: this.$store.state.user,
            newName: this.newName
          })
          await this.$store.dispatch('editUserName', response.data.newName)
          this._closeNameEditDialog()
          this._popSnackbar('변경 성공', 'success')
        } catch (error) {
          this._popSnackbar(error, 'error')
        }
      },

      _closeNameEditDialog() {
        this.newName = ''
        this.nameEditDialog = false
      },

      _popSnackbar(message, color) {
        this.snackbar.snackbar = true
        this.snackbar.error = message
        this.snackbar.color = color
        this._initializeSnackBar()
      },

      _initializeSnackBar() {
        setTimeout(() => {
          this.snackbar.error = ''
          this.snackbar.color = ''
        }, 2000)
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile-desc {
        font-size: 20px;
        width: 100%;
    }
</style>