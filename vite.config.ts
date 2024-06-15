import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

/* export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
*/

interface Env {
  readonly VITE_PUBLIC_PORT: string;
}

export default defineConfig(({ mode } : { mode : string}) => {

  const cwd = process.cwd()
  
  const env = {...loadEnv(mode, cwd, 'VITE')}

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: Number(env.VITE_PUBLIC_PORT)
    },
  };
})
