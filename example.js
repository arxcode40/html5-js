'use strict'
import html5 from './html5.esm.min.js'

const list = ['List 1', 'List 2', 'List 3']

console.log('')
const html = 
html5() + html5('html', {'lang': 'en'},
	html5('head', {},
		html5('meta', {'charset': 'UTF-8'}),
    	html5('meta', {
      		'content': 'initial-scale=1.0, width=device-width',
      		'name': 'viewport',
      	}),
      	html5('title', {}, 'HTML5 Example')
	),
	html5('body', {},
		html5('h1', {}, 'Hello World!'),
		html5('p', {}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
		html5('img', {
			'alt': 'Picsum Photos',
			'src': 'https://picsum.photos/seed/picsum/300/200',
			'style': {
				'display': 'block',
			},
		}),
		html5('ul', {'class': ['list-group', 'list-group-flush']},
		    ...list.map(function(item) {
		    	return html5('li', {'class': 'list-group-item'}, item)
		    }, list)
		),
	),
)
console.log(html)
