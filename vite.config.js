import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import mkcert from 'vite-plugin-mkcert';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    https: true,
    // port: 443,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/variables.scss' as *;`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      /* options */
      imports: ['vue', '@vueuse/core'],
      eslintrc: {
        enabled: true,
      },
      dts: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dirs: ['src/components'], // default src/components
      extensions: ['vue'], // default vue
      // globs: ['src/components/*.{vue}'], // 不生效
      dts: true,
    }),
    Icons({
      autoInstall: true,
    }),
    mkcert({
      source: 'coding',
    }),
  ],
});
