import { httpRequest } from './../httpRequest';

const countryAllUrl = 'address/country';
const cityAllUrl = 'address/province';
const districtAllUrl = 'address/district';
const wardAllUrl = 'address/ward';
const cityUrl = 'address/province/parent/';
const districtUrl = 'address/district/parent/';
const wardUrl = 'address/ward/parent/';

/**
 *
 * @returns get all the countries
 */

const getCountry = async() => {
    const _countries = await httpRequest.get(countryAllUrl);
    return _countries.data;
};

/**
 *
 * @returns get all the cities
 */

const getCity = async() => {
    const _cities = await httpRequest.get(cityAllUrl);
    return _cities.data;
};

/**
 *
 * @returns get all the districts
 */

const getDistrict = async() => {
    const _districts = await httpRequest.get(districtAllUrl);
    return _districts.data;
};

/**
 *
 * @returns get all the wards
 */

const getWard = async() => {
    const wards = await httpRequest.get(wardAllUrl);
    return wards.data;
};

/**
 *
 * @param {*} parentId the foreign key of ProvinceEntity
 * @returns the city by parent id
 */

const getCityById = async(parentId) => {
    return await httpRequest
        .get(cityUrl + parentId)
        .then((r) => r.data)
        .catch((err) => err);
};

/**
 *
 * @param {*} parentId the foreign key of DistrictEntity
 * @returns the district by parentId
 */

const getDistrictById = async(parentId) => {
    return await httpRequest
        .get(districtUrl + parentId)
        .then((r) => r.data)
        .catch((err) => err);
};

/**
 *
 * @param {*} parentId the foreign key WardEntity
 * @returns the ward by parentId
 */

const getWardById = async(parentId) => {
    return await httpRequest
        .get(wardUrl + parentId)
        .then((r) => r.data)
        .catch((err) => err);
};

export { getCountry, getCity, getDistrict, getWard, getCityById, getDistrictById, getWardById };