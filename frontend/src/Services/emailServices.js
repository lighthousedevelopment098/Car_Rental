import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const sendCardEmail = async ({ email, subject, message }) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-email`, { email, subject, message });
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
