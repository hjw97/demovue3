import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import {resolve} from 'path';
function pathResolve (dir) {
  return resolve(__dirname, ".", dir);
}
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(),VantResolver()],

    }),
  ],
  
  resolve: {
    alias: [//配置别名
      {find: '@', replacement: pathResolve('src')}
    ],
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json']  
  }

})
