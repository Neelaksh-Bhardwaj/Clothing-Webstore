const express = require('express');
const axios = require('axios');
const router = express.Router();

const CLIENT_ID = 'AavkeQU1ueein-gOdWaN4zlNeI6FTHh5VeSQiF1dlPv_DTRz7EpqPAkoHyqz5_kGePrgvNgiyaRSWWPx';
const SECRET = 'EF8NyCRwyQleiLk3gXYjWTA7US3wDU9E1eJQe8FOqiR0mpSQNjeFlnx2n5E91n6x7lN4cHIE2vZlEwNF';

// Create Order
router.post('/create-order', async (req, res) => {
    const order = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'INR',
                value: req.body.amount // Pass the amount from the client
            }
        }]
    };

    try {
        const response = await axios.post('https://api-m.sandbox.paypal.com/v2/checkout/orders', order, {
            auth: {
                username: CLIENT_ID,
                password: SECRET
            }
        });
        res.json({ id: response.data.id });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating order');
    }
});

// Capture Order
router.post('/capture-order/:orderID', async (req, res) => {
    try {
        const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${req.params.orderID}/capture`, {}, {
            auth: {
                username: CLIENT_ID,
                password: SECRET
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error capturing order');
    }
});

module.exports = router;
