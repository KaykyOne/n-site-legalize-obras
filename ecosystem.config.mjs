// Configuração do PM2 para produção
export default {
  apps: [{
    name: 'legalize-obras',
    script: './dist/server/entry.mjs',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '0.0.0.0',
      SITE_URL: 'https://legalizeobras.com.br'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 80,  // ou 443 para HTTPS
      HOST: '0.0.0.0'
    }
  }]
}