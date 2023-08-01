import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: "remoteEntry.js",
      // 导出
      exposes: {
        './MyForm': './src/components/MyForm.vue'
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
  },
})
