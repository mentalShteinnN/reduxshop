import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            components: "/src/components",
            pages: "/src/pages",
            assets: "/src/assets",
            variables: "/src/variables",
            UI: "/src/UI",
            store: "/src/store",
        },
    },
});
