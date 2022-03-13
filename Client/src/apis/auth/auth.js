import { httpRequest } from '../httpRequest';

const LOGIN_URL = 'auth/login';

export const login = async(payload) => {
    return await httpRequest.post(LOGIN_URL, payload).then((res) => res.data);
};