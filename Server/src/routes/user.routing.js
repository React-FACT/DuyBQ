const express = require('express');
const UserRouting = express.Router();
const { getAll, getById, create, update, remove } = require('../controllers/user.controller');
const { CommonMethodConstant, ControllerConstant } = require('../constants/api.constant');

UserRouting.use(express.json());

UserRouting.post(CommonMethodConstant.Create, create);
UserRouting.put(CommonMethodConstant.Update, update);
UserRouting.delete(CommonMethodConstant.Delete, remove);
UserRouting.get(CommonMethodConstant.GetById, getById);
UserRouting.get(CommonMethodConstant.GetAll, getAll);

module.exports = { UserRouting };