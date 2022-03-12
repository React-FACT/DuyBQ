const { AddressService } = require('../services/address.service');
const { addressHelper } = require('../utils/address.util');
const logger = require('../logger/winston.logger');

const getAll = async(req, res) => {
    const { isResult, isName } = await addressHelper(req.params.name);
    if (isResult === false) {
        res.json({ statusCode: 404, results: 'Data not found!' });
    } else {
        const _addressService = new AddressService(isName);
        res.json(await _addressService.getAll());
    }
};

const getById = async(req, res) => {
    const { isResult, isName } = await addressHelper(req.params.name);
    if (isResult === false) {
        res.json({ statusCode: 404, results: 'Data not found!' });
    } else {
        const _addressService = new AddressService(isName);
        res.json(await _addressService.getById(req.params.id));
    }
};

const getByIdParent = async(req, res) => {
    const { isResult, isName, isParent } = await addressHelper(req.params.name);
    if (isResult === false && isParent === '') {
        res.json({ statusCode: 404, results: 'Data not found!' });
    } else {
        const _addressService = new AddressService(isName);
        res.json(await _addressService.getAddressByParentId(isParent, req.params.id));
    }
};

const create = async(req, res) => {
    const { isResult, isName } = await addressHelper(req.params.name);
    if (isResult === false) {
        res.json({ statusCode: 404, results: 'Data not found!' });
    } else {
        const _addressService = new AddressService(isName);
        res.json(await _addressService.create(req.body));
    }
};

const update = async(req, res) => {
    const { isResult, isName } = await addressHelper(req.params.name);
    if (isResult === false) {
        res.json({ statusCode: 404, results: 'Data not found!' });
    } else {
        const _addressService = new AddressService(isName);
        res.json(await _addressService.update(parseInt(req.params.id), req.body));
    }
};

const remove = async(req, res) => {
    const { isResult, isName } = await addressHelper(req.params.name);
    if (isResult === false) {
        res.json({ statusCode: 404, results: 'Data not found!' });
    } else {
        const _addressService = new AddressService(isName);
        res.json(await _addressService.delete(req.params.id));
    }
};

module.exports = {
    getAll,
    getById,
    getByIdParent,
    create,
    update,
    remove,
};