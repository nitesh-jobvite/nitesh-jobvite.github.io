import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site (nitesh-jobvite.github.io) is served from the domain root,
// so the base path is "/". For a project repo you would set base: "/<repo>/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
