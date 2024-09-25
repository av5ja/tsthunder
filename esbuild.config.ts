import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import TsconfigPathsPlugin from '@esbuild-plugins/tsconfig-paths'
import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'browser',
  target: ['es2020'],
  sourcemap: true,
  format: 'esm',
  tsconfig: './tsconfig.json',
  plugins: [TsconfigPathsPlugin({ tsconfig: 'tsconfig.json' }), NodeModulesPolyfillPlugin()],
  define: {
    'process.env.NODE_ENV': '"production"',
    global: 'window'
  }
})
