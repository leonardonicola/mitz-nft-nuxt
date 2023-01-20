import { defineConfig } from "vitest/config";
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[Vue()],
    root: '.',
    build:{
        outDir:'./dist'
    },
    test:{
        globals: true,
        environment: "jsdom"
    }
})