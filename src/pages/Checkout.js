import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checkout = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadPayPalScript = () => {
            // Create script element for PayPal SDK
            const script = document.createElement('script');
            script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=INR`;
            script.async = true;

            // On script load, initialize PayPal Buttons
            script.onload = () => {
                window.paypal.Buttons({
                    createOrder: async () => {
                        setLoading(true);
                        try {
                            const response = await axios.post('/api/paypal/create-order');
                            setLoading(false);
                            return response.data.id; // Return the order ID
                        } catch (error) {
                            setLoading(false);
                            console.error('Error creating order:', error);
                            setError('Failed to create order. Please try again.');
                        }
                    },
                    onApprove: async (data) => {
                        setLoading(true);
                        try {
                            const response = await axios.post(`/api/paypal/capture-order/${data.orderID}`);
                            setLoading(false);
                            console.log('Payment captured:', response.data);
                            alert('Transaction completed!');
                        } catch (error) {
                            setLoading(false);
                            console.error('Error capturing order:', error);
                            setError('Failed to capture payment. Please try again.');
                        }
                    },
                    onError: (err) => {
                        console.error('PayPal Checkout error:', err);
                        setError('An error occurred during the checkout process. Please try again.');
                    }
                }).render('#paypal-button-container');
            };

            // Handle script load error
            script.onerror = () => {
                setError('Failed to load PayPal SDK. Please try again later.');
            };

            // Append script to the document body
            document.body.appendChild(script);
        };

        loadPayPalScript();

        // Cleanup function to remove script on component unmount
        return () => {
            const scriptTags = document.querySelectorAll('script[src^="https://www.sandbox.paypal.com/sdk/js"]');
            scriptTags.forEach(script => script.remove());
        };
    }, []);

    return (
        <div>
            <h1>Checkout</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div id="paypal-button-container"></div>
        </div>
    );
};

export default Checkout;
