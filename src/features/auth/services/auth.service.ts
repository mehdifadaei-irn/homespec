import { api } from '@/lib/api';

interface UserDetails {
    first_name?: string | null;
    last_name?: string | null;
}

interface PhoneLogin {
    phone_number: string;
    email?: never;
}

interface EmailLogin {
    email: string;
    phone_number?: never;
}

export type RegisterPayload = (PhoneLogin | EmailLogin) & UserDetails

export type LoginPayload = (PhoneLogin | EmailLogin) & {
    password: string;
};


export const authenticate = async (credentials: LoginPayload | RegisterPayload) => {
    const response = await api.post('/auth/authenticate', credentials);
    return response.data;
};

export const logout = async () => {
    const response = await api.post('/auth/logout');
    return response.data;
};

export const refresh = async () => {
    const response = await api.post('/auth/refresh');
    return response.data;
};

export const identity = async () => {
    const response = await api.post('/auth/user');
    return response.data;
};