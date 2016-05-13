import { h, Component } from 'preact'

import { Link } from 'preact-router'

class Header extends Component {
  render () {
    return <ul>

      <li>
        <Link href="/">home</Link>
      </li>

      <li>
        <Link href="/about">about</Link>
      </li>

    </ul>
  }
}

export default {
  Header
}
