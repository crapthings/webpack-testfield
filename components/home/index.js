import db from '../db'

import { h, Component } from 'preact'

import { Link } from 'preact-router'

export default class Home extends Component {

  constructor () {
    super()
    this.state.messages = []
    db.messages.watch().subscribe(messages => {
      this.setState({ messages })
    })
  }

  handleClick (e) {
    if (e.keyCode == 13) {
      db.messages.store({
        text: e.target.value
      }).subscribe( id => {
        e.target.value = ''
      })
    }
  }

  render () {
    return <div>
      <h1>home</h1>

      <input type="text" onKeyUp={this.handleClick} />

      { this.state.messages.map(m => (
        <p>{m.text}</p>
      )) }

    </div>
  }

}
