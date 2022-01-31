import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import externalGlobals from 'rollup-plugin-external-globals';
// import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.jsx';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
};

const PLUGINS = [
  postcss({
    extract: true,
    plugins: [
      autoprefixer,
    ],
  }),
  babel({
    // babelHelpers: 'runtime',
    babelHelpers: 'inline',
    exclude: 'node_modules/**',
  }),
  resolve({
    browser: true,
    resolveOnly: [
      /^(?!react$)/,
      /^(?!react-dom$)/,
      /^(?!styled-components)/,
    ],
  }),

  // externalGlobals({                      // partially solves the problem
  //   "react": "window.React",
  //   "react-dom": "window.ReactDOM",
  //   "styled-components": "window.styled",
  // }),
  commonjs(),
  filesize(),
];

const EXTERNAL = [
  'react',
  'react-dom',
  'styled-components',
];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: 'build/bundle.js',
    // file: pkg.browser,
    format: 'umd',
  },
  {
    // file: pkg.main,
    file: 'build/bundle.js',
    format: 'cjs',
  },
  {
    file: 'build/bundle.js',
    // file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS,
}));

export default config;