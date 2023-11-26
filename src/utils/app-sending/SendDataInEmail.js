

export const SendDataInEmail = async ({ email, message }) => {

    try {
        // Send data to your backend server
        const response = await fetch.post('/api/send-email', { email, message });
        console.log('Email sent:', response.data);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


// custom hook
// const a = await sendEmail(email,message).then

// const sendDataToServer = async () => {
//     try {
//       // Використання аргументів, переданих через props, у запиті fetch
//       const response = await fetch('URL_адреса_сервера', {
//         method: 'POST', // або 'PUT', 'DELETE', інше
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           argument1: props.argument1,
//           argument2: props.argument2,
//           // Інші дані для відправки на сервер
//         }),
//       });

//       const responseData = await response.json();
//       setData(responseData); // Збереження відповіді в стані компоненту
//     } catch (error) {
//       console.error('Помилка відправлення даних на сервер:', error);
//     }
//   };