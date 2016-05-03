import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import Flickity from 'flickity'
import 'flickity/dist/flickity.css'

import 'test.styl'

let flkty = new Flickity('.main-carousel', {
	cellAlign: 'left',
	contain: true
})
