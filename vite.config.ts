import MillionLint from "@million/lint";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const _plugins = [react()];
_plugins.unshift(MillionLint.vite() as Plugin[]);
export default defineConfig({
  plugins: _plugins,
});