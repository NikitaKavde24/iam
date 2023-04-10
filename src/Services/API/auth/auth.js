import api from ".."

export const authenticate = (email, password) =>
  api.post('/user/login', { email, password });