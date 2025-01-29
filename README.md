# HTML5 JS

## Description
Helper for generate HTML5 element.

## Syntax
```javascript
html5(tag = 'doctype', attributes = {}, ...children): string
```

## Parameters
#### tag

The HTML5 tag.

#### attributes

The HTML5 attributes.

#### children

The HTML5 children.

## Return Values
Return the HTML5 element.

## Examples
**Example #1: Basic example**

```javascript
const html =
html5('div', {'class': 'row'},
    html5('div', {'class': ['col-sm-8', 'col-md-6']}, '')
)

console.log(html)
```
```html
<div class="row">
    <div class="col-sm-8 col-md-6"></div>
</div>
```

**Example #2: Doctype declaration**
```javascript
console.log(html5())
```
```html
<!DOCTYPE html>
```

**Example #3: Multiple children**
```javascript
const html =
html5('ul', {},
    html5('li', {}, ''),
    html5('li', {}, '')
)

console.log(html)
```
```html
<ul>
    <li></li>
    <li></li>
</ul>
```

**Example #4: Self-closing tags**
```javascript
const html =
html5('input', {
    'required': true,
    'style': {
        'display': 'block'
    },
    'type': 'text'
})

console.log(html)
```
```html
<input required style="display:block;" type="text">
```
