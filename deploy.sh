#!/bin/bash

echo "🚀 Deploy Legalize Obras iniciado..."

APP_DIR="/var/www/legalize-obras"
REPO_URL="https://github.com/KaykyOne/n-site-legalize-obras.git"

# Garante diretório
sudo mkdir -p $APP_DIR
sudo chown $USER:$USER $APP_DIR
cd $APP_DIR

# Instala Node e PM2 se não tiver
if ! command -v node &>/dev/null; then
  echo "📥 Instalando Node.js..."
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
  sudo apt install -y nodejs
fi

if ! command -v pm2 &>/dev/null; then
  echo "📥 Instalando PM2..."
  sudo npm install -g pm2
fi

# Baixa ou atualiza código
if [ -d "$APP_DIR/.git" ]; then
  echo "🔄 Atualizando repositório..."
  git pull
else
  echo "📥 Clonando repositório..."
  git clone $REPO_URL $APP_DIR
  cd $APP_DIR
fi

# Instala dependências + build
echo "📦 Instalando dependências..."
npm install

echo "🏗️ Buildando..."
npm run build

# Sobe ou reinicia app
echo "🚀 Iniciando aplicação..."
pm2 start "./dist/server/entry.mjs" --name legalize-obras || pm2 restart legalize-obras
pm2 save

echo "🎯 Done! Rodando na porta 4321"
