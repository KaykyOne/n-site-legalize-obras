#!/bin/bash

# Script de deploy para VPS
# Coloque este arquivo na sua VPS

echo "🚀 Iniciando deploy do Legalize Obras..."

# Definir variáveis
APP_DIR="/var/www/legalize-obras"
REPO_URL="https://github.com/KaykyOne/n-site-legalize-obras.git"
NODE_VERSION="18"

# Parar o servidor se estiver rodando
echo "📦 Parando servidor anterior..."
sudo systemctl stop legalize-obras || true

# Atualizar o sistema
echo "🔄 Atualizando sistema..."
sudo apt update

# Instalar Node.js se não existir
if ! command -v node &> /dev/null; then
    echo "📥 Instalando Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Instalar PM2 para gerenciar o processo
if ! command -v pm2 &> /dev/null; then
    echo "📥 Instalando PM2..."
    sudo npm install -g pm2
fi

# Criar diretório da aplicação
echo "📁 Preparando diretório..."
sudo mkdir -p $APP_DIR
sudo chown $USER:$USER $APP_DIR

# Clonar ou atualizar repositório
if [ -d "$APP_DIR/.git" ]; then
    echo "🔄 Atualizando código..."
    cd $APP_DIR
    git pull origin main
else
    echo "📥 Clonando repositório..."
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Fazer build
echo "🏗️ Fazendo build..."
npm run build

# Configurar PM2
echo "⚙️ Configurando PM2..."
cat > ecosystem.config.js << EOL
module.exports = {
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
      HOST: '0.0.0.0'
    }
  }]
}
EOL

# Iniciar com PM2
echo "🚀 Iniciando aplicação..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo "✅ Deploy concluído!"
echo "🌐 Aplicação rodando na porta 4321"
echo "📊 Use 'pm2 logs legalize-obras' para ver logs"
echo "🔄 Use 'pm2 restart legalize-obras' para reiniciar"