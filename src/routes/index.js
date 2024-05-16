const express = require('express');
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

// colocar las rutas aquí
router.post('/emails', async (req, res) => {

    await sendEmail({
        to: 'andres.mendoza@academlo.com',
        subject: 'Prueba desde node',
        html: `
            <h1>Probando</h1>
            <p>Esta es mi prueba desde node</p>
            <ul>
                <li>Esta es</li>
                <li>una lista</li>
            </ul>
        `
    });

    return res.json({ message: "Hello world" });
});

router.post('/emails/contact', async(req, res) => {
    const { name, email, phone, message } = req.body;

    await sendEmail({
        to: 'andres.mendoza@academlo.com',
        subject: 'Correo desde el portafolio!',
        html: `
            <h1>${name} te escribió desde el portafolio</h1>
            <p>${message}</p>
            <ul>
                <li><b>Email: </b> ${email}</li>
                <li><b>Phone: </b> ${phone}</li>
            </ul>
        `,
    });

    return res.json({ name, email, phone, message });
});

module.exports = router;
