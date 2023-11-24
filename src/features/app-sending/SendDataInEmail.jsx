import { useEffect } from 'react';

export const SendDataInEmail = ({ email, message }) => {

    useEffect(() => {
        const sendDataToServer = async () => {
            try {
            // Send data to your backend server
            const response = await fetch.post('/api/send-email', { email, message });
            console.log('Email sent:', response.data);
            } catch (error) {
            console.error('Error sending email:', error);
            }
        };
        sendDataToServer();
    }, [email, message])
};