# svelte-use-tippy.js

Use tippy.js in svelte

## Installation

```bash
npm i svelte-use-tippy.js ## yarn add svelte-use-tippy.js
```

## Usage

import default styles:

```js
// main.js
import 'tippy.js/dist/tippy.css';
```

'use' directive:

```svelte
<script>
// App.svelte
import { tippy } from 'svelte-use-tippy.js';
</script>

<button use:tippy={{ content: 'My tooltip!' }}>target</button>
```

or component:

```svelte
<script>
// App.svelte
import Tippy from 'svelte-use-tippy.js';

let targetEl;
</script>

<button bind:this={targetEl}>target for tippy</button>

<Tippy props={{ trigger: 'click' }} target={targetEl}>
  <h1>My tooltip!</h1>
  <div>description</div>
</Tippy>
```

or

```svelte
<button>target for tippy</button>
<Tippy props={{ trigger: 'click' }} target="prev">My tooltip!</Tippy>
```

or

```svelte
<Tippy props={{ trigger: 'click' }} target="next">My tooltip!</Tippy>
<button>target for tippy</button>
```

## Important

The 'typpy.js' uses the 'process.env.NODE_ENV'. Replace it when compiling:

```js
// Example in rollup

const mode = process.env.NODE_ENV;

export default {
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(mode)
    })
    // ...
  ]
};
```

## License

MIT
