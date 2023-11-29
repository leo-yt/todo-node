'use strict';

const { Controller } = require('egg');

class TasksController extends Controller {
  async findAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.tasks.findAll(ctx.query.user_id);
  }
  async findById() {
    const { ctx } = this;
    ctx.body = await ctx.service.tasks.findById(ctx.params.id);
  }
  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.tasks.create(ctx.request.body);
  }
  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.tasks.update(ctx.request.body);
  }
  async delete() {
    const { ctx } = this;
    ctx.body = await ctx.service.tasks.delete(ctx.params.id);
  }
}

module.exports = TasksController;
