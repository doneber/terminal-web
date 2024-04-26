# Terminal Web

A web component to simulate the a Linux Terminal.

Run some common commands like:

- `help`
- `echo`
- `catsay`
- `history`
- `whoami`
- `pwd`


## Installation

```bash
npm i terminal-web
```

## Usage

### Via module

```js
import "terminal-web"

```

### Via CDN

```html
<script type="module" src="https://unpkg.com/terminal-web"></script>
```

### Using the component

Then you can do this:

```html
<terminal-web></terminal-web>
```

To custom it, you can wrap it with a container, add user and host name.

```html
<div style="width: 300px; height: 150px;">
  <terminal-web username="tom" hostname="ate"></terminal-web>
</div>
```

