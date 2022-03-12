const express = require('express');
const UserRouting = express.Router();
const { getAll, getById, create, update, remove } = require('../controllers/user.controller');
const { CommonMethodConstant, ControllerConstant } = require('../constants/api.constant');
const passport = require('passport');
UserRouting.use(express.json());

UserRouting.post(CommonMethodConstant.Create, passport.authenticate('jwt', { session: false }), create);
UserRouting.put(CommonMethodConstant.Update, passport.authenticate('jwt', { session: false }), update);
UserRouting.delete(CommonMethodConstant.Delete, passport.authenticate('jwt', { session: false }), remove);
UserRouting.get(CommonMethodConstant.GetById, passport.authenticate('jwt', { session: false }), getById);
UserRouting.get(CommonMethodConstant.GetAll, passport.authenticate('jwt', { session: false }), getAll);

module.exports = { UserRouting };