import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from "path";
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
    build: {
      chunkSizeWarningLimit: 20000,
      manifest: 'manifest.json'
    },
    plugins: [
        laravel({
            input: {
                tailwind: 'src/css/tailwind.css',
                css: 'src/css/app.css',
                js: 'src/js/app.js',
            },
            refresh: ['templates/**/*'],
        }),
        mkcert()
    ],
    server: {
        hmr: {
            host: 'localhost'
        },
        https: true
    },
    resolve: {
        alias: {
            '@fonts': path.resolve(__dirname, 'public/fonts'),
        },
    }
});