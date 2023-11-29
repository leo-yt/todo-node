'use strict';

const { Controller } = require('egg');

class UsersController extends Controller {
  async findAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.users.findAll();
  }
  async findById() {
    const { ctx } = this;
    ctx.body = await ctx.service.users.findOne(ctx.params.id);
  }
  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.users.create(ctx.request.body);
  }
  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.users.update(ctx.request.body);
  }
}

module.exports = UsersController;
