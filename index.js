import Dom from './dom'

const dom = new Dom()

const body = document.body

const header = dom.container(body)
  .append('header')
    .append('ul')
      .append('li')
        .append('a')
          .text('this is a header')

const sidebar = dom.container(body)
  .append('aside')
    .append('ul')
      .append('li')
        .append('a')
          .text('this is a sidebar')

const footer = dom.container(body)
  .append('footer')
    .append('ul')
      .append('li')
        .append('a')
          .text('this is a footer')