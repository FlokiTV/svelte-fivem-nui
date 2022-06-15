## Install

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## How to setup events

### \_\_layout.svelte

```js
setup({
  eventName: (eventData: any) => {
    console.log(eventData);
  },
});
```

### FiveM client

#### client.js

```js
SendNUIMessage({
  eventName: eventData,
});
```

## How to emit events

```html
<script lang="ts">
  import { emit } from "$lib/jsrp-nui";
  let eventData = "Hello world";
  const emitFunc = () => {
    emit("eventName", eventData);
  };
</script>
<button on:click="{emitFunc()}" class="btn btn-info">Emit event</button>
```

## Core events

Toggle NUI body

```js
SendNUIMessage({
  show: boolean,
});
```

Redirect NUI to a path

```js
SendNUIMessage({
  goto: string, //ex: /home
});
```

## fxmanifest.lua

```lua
fx_version "cerulean"
game "gta5"

author 'FlokiTV'
description "Svelte FiveM NUI"
version '1.0.0'

-- ui_page 'http://localhost:3000/nui' -- use this URL to develop
ui_page 'nui/index.html' -- use this URL in prodution

files {
    "nui/**.js",
    "nui/**.png",
    "nui/**.html",
    "nui/**.json",
    "nui/**.css",
}

client_script 'client.js'
server_script 'server.js'
shared_script 'shared.js'
```
