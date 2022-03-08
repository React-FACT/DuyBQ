const { BaseService } = require('./base/base.service');
const { UserRepository } = require('../repositories/user.repository');
const logger = require('../logger/winston.logger');
const { ResponseDto } = require('../dtos/response.dto');

class UserService extends BaseService {
    _userRepos;
    constructor() {
        let userRepos = new UserRepository();
        super(userRepos);
        this._userRepos = userRepos;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }

    tryMethod = async(email) => {
        logger.info(`==================== ${this.constructor.name}, call method test ====================`);
        let responseDto = new ResponseDto();
        let result = await this._userRepos.repos.findOne({
            where: {
                email: {
                    [this._userRepos._ops.like]: `%${email}`,
                },
            },
        });
        responseDto.results = result;
        return responseDto;
    };

    login = (payload) => {
        let { email, password } = payload;
        logger.info(`====================  PASSPORT JWT , call method verify Passport JWT ====================`);
        let isLogin = this._userRepos.repos.findOne({
            where: {
                [this._userRepos._ops.and]: [{
                        email: {
                            [this._userRepos._ops.eq]: email,
                        },
                    },
                    { password: password },
                ],
            },
        });
        console.log(isLogin);
    };

    verifyAuthByUser = (id) => {
        logger.info(`====================  PASSPORT JWT , call method verify Passport JWT ====================`);
        let verify = this._userRepos.repos.findOne({ where: { id: id }, attributes: { exclude: ['password'] } });
        //sign token JWT
        return verify.length > 0 ? { isLoggedIn: true, user: verify } : { isLoggedIn: false, user: verify };
    };

    getAllByQuery = async() => {
        let query = await this._userRepos.repos.sequelize
            .query('SELECT * FROM user', {
                raw: true,
                nest: true,
            })
            .then((r) => r);
        let responseDto = new ResponseDto();
        responseDto.results = query;
        return responseDto;
    };

    createByQuery = async(entity) => {
        let query = await this._userRepos.repos.sequelize
            .query('INSERT INTO user (username,email,password) VALUES(?, ? , ?)', {
                replacements: [entity['username'], entity['email'], entity['password']],
                type: this._userRepos.repos.sequelize.QueryTypes.INSERT,
            })
            .then((r) => r);
        let responseDto = new ResponseDto();
        responseDto.results = query;
        return responseDto;
    };
}
module.exports = { UserService };