import ts from '@wessberg/rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.exports.import,
      format: 'esm',
    },
    {
      file: pkg.exports.require,
      format: 'cjs',
      externalLiveBindings: false,
    },
  ],
  plugins: [ts({ transpiler: 'babel' }), terser()],
  external: ['react'],
};
