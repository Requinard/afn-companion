import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: "eslint ./src",
            },
        }),
        imagetools({}),
    ],
});
