# 🚀 Instruções para Deploy na Hostinger

## ✅ Status do Projeto
- ✅ Build concluído com sucesso
- ✅ Arquivos de segurança configurados (`.htaccess` e `_headers`)
- ✅ Formulário integrado com WhatsApp
- ✅ Todas as novas seções adicionadas

## 📦 Passo a Passo para Deploy

### 1. Acesse seu painel da Hostinger
- Faça login no painel de controle (cPanel ou hPanel)

### 2. Localize o diretório do seu domínio
- Normalmente: `public_html/` ou `public_html/seu-dominio.com/`

### 3. Faça upload dos arquivos
**Opção A: Via File Manager (cPanel)**
1. Acesse o File Manager
2. Navegue até o diretório do seu domínio
3. Selecione todos os arquivos existentes (opcional - faça backup antes)
4. Faça upload de TODOS os arquivos da pasta `dist/` do projeto:
   - `index.html`
   - `.htaccess` ⚠️ **IMPORTANTE: Inclua este arquivo!**
   - `_headers`
   - `_redirects`
   - Pasta `assets/` completa
   - Pasta `img/` completa

**Opção B: Via FTP/SFTP**
1. Use um cliente FTP (FileZilla, WinSCP, etc.)
2. Conecte ao seu servidor
3. Navegue até o diretório público
4. Faça upload de TODOS os arquivos da pasta `dist/`

### 4. Verificar permissões
- Certifique-se de que o arquivo `.htaccess` está na raiz
- Permissões recomendadas: arquivos `644`, pastas `755`

### 5. Verificar módulos Apache necessários
Os seguintes módulos devem estar habilitados (normalmente já estão):
- ✅ `mod_headers` (para headers de segurança)
- ✅ `mod_rewrite` (para redirecionamento HTTPS)
- ✅ `mod_expires` (para cache)
- ✅ `mod_deflate` (para compressão)

**Se algum módulo não estiver habilitado:**
- Entre em contato com o suporte da Hostinger

## ✅ Verificações Pós-Deploy

### 1. Teste o site
- Acesse seu domínio: `https://seu-dominio.com`
- Verifique se está redirecionando HTTP → HTTPS automaticamente

### 2. Teste o formulário
- Preencha o formulário de contato
- Verifique se abre o WhatsApp com a mensagem formatada

### 3. Teste de segurança
Após o deploy, teste em:
- 🔒 **Security Headers**: https://securityheaders.com/
- 🔍 **Mozilla Observatory**: https://observatory.mozilla.org/
- 📊 **SSL Labs**: https://www.ssllabs.com/ssltest/

## 📋 Checklist Final

- [ ] Todos os arquivos da pasta `dist/` foram enviados
- [ ] Arquivo `.htaccess` está na raiz do domínio
- [ ] Site carrega corretamente
- [ ] Redirecionamento HTTPS funcionando
- [ ] Formulário de contato abre WhatsApp
- [ ] Headers de segurança configurados

## 🐛 Problemas Comuns

### Site não carrega
- Verifique se `index.html` está na raiz
- Verifique permissões dos arquivos (644 para arquivos, 755 para pastas)

### Headers de segurança não funcionam
- Verifique se o módulo `mod_headers` está habilitado
- Verifique se o `.htaccess` está na raiz
- Entre em contato com suporte da Hostinger

### Redirecionamento HTTPS não funciona
- Verifique se tem SSL/HTTPS configurado no domínio
- Verifique se o módulo `mod_rewrite` está habilitado

## 📞 Suporte
Se tiver problemas, entre em contato com:
- Suporte Hostinger: Suporte técnico da Hostinger
- Documentação: Consulte `DEPLOY_HOSTINGER.md` para mais detalhes

---
**Data do Build:** $(date)
**Versão:** Pronta para produção ✅

