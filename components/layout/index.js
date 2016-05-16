class Header extends Component {
  render () {
    return (
      <header>
        <h1>header</h1>
      </header>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <main>
        <h1>main</h1>
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
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default Layout
