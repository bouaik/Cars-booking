const DEV_URL = 'http://localhost:4000';
const PROD_URL = 'https://cars-booking-api.herokuapp.com';
export const API_ROOT =
  process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;