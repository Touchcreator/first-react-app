import { loadEnv, defineConfig } from 'vite'
import { ngrok } from 'vite-plugin-ngrok'
const { NGROK_AUTH_TOKEN } = loadEnv('', process.cwd(), 'NGROK')
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    ngrok({
      authtoken: NGROK_AUTH_TOKEN,
    }),
    react()
  ],
})