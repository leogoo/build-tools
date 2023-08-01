import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      // 定义远程模块入口
      remotes: {
        'remote-app': 'http://localhost:3001/assets/remoteEntry.js',
      },
      // 共享依赖声明
      shared: ['vue'],
    }),
  ],
})
