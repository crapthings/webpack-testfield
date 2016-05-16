import './test.styl'
import './test.css'

//

const Users = feedUsers()

const $container = document.getElementById('container-users')

const $username = document.getElementById('username')

const $submit = document.getElementById('submit')

//

$submit.addEventListener('click', function (e) {
  e.preventDefault()
  render($container, [{
    username: $username.value
  }])
  $username.value = ''
  $username.focus()
})

render($container, Users)

//

function render (container, data) {
  let $tbody = document.createElement('TBODY')

  for (let user of data) {

    let $tr = document.createElement('TR')
    let $td = document.createElement('TD')
    $td.innerText = user.username
    $tr.appendChild($td)

    let $tdForDel = document.createElement('TD')
    let $delete = document.createElement('BUTTON')
    $delete.innerText = 'delete'

    $delete.addEventListener('click', remove)

    $tr.appendChild($tdForDel)
    $tdForDel.appendChild($delete)

    $tbody.appendChild($tr)

  }

  container.appendChild($tbody)
}

//

function remove () {
  this.removeEventListener('click', remove)
  this.parentNode.parentNode.remove()
}

//

function makeUser (user) {
  return { username: user.username || 'user' }
}

function feedUsers () {
  let users = [];
  for (let i = 1; i <= 10; i++) {
    let user = makeUser({ username: `user${i}` })
    users.push(user)
  }
  return users
}
