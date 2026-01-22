import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: { sourcemap: false },
  build: { sourcemap: false },
  server: {
    headers: {
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; connect-src 'self' ws: http: https:; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
    }
  }
})
