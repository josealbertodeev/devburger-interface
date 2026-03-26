import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(config => {
    const userData = localStorage.getItem('devburger:userData');

    let token = null;
    try {
        token = userData ? JSON.parse(userData).token : null;
    } catch (error) {
        console.warn('Dados de usuário corrompidos no localStorage:', error);
        localStorage.removeItem('devburger:userData');
        // Recarregar página para resetar o contexto
        window.location.reload();
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Response interceptor para tratar erros 401
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Só redireciona se não estiver nas rotas de login/registro
            const currentPath = window.location.pathname;
            if (!['/login', '/cadastro'].includes(currentPath)) {
                localStorage.removeItem('devburger:userData');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);