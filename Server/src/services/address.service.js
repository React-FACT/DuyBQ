const { BaseService } = require('./base/base.service');
const { AddressRepository } = require('../repositories/address.repository');
const { ResponseDto } = require('../dtos/response.dto');
const logger = require('../logger/winston.logger');

class AddressService extends BaseService {
    _addressRepos;
    constructor(zone) {
        let addressRepos = new AddressRepository(zone);
        super(addressRepos);
        this._addressRepos = addressRepos;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }

    getAddressByParentId = async(parentId, id) => {
        logger.info(`==================== ${this.constructor.name}, call method addressId ====================`);
        let responseDto = new ResponseDto();
        let field = {
            where: {
                [parentId]: id,
            },
        };
        let getList = await this._addressRepos.repos.findAll(field);
        responseDto.results = getList.length > 0 ? getList : [];
        return responseDto;
    };
}
module.exports = { AddressService };