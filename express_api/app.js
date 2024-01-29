const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const sgMail = require('@sendgrid/mail')
const axios = require('axios');

const port = 3000;

app.use(cors());
dotenv.config();
app.use(express.json());

const apiKey = process.env.OPENAI_API_KEY;
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/ask-openai', async (req, res) => {
  try {
    console.log(req.body)
    const { prompt } = req.body;

    const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';

    const openaiMessages = [
      { role: 'system', content: 'Eres un asistente que se llamado EVA Ai-din que lo sabe todo.' },
      { role: 'user', content: prompt },
    ];

    const openaiResponse = await axios.post(openaiEndpoint, {
      messages: openaiMessages,
      model: 'gpt-3.5-turbo',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const openaiCompletion = openaiResponse.data.choices[0].message.content;

    res.status(200).json({ success: true, answer: openaiCompletion });
  } catch (error) {
    console.error('Error al enviar la pregunta a OpenAI:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, message: 'Error al procesar la pregunta' });
  }
});


app.post('/generate-images', async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(prompt)
    const dalleEndpoint = 'https://api.openai.com/v1/images/generations';

    const dalleRequest = {
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    };

    const dalleResponse = await axios.post(dalleEndpoint, dalleRequest, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    image_url = dalleResponse.data.data[0].url;
    console.log(image_url)
    res.status(200).json({ success: true, image_url: image_url });
  } catch (error) {
    console.error('Error al generar imágenes con DALL·E:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, message: 'Error al generar imágenes con DALL·E' });
  }
});

app.post('/contact', (req, res) => {
  const { name, email, phone, company, message } = req.body;

  const msgClient = {
    to: email,
    from: 'diggitalylab@gmail.com',
    subject: 'Mensaje de confirmación de Kolaboraty LATAM',
    text: `¡Hola ${name}! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.`,
    html: `<p>¡Hola ${name}!</p><p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>`,
  };

  const msg = {
    to: 'diggitalylab@gmail.com',
    from: 'diggitalylab@gmail.com',
    subject: `Mensaje de ${name} de la compañía ${company}`,
    text: `Teléfono: ${phone}`,
    html: `<strong>${message}</strong><p>Contacto: ${phone}, ${email}</p>`,
  };

  sgMail.send(msgClient)
    .then(() => {
      console.log('Email client sent');
    })
    .catch((error) => {
      console.error('Error sending client email:', error);
    });

  sgMail.send(msg)
    .then(() => {
      console.log('Email sent');
      res.status(200).json({ success: true, message: 'Emails sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending emails' });
    });
});

app.use((err, res) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
