import axios from '../plugins/axios';

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      `/auth/login`,
      JSON.stringify({ email, password }),
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
// export async function login(email, password) {
//   try {
//     const response = await axios.get(
//       `${API_ENV.apiUrl}/auth/profile`,
//       {
//         headers: {
//           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcxNzI2OTgxNywiZXhwIjoxNzE4OTk3ODE3fQ.hNB1CZb_vGWVkZTdUGf_ku0YHvJRsb9b6A5QROUylBo',
//         },
//       },
//     );

//     console.log(response);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return Promise.reject(err);
//   }
// }
