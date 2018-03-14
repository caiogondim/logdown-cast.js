<img src="http://rawgit.com/caiogondim/logdown-cast.js/master/logo/banner.svg" />

# logdown-cast

<div>
  <a href="https://www.npmjs.com/package/logdown-cast"><img src="https://img.shields.io/npm/v/logdown-cast.svg" /></a>
</div>

<br>

Subscribe to a remote logdown instance in the same machine. Works between
different Node processes and browser tabs.

## Installation

```bash
npm install logdown-cast --save
```

## Usage

```js
// Publish
const logdown = require('logdown')
const cast = require('logdown-cast')

const debug = logdown('foo')
cast.publish(debug)

// Will be published
setInterval(() => debug.log('Hi', Date.now()), 1000)
```

Then in another process, browser, ...

```js
// Subscribe
const logdown = require('logdown')
const cast = require('logdown-cast')

// Create a logdown object with the prefix you want to subscribe
cast.subscribe(logdown('foo'))
```

The subscribed instance is a regular logdown instance, which means that you will
need to [enable logging for it](https://github.com/caiogondim/logdown.js#enablingdisabling-instances).

## Preview

<img src="./preview.mov" />

## Reference and credits
- Icon created by Jamison Wieser from The Noun Project
- [logdown](https://github.com/caiogondim/logdown.js)
- [localcast](https://github.com/mafintosh/localcast)

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
