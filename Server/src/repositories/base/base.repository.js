require('dotenv').config();
const { Sequelize, Op, where } = require('sequelize');
const logger = require('../../logger/winston.logger');

class BaseRepository {
    sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        define: {
            // timestamps: true,
            freezeTableName: true,
        },
    });
    repos; //var
    _ops = Op; // SET OP FOR WHERE CLAUSES
    // _entity;
    constructor(entity) {
        this.repos = this.sequelize.define(entity.constructor.name, {...entity });
        // this._entity = entity;
    }

    getAll = async() => {
        logger.info(`==================== ${this.constructor.name}, call method GetAll ====================`);
        return await this.repos.findAll({ returning: true });
    };

    getById = async(id) => {
        logger.info(`==================== ${this.constructor.name}, call method GetById ====================`);
        return await this.repos.findByPk(id).then((t) => t);
    };

    create = async(entity) => {
        logger.info(`==================== ${this.constructor.name}, call method Create ====================`);
        return await this.repos.create(entity, { returning: true });
    };

    update = async(entity) => {
        logger.info(`==================== ${this.constructor.name}, call method Update ====================`);
        let result = await this.repos.update(entity, { where: { id: entity.id }, returning: true });
        return entity;
    };

    delete = async(id) => {
        logger.info(`==================== ${this.constructor.name}, call method Delete ====================`);
        let result = await this.repos.destroy({ where: { id: id } }).then((t) => t);
        return result;
    };
}
module.exports = { BaseRepository };