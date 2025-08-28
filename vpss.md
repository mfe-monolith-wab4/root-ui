# Incoming Configuration

```js
{
  server: { port: 5170 },
  base: '/',
  plugins: [
    [
      {
        name: 'vite:react-babel',
        enforce: 'pre',
        config: [Function: config] { [length]: 0, [name]: 'config' },
        configResolved: [Function: configResolved] {
          [length]: 1,
          [name]: 'configResolved'
        },
        options: [Function: options] { [length]: 1, [name]: 'options' },
        transform: { filter: [Object], handler: [AsyncFunction] }
      },
      {
        name: 'vite:react-refresh',
        enforce: 'pre',
        config: [Function: config] { [length]: 1, [name]: 'config' },
        resolveId: { filter: [Object], handler: [Function] },
        load: { filter: [Object], handler: [Function] },
        transformIndexHtml: [Function: transformIndexHtml] {
          [length]: 2,
          [name]: 'transformIndexHtml'
        }
      },
      [length]: 2
    ],
    {
      name: 'vite-plugin-single-spa',
      config: [AsyncFunction: config] {
        [length]: 2,
        [name]: 'config',
        [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
      },
      resolveId: {
        order: 'pre',
        handler: [Function: handler] { [length]: 3, [name]: 'handler' }
      },
      load: [AsyncFunction: load] {
        [length]: 2,
        [name]: 'load',
        [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
      },
      renderChunk: {
        order: 'post',
        handler: [AsyncFunction: handler] {
          [length]: 4,
          [name]: 'handler',
          [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
        }
      },
      generateBundle: [AsyncFunction: generateBundle] {
        [length]: 3,
        [name]: 'generateBundle',
        [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
      },
      transformIndexHtml: {
        order: 'post',
        handler: [Function: handler] { [length]: 1, [name]: 'handler' }
      }
    },
    [length]: 2
  ],
  build: {
    target: 'chrome89',
    modulePreload: false,
    rollupOptions: { onwarn: [Function: onwarn] { [length]: 2, [name]: 'onwarn' } }
  },
  optimizeDeps: {
    force: undefined,
    esbuildOptions: { jsx: 'automatic' },
    include: [
      'react',
      'react-dom',
      'react/jsx-dev-runtime',
      'react/jsx-runtime',
      [length]: 4
    ]
  },
  esbuild: { jsx: 'automatic', jsxImportSource: undefined },
  resolve: { dedupe: [ 'react', 'react-dom', [length]: 2 ] }
}

```


