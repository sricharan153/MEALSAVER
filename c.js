const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = new twilio(accountSid, authToken);

app.post('/send-location', (req, res) => {
    const { mobile, latitude, longitude } = req.body;

    const message = `Agent, your current location is: Latitude: ${latitude}, Longitude: ${longitude}`;

    client.messages.create({
        body: message,
        to: mobile,  // The agent's phone number
        from: 'your_twilio_phone_number'  // Your Twilio number
    })
    .then((message) => {
        res.status(200).send({ success: true, message: 'Location sent successfully!' });
    })
    .catch((error) => {
        res.status(500).send({ success: false, error: error.message });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
