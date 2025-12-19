// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisez Resend avec votre clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, budget } = body;

    // Validation de base
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Le nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Envoi de l'email via Resend
    const data = await resend.emails.send({
      from: 'i-Team Contact <contact@iteam.digital>',
      to: ['contact@iteam.digital'],
      subject: `Nouveau message de contact - ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouveau message de contact</title>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background-color: white;
                border-radius: 10px;
                padding: 30px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #3b82f6, #06b6d4);
                color: white;
                padding: 20px;
                border-radius: 10px 10px 0 0;
                margin: -30px -30px 30px -30px;
              }
              .info-section {
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
              }
              .info-item {
                margin-bottom: 10px;
              }
              .label {
                font-weight: bold;
                color: #4b5563;
              }
              .value {
                color: #1f2937;
              }
              .message-content {
                background-color: #f1f5f9;
                border-left: 4px solid #3b82f6;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 14px;
              }
              .company-info {
                color: #3b82f6;
                font-weight: bold;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Nouveau Message de Contact</h1>
                <p>Un visiteur a soumis un formulaire de contact sur i-Team Digital</p>
              </div>
              
              <div class="info-section">
                <h2>👤 Informations du contact</h2>
                <div class="info-item">
                  <span class="label">Nom :</span>
                  <span class="value">${name}</span>
                </div>
                <div class="info-item">
                  <span class="label">Email :</span>
                  <span class="value">${email}</span>
                </div>
                ${company ? `
                <div class="info-item">
                  <span class="label">Entreprise :</span>
                  <span class="value">${company}</span>
                </div>
                ` : ''}
                ${phone ? `
                <div class="info-item">
                  <span class="label">Téléphone :</span>
                  <span class="value">${phone}</span>
                </div>
                ` : ''}
                ${service ? `
                <div class="info-item">
                  <span class="label">Service intéressé :</span>
                  <span class="value">${service}</span>
                </div>
                ` : ''}
                ${budget ? `
                <div class="info-item">
                  <span class="label">Budget :</span>
                  <span class="value">${budget}</span>
                </div>
                ` : ''}
              </div>
              
              <div class="info-section">
                <h2>💬 Message</h2>
                <div class="message-content">
                  ${message}
                </div>
              </div>
              
              <div class="footer">
                <p>Ce message a été envoyé via le formulaire de contact de i-Team Digital</p>
                <div class="company-info">
                  i-Team Digital | contact@iteam.digital | +213 549 402 461
                </div>
                <p style="font-size: 12px; color: #9ca3af; margin-top: 15px;">
                  Date d'envoi : ${new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email envoyé avec succès',
        id: data.data?.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Erreur API send-email:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}