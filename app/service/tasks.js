const { ResponseError, ResponseSuccess } = require('../util');
const Service = require('egg').Service;
const invariant = require('invariant');

class TasksService extends Service {
  async findAll(user_id) {
    try {
      invariant(user_id, 'user_id is required');
      const result = await this.app.mysql.select('tasks', { where: { user_id } });
      return ResponseSuccess(result);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async findById(id) {
    try {
      invariant(id, 'id is required');
      const result = await this.app.mysql.get('tasks', { id });
      return ResponseSuccess(result);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async create(params) {
    try {
      invariant(params.name, 'name is required');
      invariant(params.user_id, 'user_id is required');
      const result = await this.app.mysql.insert('tasks', params);
      const createSuccess = result.affectedRows === 1;
      return ResponseSuccess(createSuccess);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async update(params) {
    try {
      invariant(params.id, 'id is required');
      const result = await this.app.mysql.update('tasks', params);
      const updateSuccess = result.affectedRows === 1;
      return ResponseSuccess(updateSuccess);
    } catch (e) {
      return ResponseError(e);
    }
  }
  async delete(id) {
    try {
      invariant(id, 'id is required');
      const result = await this.app.mysql.delete('tasks', { id });
      const updateSuccess = result.affectedRows === 1;
      return ResponseSuccess(updateSuccess);
    } catch (e) {
      return ResponseError(e);
    }
  }
}

module.exports = TasksService;
