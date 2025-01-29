'use strict'

function html5(tag = 'doctype', attributes = {}, ...children) {
	tag = tag.toLowerCase()

	if (tag === 'doctype') {
		return '<!DOCTYPE html>'
	}

	const attributesMap = new Map(Object.entries(attributes))
	attributes = ''
	attributesMap.forEach(function(value, name) {
		name = name.toLowerCase()

		switch (name) {
			case 'class':
				if (typeof value === 'object') {
					value = value.join(' ')
				}
				break
			case 'style':
				if (typeof value === 'object') {
					const stylesMap = new Map(Object.entries(value))
					value = ''
					stylesMap.forEach(function(cssValue, cssProperty) {
						cssProperty = cssProperty.toLowerCase()

						value += `${cssProperty}:${cssValue};`
					})
				}
				break
			default:
				break
		}

		if (typeof value !== 'boolean') {
			attributes += ` ${name}="${value}"`
			return
		}

		attributes += value ? ` ${name}` : ''
	})

	if (!children.length) {
		return `<${tag}${attributes}>`
	}

	children = children.join('')

	return `<${tag}${attributes}>${children}</${tag}>`
}

export default html5
