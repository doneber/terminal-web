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
<script type="module" src="https://unpkg.com/terminal-web/dist/terminal-web.cjs.production.min.js"></script>
```

### Using the component

Then you can do this:

```html
<terminal-web></terminal-web>
```

To custom it, you can wrap it with a container, add user and host name.

```html
<div style="width: 450px; height: 150px;">
  <terminal-web username="tom" hostname="ate">
    <div slot="text-line">Good morning!</span></div>
    <div slot="text-line">Welcome to <span style="background-color: teal">Terminal-Web</span></div>
  </terminal-web>
</div>
```

Note: Notice the slot "text-line"

## Try it

You can play wit it in this [playground](https://codi.link/PGRpdiBzdHlsZT0id2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDE1MHB4OyI+DQogIDx0ZXJtaW5hbC13ZWIgdXNlcm5hbWU9InRvbSIgaG9zdG5hbWU9ImF0ZSI+DQogICAgPGRpdiBzbG90PSJ0ZXh0LWxpbmUiPkdvb2QgbW9ybmluZyE8L3NwYW4+PC9kaXY+DQogICAgPGRpdiBzbG90PSJ0ZXh0LWxpbmUiPldlbGNvbWUgdG8gPHNwYW4gc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHRlYWwiPlRlcm1pbmFsLVdlYjwvc3Bhbj48L2Rpdj4NCiAgPC90ZXJtaW5hbC13ZWI+DQo8L2Rpdj4=%7C%7CaW1wb3J0ICdodHRwczovL3VucGtnLmNvbS90ZXJtaW5hbC13ZWIvZGlzdC90ZXJtaW5hbC13ZWIuY2pzLnByb2R1Y3Rpb24ubWluLmpzJzsK)