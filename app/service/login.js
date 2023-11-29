const { ResponseError, ResponseSuccess } = require('../util');
const Service = require('egg').Service;
const invariant = require('invariant');

class LoginService extends Service {
  async register(params) {
    try {
      invariant(params.user_name, 'user_name is required');
      invariant(params.password, 'password is required');
      invariant(params.password.length >= 6, 'password min length is 6');
      const user = await this.app.mysql.get('users', { user_name: params.user_name });
      if (user) {
        return ResponseError('user_name already exist');
      }
      const result = await this.app.mysql.insert('users', params);
      const createSuccess = result.affectedRows === 1;
      return ResponseSuccess(createSuccess);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async login(params) {
    try {
      invariant(params.user_name, 'user_name is required');
      invariant(params.password, 'password is required');
      const users = await this.app.mysql.get('users', { user_name: params.user_name });
      if (!users) {
        return ResponseError('user_name not exist');
      }
      if (users.password === params.password) {
        return ResponseSuccess(users);
      }
      return ResponseError('password error');
    } catch (e) {
      return ResponseError(e);
    }
  }
}

module.exports = LoginService;
