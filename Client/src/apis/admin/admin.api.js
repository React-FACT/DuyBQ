import { httpRequest } from '../httpRequest';

const url = 'user/';

/**
 *
 * @returns the list all users
 */

const getAll = () => {
    return httpRequest
        .get(url)
        .then((res) => res.data)
        .catch((err) => err);
};

/**
 *
 * @param {*} id  the primary key | type: number
 * @returns the user by id
 */

const getById = async(id) => {
    return await httpRequest
        .get(url + id)
        .then((res) => res.data)
        .catch((err) => err);
};
/**
 *
 * @param {*} body UserEntity
 * @returns the response
 */

const create = async(body) => {
    return await httpRequest
        .post(url, body)
        .then((res) => res.data)
        .catch((err) => err);
};
/**
 *
 * @param {*} id the primary key | type: number
 * @param {*} body UserEntity
 * @returns the response
 */

const update = async(id, body) => {
    return await httpRequest
        .put(url + id, body)
        .then((res) => res.data)
        .catch((err) => err);
};

/**
 *
 * @param {*} id the primary key | type: number
 * @returns the response
 */
const remove = async(id) => {
    return await httpRequest
        .delete(url + id)
        .then((res) => res.data)
        .catch((err) => err);
};

export { getAll, getById, create, update, remove };