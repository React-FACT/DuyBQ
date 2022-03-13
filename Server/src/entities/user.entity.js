const { BaseEntity } = require('./bases/base.entity');
const { Sequelize } = require('sequelize');

class User extends BaseEntity {
    username = { type: Sequelize.STRING(250) };
    password = { type: Sequelize.STRING(250) };
    email = { type: Sequelize.STRING(250) };
    birthDate = { type: Sequelize.DATE };
    firstName = { type: Sequelize.STRING(300) };
    lastName = { type: Sequelize.STRING(300) };
    isAdmin = { type: Sequelize.INTEGER };
    isActive = { type: Sequelize.INTEGER };
    phone = { type: Sequelize.STRING(30) };
    firstLogin = { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false };
    lastLogin = { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false };
    addressDes = { type: Sequelize.STRING(1000) };
    note = { type: Sequelize.STRING(1000) };
    countryId = { type: Sequelize.INTEGER };
    provinceId = { type: Sequelize.INTEGER };
    districtId = { type: Sequelize.INTEGER };
    wardId = { type: Sequelize.INTEGER };
}
module.exports = { User };