import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

const config = defineConfig({
    css: {
        postcss: {
            plugins: [
                tailwind(),
                autoprefixer()
            ]
        }
    },
    plugins: [
        vue(),
        vueDevTools()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    server: {
        port: 8080
    },
})

export default config