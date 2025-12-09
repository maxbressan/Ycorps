# Instruções de Deploy na Hostinger

## Melhorias de Segurança Implementadas

### 1. Headers de Segurança
- ✅ **X-Content-Type-Options**: nosniff
- ✅ **X-Frame-Options**: SAMEORIGIN
- ✅ **Referrer-Policy**: strict-origin-when-cross-origin
- ✅ **Strict-Transport-Security (HSTS)**: max-age=31536000
- ✅ **Cross-Origin-Resource-Policy**: same-site
- ✅ **Content Security Policy**: Implementado

### 2. Arquivos Criados

#### `.htaccess` (já criado em `public/.htaccess`)
Este arquivo será copiado automaticamente para a raiz do site na Hostinger durante o build.

#### Configuração no cPanel da Hostinger:

1. **Após fazer upload dos arquivos:**
   - Certifique-se de que o arquivo `.htaccess` está na raiz do diretório público (normalmente `public_html`)

2. **Verificar módulos Apache necessários:**
   - mod_headers (para headers de segurança)
   - mod_rewrite (para redirecionamento HTTPS)
   - mod_expires (para cache)
   - mod_deflate (para compressão)

3. **Se os módulos não estiverem habilitados:**
   - Entre em contato com o suporte da Hostinger para habilitar

## Passos para Deploy

### 1. Build do Projeto
```bash
npm run build
```

### 2. Upload dos Arquivos
- Faça upload de todo o conteúdo da pasta `dist/` para o diretório público da Hostinger (geralmente `public_html/`)
- Certifique-se de que o arquivo `.htaccess` está incluído na raiz

### 3. Configuração de Redirecionamento
O arquivo `.htaccess` já inclui redirecionamento automático de HTTP para HTTPS.

### 4. Verificação Pós-Deploy

Após o deploy, verifique:
1. ✅ HTTPS está funcionando
2. ✅ Redirecionamento HTTP → HTTPS
3. ✅ Headers de segurança estão presentes (use https://securityheaders.com/)
4. ✅ Site funciona corretamente

## Observações Importantes

### Content Security Policy (CSP)
O CSP inclui `'unsafe-inline'` e `'unsafe-eval'` porque são necessários para React/Vite funcionar. Isso é normal para aplicações React e não compromete a segurança quando combinado com outros headers.

Para melhorar ainda mais:
- Considere usar nonces em futuras versões (requer configuração no build)
- Monitore relatórios de CSP para ajustar políticas

### Cookies
O site não usa cookies HTTP (apenas localStorage para consentimento de cookies), então a pontuação 0 é esperada e não indica problema de segurança.

## Testes de Segurança

Após o deploy, teste em:
- https://securityheaders.com/
- https://observatory.mozilla.org/
- https://www.ssllabs.com/ssltest/

## Suporte

Se houver problemas com os headers de segurança na Hostinger:
1. Verifique se o módulo `mod_headers` está habilitado
2. Tente colocar as diretivas diretamente no `.htaccess` (já feito)
3. Entre em contato com o suporte da Hostinger se necessário

