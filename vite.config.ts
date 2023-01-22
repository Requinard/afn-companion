import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import Icons from "unplugin-icons/vite";

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
        Icons({
            compiler: "jsx",
            jsx: "react",
            defaultClass: "iconified",
        }),
    ],
});
