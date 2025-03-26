import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, organization, email, message } = await request.json();

    // Basic validation
    if (!name || !organization || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Consultora Dejavu <info@consultoradejavu.cl>',
      to: ['info@consultoradejavu.cl'],
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F05A28; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Información del remitente:</h3>
            <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Organización:</strong> ${organization}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #F05A28;">${email}</a></p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Este mensaje fue enviado desde el formulario de contacto de Consultora Dejavu.</p>
            <p>Puedes responder directamente a este correo para contactar a ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
} 