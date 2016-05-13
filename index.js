import Router from 'preact-router'

import { h, render } from 'preact'

import Components from './components'

const Layout = () => (
  <div>
    <Components.Layout.Header />
    <Router>
        <Components.Home path="/" />
        <Components.About path="/about" />
    </Router>
  </div>
)

render(<Layout />, document.getElementById('app'))
