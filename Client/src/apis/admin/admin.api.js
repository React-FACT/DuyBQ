import { httpRequest } from '../httpRequest';

const getAll = async() => {
    return await httpRequest
        .get('user')
        .then((res) => res.data)
        .catch((err) => err);
};

const getById = async(id) => {
    return await httpRequest
        .get('user/' + id)
        .then((res) => res.data)
        .catch((err) => err);
};

const create = async(body) => {
    return await httpRequest
        .post('user/', body)
        .then((res) => res.data)
        .catch((err) => err);
};

const update = async(id, body) => {
    return await httpRequest
        .put('user' + id, body)
        .then((res) => res.data)
        .catch((err) => err);
};

const remove = async(id, body) => {
    return await httpRequest
        .delete('user' + id)
        .then((res) => res.data)
        .catch((err) => err);
};

export { getAll, getById, create, update, remove };