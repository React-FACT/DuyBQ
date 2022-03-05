import { httpRequest } from './../httpRequest';

/**
 *
 * @returns get all the countries
 */

const getCountry = async() => {
    return await httpRequest
        .get('address/country')
        .then((r) => r.data)
        .catch((err) => err);
};

/**
 *
 * @param {*} parentId
 * @returns the city by parent id
 */
const getCityById = async(parentId) => {
    return await httpRequest
        .get(`/address/province/parent/${parentId}`)
        .then((r) => r)
        .catch((err) => err);
};

/**
 *
 * @param {*} parentId
 * @returns the district by parentId
 */
const getDistrictById = async(parentId) => {
    return await httpRequest
        .get(`/address/district/parent/${parentId}`)
        .then((r) => r)
        .catch((err) => err);
};

/**
 *
 * @param {*} parentId
 * @returns the ward by parentId
 */
const getWardById = async(parentId) => {
    return await httpRequest
        .get(`/address/ward/parent/${parentId}`)
        .then((r) => r)
        .catch((err) => err);
};

export { getCountry, getCityById, getDistrictById, getWardById };