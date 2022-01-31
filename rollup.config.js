import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import {uglify} from "rollup-plugin-uglify";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const env = process.env.NODE_ENV;

export default {
  input: 'src/index.jsx',
  external: [
    'react',
    'react-dom',
    'styled-components'
  ],
  output: [
    {
      globals: {
        'react': 'React',
        'react-dom':'ReactDOM',
        'styled-components': 'styled',
      },
      file: 'build/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      globals: {
        'react': 'React',
        'react-dom':'ReactDOM',
        'styled-components': 'styled',
      },
      file: 'build/bundle.iife.js',
      format: 'iife',
      sourcemap: true,
    },

  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.jsx', '.js']
    }),
    commonjs(),
    babel({
      exclude: './node_modules/**',
      plugins: ['babel-plugin-styled-components'],
    }),
    replace({
      'process.env.NODE_ENV' : JSON.stringify(env || 'development')
    }),
    (env === "production" && uglify()),
  ],
}

