// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel' // rollup 的 babel 插件，ES6转ES5
import commonjs from 'rollup-plugin-commonjs' // 将非ES6语法的包转为ES6可用
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: [{
      file: 'dist/index.esm.js',
      format: 'es',
      name: 'react-model-state',
      sourcemap: true,
    }, {
      file: 'dist/index.js',
      format: 'umd',
      name: 'modalCenter',
      sourcemap: true,
    }],
    globals: {
      react: 'React',
      "react-dom": "ReactDOM",
    },
    plugins: [
      typescript(),
      resolve(),
      babel({
        exclude: '**/node_modules/**',
        presets: ['@babel/env', '@babel/preset-react']
      }),
      commonjs({
        // namedExports: {
        //   // This is needed because `react/jsx-runtime` exports `jsx` on the module export.
        //   // Without this mapping the transformed import `import {jsx as _jsx} from 'react/jsx-runtime'` will fail.
        //   'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
        // },
      }),
      uglify()
    ]
  },
];
