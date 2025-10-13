/**
 * Paperboy - Service de formulaire de contact sécurisé pour rebond.eco
 * 
 * Cette fonction Cloudflare Pages gère l'endpoint POST /api/paperboy
 * qui reçoit les données du formulaire de contact et les envoie par email via Brevo.
 */

// ========================================
// Types & Interfaces
// ========================================

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
  message: string;
  messageId?: string;
}

// ========================================
// Constantes
// ========================================

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
} as const;

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT_EMAIL = 'bonjour@rebond.eco';

// ========================================
// Fonctions utilitaires
// ========================================

/**
 * Crée une réponse JSON avec les headers CORS appropriés
 */
function createJsonResponse(data: ApiResponse, status: number = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
  });
}

/**
 * Valide les champs obligatoires du formulaire
 */
function validateFormData(data: ContactFormData): string | null {
  if (!data.name?.trim()) return 'Le nom est obligatoire';
  if (!data.email?.trim()) return 'L\'email est obligatoire';
  if (!data.message?.trim()) return 'Le message est obligatoire';
  if (!EMAIL_REGEX.test(data.email)) return 'L\'adresse email n\'est pas valide';
  return null;
}

/**
 * Parse les données du formulaire selon le Content-Type
 */
async function parseFormData(request: Request): Promise<ContactFormData | null> {
  const contentType = request.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    return await request.json();
  }

  if (contentType?.includes('application/x-www-form-urlencoded')) {
    const form = await request.formData();
    return {
      name: form.get('name')?.toString() || '',
      email: form.get('email')?.toString() || '',
      subject: form.get('subject')?.toString() || '',
      message: form.get('message')?.toString() || '',
      company: form.get('company')?.toString() || '',
    };
  }

  return null;
}

/**
 * Génère le contenu HTML de l'email
 */
function generateHtmlContent(data: ContactFormData): string {
  const companyRow = data.company ? `<p><strong>Société :</strong> ${data.company}</p>` : '';
  const subjectRow = data.subject ? `<p><strong>Sujet :</strong> ${data.subject}</p>` : '';

  return `
    <h2>Nouveau message de contact - Rebond.eco</h2>
    <p><strong>Nom :</strong> ${data.name}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    ${companyRow}
    ${subjectRow}
    <p><strong>Message :</strong></p>
    <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
      ${data.message.replace(/\n/g, '<br>')}
    </div>
    <hr>
    <p><small>Message envoyé depuis le formulaire de contact de rebond.eco</small></p>
  `;
}

/**
 * Génère le contenu texte de l'email
 */
function generateTextContent(data: ContactFormData): string {
  const companyLine = data.company ? `Société: ${data.company}\n` : '';
  const subjectLine = data.subject ? `Sujet: ${data.subject}\n` : '';

  return `
Nouveau message de contact - Rebond.eco

Nom: ${data.name}
Email: ${data.email}
${companyLine}${subjectLine}
Message:
${data.message}

---
Message envoyé depuis le formulaire de contact de rebond.eco
  `.trim();
}

/**
 * Envoie l'email via l'API Brevo
 */
async function sendEmail(data: ContactFormData, apiKey: string): Promise<any> {
  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: 'Formulaire Contact Rebond',
        email: 'noreply@rebond.eco'
      },
      to: [{
        email: RECIPIENT_EMAIL,
        name: 'Équipe Rebond'
      }],
      replyTo: {
        email: data.email,
        name: data.name
      },
      subject: data.subject || `Nouveau message de ${data.name}`,
      htmlContent: generateHtmlContent(data),
      textContent: generateTextContent(data),
      tags: ['contact-form', 'rebond-website']
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Erreur Brevo:', errorText);
    throw new Error('Échec de l\'envoi de l\'email via Brevo');
  }

  return response.json();
}

// ========================================
// Handler principal - Pages Function
// ========================================

export async function onRequestPost(context: any): Promise<Response> {
  const { request, env } = context;
    try {
      // Gérer les requêtes OPTIONS (preflight CORS)
      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: CORS_HEADERS });
      }

      // Vérifier que c'est une requête POST
      if (request.method !== 'POST') {
        return createJsonResponse({
          error: 'Méthode non autorisée',
          message: 'Seules les requêtes POST sont acceptées'
        }, 405);
      }

      // Vérifier la configuration
      if (!env.BREVO_API_KEY) {
        return createJsonResponse({
          error: 'Configuration manquante',
          message: 'La clé API Brevo n\'est pas configurée'
        }, 500);
      }

      // Parser les données du formulaire
      const formData = await parseFormData(request);
      if (!formData) {
        return createJsonResponse({
          error: 'Format invalide',
          message: 'Content-Type doit être application/json ou application/x-www-form-urlencoded'
        }, 400);
      }

      // Valider les données
      const validationError = validateFormData(formData);
      if (validationError) {
        return createJsonResponse({
          error: 'Données invalides',
          message: validationError
        }, 400);
      }

      // Envoyer l'email
      const result = await sendEmail(formData, env.BREVO_API_KEY);
      console.log('Email envoyé avec succès:', result.messageId);

      // Retourner le succès
      return createJsonResponse({
        success: true,
        message: 'Votre message a été envoyé avec succès !',
        messageId: result.messageId
      });

    } catch (error) {
      console.error('Erreur lors du traitement:', error);
      return createJsonResponse({
        error: 'Erreur interne',
        message: 'Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.'
      }, 500);
    }
}