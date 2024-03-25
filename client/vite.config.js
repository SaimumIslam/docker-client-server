/* eslint-disable no-undef */
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [react()],
    server: {
      host: process.env.VITE_HOST,
      port: process.env.VITE_PORT,
      strictPort: true,
    },
    build: {
      outDir: "dist",
      sourcemap: "hidden",
    },
    resolve: {
      alias: {
        assets: "/src/assets",
        services: "/src/services",
        utils: "/src/utils",
        helpers: "/src/helpers",
      },
    },
  });
};
