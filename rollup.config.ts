import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: './src/markdown-it.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
            entryFileNames: '[name].cjs.js',
            exports: "named"
        },
        plugins: [
            resolve({
                preferBuiltins: true
            }),
            typescript(),
            commonjs(),
        ],
    },
    {
        input: './src/markdown-it.ts',
        output: {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].esm.js',
            exports: "named"
        },
        plugins: [
            resolve({
                preferBuiltins: true
            }),
            typescript(),
            commonjs(),
        ],
    }
];
