const BasePathConstant = '/api/v1';

const ControllerConstant = {
    App: `${BasePathConstant}/app`,
    Address: `${BasePathConstant}/address`,
    Authentication: `${BasePathConstant}/auth`,
    Role: `${BasePathConstant}/role`,
    User: `${BasePathConstant}/user`,
};

const CommonMethodConstant = {
    GetAll: '/',
    GetByName: '/:name',
    GetByNameId: '/:name/:id',
    GetById: '/:id',
    Create: '/',
    Update: '/:id',
    Delete: '/:id',
    Login: '/login',
};

module.exports = {
    CommonMethodConstant,
    ControllerConstant,
};