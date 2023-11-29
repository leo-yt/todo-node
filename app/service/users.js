const { ResponseError, ResponseSuccess, pick } = require('../util');
const Service = require('egg').Service;
const invariant = require('invariant');

class UsersService extends Service {
  async findAll() {
    try {
      const users = await this.app.mysql.select('users');
      return ResponseSuccess(users);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async findOne(id) {
    try {
      const user = await this.app.mysql.get('users', { id });
      return ResponseSuccess(user);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async create(params) {
    try {
      const options = pick(params, ['name']);
      invariant(options.name, 'name is required');
      const result = await this.app.mysql.insert('users', options);
      const createSuccess = result.affectedRows === 1;
      return ResponseSuccess(createSuccess);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async update(params) {
    try {
      const options = pick(params, ['name', 'id']);
      invariant(options.id, 'id is required');
      invariant(options.name, 'name is required');
      const result = await this.app.mysql.update('users', options);
      const updateSuccess = result.affectedRows === 1;
      return ResponseSuccess(updateSuccess);
    } catch (e) {
      return ResponseError(e);
    }
  }
}

module.exports = UsersService;
