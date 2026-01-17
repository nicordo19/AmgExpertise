import { defineSecret } from 'firebase-functions/params';
import { onRequest } from 'firebase-functions/v2/https';
import fetch from 'node-fetch';

const brevoApiKey = defineSecret('BREVO_API_KEY');

export const sendContactEmail = onRequest(
  {
    cors: true, // Active CORS pour permettre les requêtes depuis ton frontend
    region: 'europe-west1', // Région proche de la France
    secrets: [brevoApiKey],
  },
  async (req, res) => {
    // Autoriser uniquement les requêtes POST
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Méthode non autorisée' });
      return;
    }

    try {
      const { name, email, phone, subject, message } = req.body;

      // Validation des champs
      if (!name || !email || !phone || !subject || !message) {
        res.status(400).json({ error: 'Tous les champs sont requis' });
        return;
      }

      // Validation de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Email invalide' });
        return;
      }

      // Préparer la requête pour l'API Brevo
      const brevoData = {
        sender: {
          name: 'AMG Expertise Contact',
          email: 'poiraudnico@gmail.com',
        },
        to: [{ email: 'poiraudnico@gmail.com', name: 'Nicolas Poiraud' }],
        replyTo: {
          email: email,
          name: name,
        },
        subject: ` ${subject}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #202f70; border-bottom: 3px solid #c8102e; padding-bottom: 15px; margin-top: 0;">
                📧 Nouveau message de contact
              </h2>
              
              <div style="margin: 25px 0; background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p style="margin: 10px 0;"><strong style="color: #202f70;">👤 Nom :</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #202f70;">📧 Email :</strong> <a href="mailto:${email}" style="color: #c8102e;">${email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #202f70;">📞 Téléphone :</strong> ${phone}</p>
                <p style="margin: 10px 0;"><strong style="color: #202f70;">📝 Sujet :</strong> ${subject}</p>
              </div>

              <div style="background: white; padding: 20px; border-left: 4px solid #c8102e; margin: 25px 0;">
                <h3 style="margin-top: 0; color: #202f70;">Message :</h3>
                <p style="white-space: pre-wrap; line-height: 1.8; color: #333;">${message}</p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center;">
                <p style="color: #888; font-size: 12px; margin: 5px 0;">
                  Ce message a été envoyé depuis le formulaire de contact
                </p>
                <p style="color: #888; font-size: 12px; margin: 5px 0;">
                  <strong>Site Web AMG Expertise</strong>
                </p>
                <p style="color: #888; font-size: 12px; margin: 5px 0;">
                  Pour répondre, cliquez sur "Répondre" dans votre client email
                </p>
              </div>
            </div>
          </div>
        `,
      };

      // Envoyer l'email via l'API Brevo
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': brevoApiKey.value(),
          'content-type': 'application/json',
        },
        body: JSON.stringify(brevoData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Erreur Brevo:', responseData);
        res.status(500).json({
          error: "Erreur lors de l'envoi de l'email",
          details: responseData,
        });
        return;
      }

      console.log('Email envoyé avec succès via Brevo:', responseData);
      res.status(200).json({
        success: true,
        message: 'Email envoyé avec succès',
        messageId: responseData.messageId,
      });
    } catch (error: any) {
      console.error('Erreur:', error);
      res.status(500).json({
        error: "Une erreur est survenue lors de l'envoi",
        details: error?.message || 'Erreur inconnue',
      });
    }
  },
);
