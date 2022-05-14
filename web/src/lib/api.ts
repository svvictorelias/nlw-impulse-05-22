import axios from 'axios'
//Necessário usar VITE_ no inicio do env, para execução
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})