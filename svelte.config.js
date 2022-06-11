import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import { fileURLToPath } from 'url';
import { mdsvex } from 'mdsvex';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;',
          },
        },
      },
      server: {
        fs: {
          allow: ['..'],
        },
      },
      optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
      },
    },
  },
  preprocess: [
    preprocess({
      typescript: false,
      scss: false,
    }),
    mdsvex({
      extensions: ['.md'],
      layout: {
        updates: path.join(dirname, './src/routes/updates/_layout.svelte'),
      },
    }),
  ],
  experimental: {
    useVitePreprocess: true,
  },
};

export default config;
