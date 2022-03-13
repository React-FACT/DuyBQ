const { BaseRepository } = require('./base/base.repository');
const logger = require('../logger/winston.logger');
const { Country, Province, District, Ward } = require('../entities/address.entity');

class AddressRepository extends BaseRepository {
    _addressEntity;
    constructor(zone) {
        let AddressEntity = [Country, Province, District, Ward];
        let index = AddressEntity.findIndex((value) => value.name === zone);
        let addressEntity = new AddressEntity[index]();
        super(addressEntity);
        this._addressEntity = addressEntity;
    }
}
module.exports = { AddressRepository };