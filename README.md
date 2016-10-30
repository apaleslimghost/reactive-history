# reactive-history

history for meteor, letting tracker do most of the work

## installation

```sh
meteor add quarterto:reactive-history
```

## usage

import reactive history and use the reactive var `history` in a reactive context:

```js
import {history} from 'meteor/quarterto:reactive-history';
import {Tracker} from 'meteor/tracker';

Tracker.autorun(() => {
	console.log(history.get());
});
```

when the application loads or something changes the url, the reactive var will update.

### `navigate`

call `navigate` to update the reactive url and cause a `pushState`, updating the browser's url:

```js
import {history, navigate} from 'meteor/quarterto:reactive-history';
import {Tracker} from 'meteor/tracker';

Tracker.autorun(() => {
	console.log(history.url);
});

setTimeout(() => {
	navigate('/foo');
}, 2000);

// after 2 seconds, '/foo' is logged
```

### `link`

`link` is a wrapper for `navigate` for use as an event handler for an `<a>` tag. it cancels the default navigation and calls `navigate` with the link's `href`.

with blaze:

```html
<template name="header">
	<header>
		<a href="/">Home</a>
	</header>
</template>
```

```js
import {link} from 'meteor/quarterto:reactive-history';
import {Template} from 'meteor/templating';

Template.header.events({
	'click a': link
});
```

with react:

```js
import {link} from 'meteor/quarterto:reactive-history';
import React from 'react';

const Header = () => <header>
	<a href="/" onclick={link}>Home</a>
</header>;
```

## licence

ISC. &copy; matt brennan
