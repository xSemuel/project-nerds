

export const SendDataInEmail = async ({ email, message }) => {

    const url = 'https://api.example.com/data';

    const dataToSend = {
        key1: email,
        key2: message,
        // Add more data as needed
    };

    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type you're sending
            // Add any other headers as needed
        },
        body: JSON.stringify(dataToSend), // Convert JS object to JSON string
        });
    
        if (response.ok) {
        const responseData = await response.json();
        console.log('Data sent successfully:', responseData);
        // Handle the response data
        return true;
        } else {
        throw new Error('Error sending data.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        // Handle errors here
        return false;
    }
};
