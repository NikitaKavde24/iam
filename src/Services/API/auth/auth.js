import api from ".."

export const authenticate = (email, password) =>
  api.post('/login/', { username:email, password });