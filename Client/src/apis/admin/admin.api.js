import { httpRequest } from '../httpRequest';

const url = 'user/';

/**
 *
 * @returns the list all users
 */

const getAll = async() => {
    return await httpRequest
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
    try {
        const _request = await httpRequest.put(url + id, body);
        return _request.data;
    } catch (e) {
        console.log(e);
    }

    // return await httpRequest
    //     .
    //     .then((res) => res.data)
    //     .catch((err) => err);
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