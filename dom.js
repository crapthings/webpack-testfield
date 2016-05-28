export default class Dom {

	constructor() {
		const dom = this
	}

	container(container) {
		this.$container = container
		return this
	}

	append(element) {
		this.$element = document.createElement(element)
		this.$container.appendChild(this.$element)
		this.$container = this.$element
		return this
	}

	text(text) {
		this.$element.innerText = text
		return this
	}

}