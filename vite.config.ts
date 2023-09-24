import { defineConfig } from 'vite'
// 使用 esbuild 和 Babel，使用一個微小體積的包腳注可以實現極速的 HMR，同時提升靈活性，能夠使用 Babel 的轉換管線。在構建時沒有使用額外的 Babel 插件，只使用了 esbuild。(熱加載)
import react from '@vitejs/plugin-react'
// 為打包後的文件提供傳統瀏覽器兼容性支持。
import legacy from '@vitejs/plugin-legacy'
import { fileURLToPath } from 'url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  server: {},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
