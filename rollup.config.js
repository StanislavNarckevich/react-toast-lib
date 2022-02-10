import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

const env = process.env.NODE_ENV;

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'build/bundle.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve({
      extensions: ['.jsx', '.js'],
    }),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
      namedExports: {
        react: Object.keys(require('react')),
        'react-is': Object.keys(require('react-is')),
      },
    }),
    babel({
      exclude: './node_modules/**',
      plugins: ['babel-plugin-styled-components'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env || 'development'),
    }),
    filesize(),
    (env === 'production' && uglify()),
  ],
};
