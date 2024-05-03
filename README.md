# Terminal Web

A web component to simulate the a Linux Terminal.

To list the commands available you can run `help`

Then you can see commands like:

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

You can play with it in this [playground](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPCEtLSBDb21wb25lbnQg8J+RhyAtLT4NCiAgPHRlcm1pbmFsLXdlYiB1c2VybmFtZT0idG9tIiBob3N0bmFtZT0iYXRlIj4NCiAgICA8ZGl2IHNsb3Q9InRleHQtbGluZSI+V2VsY29tZSB0byBUZXJtaW5hbC1XZWI8L2Rpdj4NCiAgPC90ZXJtaW5hbC13ZWI+DQo8L2Rpdj4=%7CLmNvbnRhaW5lciB7DQogIHdpZHRoOiA0NTBweDsNCiAgaGVpZ2h0OiAxNTBweDsNCn0=%7CaW1wb3J0ICdodHRwczovL3VucGtnLmNvbS90ZXJtaW5hbC13ZWIvZGlzdC90ZXJtaW5hbC13ZWIuY2pzLnByb2R1Y3Rpb24ubWluLmpzJw==)
