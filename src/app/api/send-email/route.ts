import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs requis' },
        { status: 400 }
      );
    }
    
    // Log the submission for now (since we don't have actual email sending set up)
    console.log('Form submission:', { name, email, message });
    
    // In a real implementation, you would use a service like SendGrid, Mailgun, etc.
    // For example with SendGrid:
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: 'your-email@example.com' }] }],
    //     from: { email: 'no-reply@your-domain.com' },
    //     subject: `Message from ${name}`,
    //     content: [{ type: 'text/plain', value: `From: ${name} (${email})\n\n${message}` }]
    //   })
    // });

    // For now, simulate a successful email send
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 