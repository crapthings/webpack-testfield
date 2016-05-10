import angular from 'angular'

import uiRouter from 'angular-ui-router'

angular.module('app', [
	uiRouter
])

.config(($stateProvider, $locationProvider) => {

	$stateProvider
		.state('home', {
			url: '/',
			// views: {
			// 	viewa: {
			// 		template: template,
			// 		controller,
			// 		controllerAs: 'vm'
			// 	},
			// }

			template,
			controller,
			controllerAs: 'vm'
		})

	$locationProvider.html5Mode(true).hashPrefix('!')

})

function template() {
	return `
		<div>
			<button ng-click="vm.wow()">hello</button>
		</div>
	`
}

class controller {
	constructor($state) {
		this.wow = function() {
			// console.log($state.current.views.viewa.template = '<a>go</a>')
			// console.log($state.current.views.viewa.template)

			// console.log($state.current.views.viewa.template = '<a>go</a>')
			console.log($state.current.template = `<p>111222</p>`)
			$state.reload()
		}
	}
}

controller.$inject = ['$state']