import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>

        <li>
          <Link to='/about'>about</Link>
        </li>

        <li>
          <Link to='/users'>users</Link>
        </li>

        <li>
          <Link to='/test'>test</Link>
        </li>
      </ul>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <footer>
        <h1>footer</h1>
      </footer>
    )
  }
}

class Layout extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Main children={this.props.children} />
        <Footer/>
      </div>
    )
  }
}

export default Layout
