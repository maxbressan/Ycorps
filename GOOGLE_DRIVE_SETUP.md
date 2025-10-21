# Configuração Google Drive para Envio de Currículos

## 📋 Passos para Configurar:

### 1. Google Cloud Console
1. Acesse: https://console.cloud.google.com/
2. Crie um novo projeto ou selecione um existente
3. Ative a Google Drive API
4. Vá em "Credenciais" → "Criar Credenciais" → "Conta de Serviço"

### 2. Configurar Service Account
1. Nome: `difrisul-drive-service`
2. Descrição: `Serviço para upload de currículos`
3. Após criar, clique na conta de serviço
4. Vá na aba "Chaves" → "Adicionar Chave" → "Criar Nova Chave" → JSON
5. Baixe o arquivo JSON

### 3. Configurar Google Drive
1. Crie uma pasta no Google Drive chamada "Currículos Recebidos"
2. Compartilhe a pasta com o email da service account (do arquivo JSON)
3. Dê permissão de "Editor"
4. Copie o ID da pasta da URL

### 4. Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_GOOGLE_DRIVE_FOLDER_ID=1ABC123DEF456GHI789JKL
REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL=difrisul-drive-service@projeto.iam.gserviceaccount.com
REACT_APP_GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

### 5. Template EmailJS
Atualize o template do EmailJS para incluir:
- `{{curriculo_drive_url}}` - Link para visualizar o currículo
- `{{curriculo_drive_id}}` - ID do arquivo no Drive
- `{{instrucoes_curriculo}}` - Instruções completas

## ✅ Benefícios:
- ✅ Sem limite de tamanho (até 50MB)
- ✅ Arquivo real no Google Drive
- ✅ Link direto para visualização
- ✅ Backup automático
- ✅ Organização em pastas

## 🔧 Teste:
Após configurar, teste enviando um currículo pelo formulário "Trabalhe Conosco".
