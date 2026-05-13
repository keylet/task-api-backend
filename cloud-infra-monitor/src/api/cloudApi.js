import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(req => {
    console.log(`📤 ${req.method?.toUpperCase()} ${req.url}`);
    return req;
});

api.interceptors.response.use(res => {
    console.log(`📥 Respuesta ${res.status}:`, res.data);
    return res;
});

export const cloudApi = {
    getAll: () => api.get('/cloud-data'),
    getByProvider: (provider) => api.get(`/cloud-data/provider/${provider}`),
    create: (data) => api.post('/cloud-data', data),
    update: (id, data) => api.put(`/cloud-data/${id}`, data),
    delete: (id) => api.delete(`/cloud-data/${id}`),
    health: () => api.get('/health'),
};