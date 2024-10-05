import React, { useEffect } from 'react';

const PayPalButton = ({ orderID }) => {
    useEffect(() => {
        const loadPayPalScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=INR`;
            script.async = true;
            script.onload = () => {
                window.paypal.Buttons({
                    createOrder: () => {
                        return fetch('/api/paypal/create-order', {
                            method: 'post',
                        }).then((response) => response.json())
                          .then((orderData) => orderData.id);
                    },
                    onApprove: (data) => {
                        return fetch(`/api/paypal/capture-order/${data.orderID}`, {
                            method: 'post',
                        }).then((response) => response.json())
                          .then((orderData) => {
                              console.log('Order captured:', orderData);
                          });
                    },
                    onError: (err) => {
                        console.error('PayPal Checkout onError', err);
                    }
                }).render('#paypal-button-container');
            };
            document.body.appendChild(script);
        };

        loadPayPalScript();
    }, []);

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
