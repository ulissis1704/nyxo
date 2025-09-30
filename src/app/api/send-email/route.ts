import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_9z9KsrXi_LUeHtG3XuZmf8r8vVoziYF3e');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    console.log('Tentative d\'envoi d\'email:', { name, email, subject });

    // Test simple d'abord
    try {
      const { data, error } = await resend.emails.send({
        from: 'NyxoSolution <onboarding@resend.dev>',
        to: ['bayahiahamza17@gmail.com'],
        subject: `Nouveau message de ${name} - ${subject || 'Contact via site web'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              Nouveau message de contact
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Informations du contact</h3>
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Sujet :</strong> ${subject || 'Non spécifié'}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
              <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact du site web NyxoSolution.</p>
              <p style="margin: 5px 0 0 0;">Date : ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error('Erreur Resend:', error);
        return NextResponse.json(
          { error: 'Erreur Resend: ' + JSON.stringify(error) },
          { status: 500 }
        );
      }

      console.log('Email envoyé avec succès:', data);
      return NextResponse.json(
        { message: 'Email envoyé avec succès', id: data?.id },
        { status: 200 }
      );

    } catch (resendError) {
      console.error('Erreur Resend catch:', resendError);
      return NextResponse.json(
        { error: 'Erreur Resend: ' + (resendError instanceof Error ? resendError.message : 'Unknown error') },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
