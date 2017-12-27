const sgMail = require('@sendgrid/mail');

SG_API_KEY = "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"
sgMail.setApiKey(SG_API_KEY);

function sendMsg(to, name) {
  const msg = {
    to: to,
    from: 'admin@gsd-app.com',
    replyTo: 'admin@gsd-app.com',
    subject: '[Confirmation] Thanks for signing up to Get Shit Done!',
    templateId: '18e3dc61-fd34-455e-9810-22af15139882',
    substitutionWrappers: ['{{', '}}'],
    substitutions: {
      name: name,
    },
    categories: ['sign-up']
  };
  sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
}
