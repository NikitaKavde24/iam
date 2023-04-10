import axios from "axios";
import ENV from '../../../EnvironmentVariables.json';

const MODE = import.meta.env.MODE;

const api = axios.create({
  baseURL:
    MODE === "development" ? `${ENV.serverURL}${ENV.apiURL}` : `${ENV.apiURL}`,
  headers: {
    "content-type": "application/json",
    "Accept-Language": "en-us",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 30000,
});

export default api;
