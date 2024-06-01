import axios from '../plugins/axios';

export async function getNews() {
  try {
    const response = await axios.get('/products'); 

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}