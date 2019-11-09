import SpringApi from './SpringApi'

const oauth = () => (
  SpringApi.base().get('github/user/oauth')
)

const login = (code) => (
  SpringApi.base().get('api/v1/tecobrary/auth', {
    params: { code: code }
  })
)

export default {
  oauth,
  login
}