import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'VuePasswordStrengthMeter',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `vue3-password-strength-meter.${format}.js`
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ['vue', 'zxcvbn'],
      output: {
        // ensure consumers can access named exports cleanly
        exports: 'named',
        globals: {
          vue: 'Vue',
          zxcvbn: 'zxcvbn'
        }
      }
    }
  }
})
