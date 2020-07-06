import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/diapositive.js',
      name: 'Diapositive',
      format: 'umd',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/diapositive.d.ts' }],
    plugins: [dts()],
  },
];
