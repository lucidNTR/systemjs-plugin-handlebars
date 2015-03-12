hbs
===

Handlebars loading plugin

Basic Use
---

```javascript
import './template.hbs!'
```

Currently Handlebars bundling is only supported in jspm, please post an issue if you would like support outside of jspm.

If not using jspm, set `System.buildHandlebars = false` to disable the builds.

Modular Handlebars Concepts
---

Handlebars in the dependency tree implies a Handlebars modularisation where styles can be scoped directly to the render code that they are bundled with.

Just like JS requires, the order of Handlebars injection can't be guaranteed. The idea here is that whenever there are style overrides, they should be based on using a more specific selector with an extra id or class at the base, and not assuming a Handlebars load order. Reset and global styles are a repeated dependency of all modular styles that build on top of them.

Builder Support
---

When building with [SystemJS Builder](https://github.com/systemjs/builder), by default Handlebars will be inlined into the JS bundle and injected on execution.

To alter this behaviour use the SystemJS configuration options:


* `buildHandlebars`: true / false whether to build Handlebars or leave them as separate file requests with the plugin running in production. Defaults to true.
* `separateHandlebars`: true / false whether to build a Handlebars file at the same output name as the bundle itself to be included with a link tag. Defaults to false.

### Build Example

```javascript
  var builder = require('systemjs-builder');

  // `builder.loadConfig` will load config from a file
  builder.loadConfig('./cfg.js')
  .then(function() {
    // additional config can also be set through `builder.config`
    builder.config({
      baseURL: 'file:' + process.cwd(),
      buildHandlebars: true,
      separateHandlebars: true
    });

    return builder.build('myModule', 'bundle.js');
  });
```

Will generate `bundle.js` containing the JS files and `bundle.hbs` containing the compressed Handlebars for the bundle.
