const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'connect2snehasis@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app ${name}`,
      })
}

const sendCancelEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'connect2snehasis@gmail.com',
        subject: 'Good Bye!',
        text: `Hi ${name}, we hope to see you again`,
      })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

