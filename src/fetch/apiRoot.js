const DEV_URL = 'http://localhost:4000';
const PROD_URL = 'https://[APP-NAME].herokuapp.com';
export const API_ROOT =
  process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;
