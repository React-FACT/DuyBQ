const express = require('express');
const AddressRouting = express.Router();
const { CommonMethodConstant } = require('../constants/api.constant');
const { getAll, getById, getByIdParent, create, update, remove } = require('../controllers/address.controller');

AddressRouting.use(express.json());
AddressRouting.post(CommonMethodConstant.GetByName, create); // address/:name/
AddressRouting.put(CommonMethodConstant.GetByNameId, update); // address/:name/:id
AddressRouting.delete(CommonMethodConstant.GetByNameId, remove); // address/:name/:id
AddressRouting.get(CommonMethodConstant.GetByNameId + 'parent/:id', getByIdParent); // address/:name/:id
AddressRouting.get(CommonMethodConstant.GetByNameId, getById); // address/:name/:id
AddressRouting.get(CommonMethodConstant.GetByName, getAll); // address/:name/

module.exports = { AddressRouting };