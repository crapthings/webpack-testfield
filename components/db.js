import Horizon from '@horizon/client'

const horizon = Horizon({
  host: 'localhost:8181'
})

const messages = horizon('messages')

export default {
  messages
}
