const { BaseEntity } = require('./bases/base.entity');
const { Sequelize } = require('sequelize');

class Country extends BaseEntity {
    name = { type: Sequelize.STRING(50) };
}
class Province extends BaseEntity {
    countryId = { type: Sequelize.INTEGER };
    name = { type: Sequelize.STRING(50) };
}
class District extends BaseEntity {
    provinceId = { type: Sequelize.INTEGER };
    name = { type: Sequelize.STRING(50) };
}
class Ward extends BaseEntity {
    districtId = { type: Sequelize.INTEGER };
    name = { type: Sequelize.STRING(50) };
}
module.exports = { Country, Province, District, Ward };