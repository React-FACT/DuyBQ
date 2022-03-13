const { ControllerConstant } = require('../constants/api.constant');
const { AppRouting } = require('../routes/app.routing');
const { AuthenticationRouting } = require('../routes/authentication.routing');
const { RoleRouting } = require('../routes/role.routing');
const { UserRouting } = require('../routes/user.routing');
const { AddressRouting } = require('../routes/address.routing');
const registerController = (expr) => {
    expr.use(ControllerConstant.User, UserRouting);
    expr.use(ControllerConstant.App, AppRouting);
    expr.use(ControllerConstant.Address, AddressRouting);
    expr.use(ControllerConstant.Authentication, AuthenticationRouting);
    expr.use(ControllerConstant.Role, RoleRouting);
};

module.exports = {
    registerController,
};