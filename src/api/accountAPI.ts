import axios from 'axios';

const accountAPI = axios.create({
  baseURL: 'https://inha-qraduation-exhibition-api.herokuapp.com',
});

export const getMyAccount = async () => {
  try {
    const result = await accountAPI.get('/my-accounts');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const getTransferAccount = async () => {
  try {
    const result = await accountAPI.get('/transfer-accounts');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
