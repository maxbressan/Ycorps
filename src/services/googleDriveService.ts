import { google } from 'googleapis';

// Configuração do Google Drive
const GOOGLE_DRIVE_FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID || 'YOUR_FOLDER_ID_HERE';
const GOOGLE_SERVICE_ACCOUNT_EMAIL = import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL || 'YOUR_SERVICE_ACCOUNT_EMAIL';
const GOOGLE_PRIVATE_KEY = import.meta.env.VITE_GOOGLE_PRIVATE_KEY || 'YOUR_PRIVATE_KEY';

export const uploadToGoogleDrive = async (file: File, candidateName: string, candidateEmail: string) => {
  try {
    console.log('=== INICIANDO UPLOAD PARA GOOGLE DRIVE ===');
    console.log('Arquivo:', file.name, 'Tamanho:', file.size);

    // Configurar autenticação
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });

    const drive = google.drive({ version: 'v3', auth });

    // Criar nome único para o arquivo
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `Curriculo_${candidateName.replace(/\s+/g, '_')}_${timestamp}.${file.name.split('.').pop()}`;

    console.log('Nome do arquivo no Drive:', fileName);

    // Upload do arquivo
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [GOOGLE_DRIVE_FOLDER_ID],
        description: `Currículo de ${candidateName} (${candidateEmail}) - Enviado em ${new Date().toLocaleString('pt-BR')}`
      },
      media: {
        mimeType: file.type,
        body: file
      }
    });

    console.log('Arquivo criado no Drive:', response.data.id);

    // Tornar o arquivo público para visualização
    await drive.permissions.create({
      fileId: response.data.id!,
      requestBody: {
        role: 'reader',
        type: 'anyone'
      }
    });

    console.log('Arquivo tornado público');

    // Gerar link de visualização
    const fileUrl = `https://drive.google.com/file/d/${response.data.id!}/view`;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${response.data.id!}`;

    console.log('=== UPLOAD CONCLUÍDO COM SUCESSO ===');
    console.log('URL de visualização:', fileUrl);
    console.log('URL de download:', downloadUrl);

    return {
      success: true,
      fileId: response.data.id!,
      fileName: fileName,
      viewUrl: fileUrl,
      downloadUrl: downloadUrl,
      fileSize: file.size
    };

  } catch (error) {
    console.error('=== ERRO NO UPLOAD PARA GOOGLE DRIVE ===');
    console.error('Erro completo:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido no upload'
    };
  }
};

// Função para testar a conexão
export const testGoogleDriveConnection = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });

    const drive = google.drive({ version: 'v3', auth });
    
    // Testar listando arquivos da pasta
    await drive.files.list({
      q: `'${GOOGLE_DRIVE_FOLDER_ID}' in parents`,
      pageSize: 1
    });

    console.log('✅ Conexão com Google Drive OK');
    return { success: true, message: 'Conexão estabelecida com sucesso' };
    
  } catch (error) {
    console.error('❌ Erro na conexão com Google Drive:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    };
  }
};
