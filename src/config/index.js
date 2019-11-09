require('dotenv').config()

module.exports = {
  nodeUrl: process.env.VUE_APP_NODE_URL,
  springUrl: process.env.VUE_APP_SPRING_URL
}