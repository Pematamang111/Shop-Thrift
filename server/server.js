const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/checkout', async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			line_items: req.bosy.lineItems,
			mode: 'payment',
			payment_method_types: ['card'],
			success_url: 'http://localhost:3000/success',
			cancel_url: 'http://localhost:3000',
		});
		return res.status(201).json(session);
	} catch (error) {
		return res.status(500).json(error);
	}
});

app.listen(process.env.PORT, () =>
	console.log('Server is running successfully')
);
