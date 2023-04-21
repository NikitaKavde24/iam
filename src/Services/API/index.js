import axios from "axios";
import ENV from '../../../EnvironmentVariables.json';
import { getStorage } from "../Storage";

const MODE = import.meta.env.MODE;

const api = axios.create({
  baseURL:
    MODE === "development" ? `${ENV.serverURL}${ENV.apiURL}` : `${ENV.apiURL}`,
  headers: {
    "content-type": "application/json",
  },
  timeout: 30000,
});



api.interceptors.request.use(async (config) => {
  const token = getStorage("f1ff4832-a453-4255-b10f-07b0f9d73349");
  if (shouldSendToken(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = undefined;
  }
  return config;
});



const shouldSendToken = (url) => {
  let sendToken = true;
  let whitelist = [
    '/user/signin'
  ];
  whitelist.forEach((_url) => {
    if (url.endsWith(_url)) {
      sendToken = false;
    }
  });
  return sendToken;
};
export default api;
