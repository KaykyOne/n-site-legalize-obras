# Script para converter imagens PNG/JPG para WebP
# Mantém os arquivos originais como fallback

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Conversor de Imagens para WebP" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se o sharp está instalado
Write-Host "Verificando dependências..." -ForegroundColor Yellow

$packageJsonPath = ".\package.json"
if (Test-Path $packageJsonPath) {
    $packageJson = Get-Content $packageJsonPath | ConvertFrom-Json
    $hasSharp = $packageJson.devDependencies.PSObject.Properties.Name -contains "sharp"
    
    if (-not $hasSharp) {
        Write-Host "Instalando sharp para conversão de imagens..." -ForegroundColor Yellow
        npm install --save-dev sharp
    } else {
        Write-Host "✓ Sharp já está instalado" -ForegroundColor Green
    }
}

# Criar script Node.js para conversão
$nodeScript = @"
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = './public';
const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function convertToWebP() {
    const files = fs.readdirSync(publicDir);
    
    console.log('\n🔄 Iniciando conversão de imagens...\n');
    
    let converted = 0;
    let skipped = 0;
    
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        
        if (imageExtensions.includes(ext)) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(publicDir, file.replace(ext, '.webp'));
            
            // Pular se já existe
            if (fs.existsSync(outputPath)) {
                console.log('⏭️  Já existe:', file, '→', path.basename(outputPath));
                skipped++;
                continue;
            }
            
            try {
                await sharp(inputPath)
                    .webp({ quality: 85 })
                    .toFile(outputPath);
                
                const originalSize = fs.statSync(inputPath).size;
                const webpSize = fs.statSync(outputPath).size;
                const reduction = Math.round((1 - webpSize / originalSize) * 100);
                
                console.log('✅ Convertido:', file, '→', path.basename(outputPath), '(' + reduction + '% menor)');
                converted++;
            } catch (error) {
                console.error('❌ Erro ao converter', file, ':', error.message);
            }
        }
    }
    
    console.log('\n=================================');
    console.log('✨ Conversão concluída!');
    console.log('   Convertidas:', converted);
    console.log('   Já existiam:', skipped);
    console.log('=================================\n');
}

convertToWebP().catch(console.error);
"@

# Salvar script temporário
$tempScript = "convert-images.js"
$nodeScript | Out-File -FilePath $tempScript -Encoding UTF8

Write-Host ""
Write-Host "Executando conversão..." -ForegroundColor Yellow
node $tempScript

# Remover script temporário
Remove-Item $tempScript

Write-Host ""
Write-Host "✅ Processo finalizado!" -ForegroundColor Green
Write-Host ""
