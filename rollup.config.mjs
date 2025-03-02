import typescript from 'rollup-plugin-typescript2';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import pkg from './package.json' assert { type: 'json' };

const baseConfig = {
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
};

export default [
  // ESM build
  {
    ...baseConfig,
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationMap: true,
            declarationDir: './dist/types'
          }
        },
        clean: true
      })
    ]
  },
  // CommonJS build
  {
    ...baseConfig,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
            outDir: './dist/cjs'
          }
        },
        clean: false
      })
    ]
  }
]; 