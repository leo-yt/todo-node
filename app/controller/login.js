'use strict';

const { Controller } = require('egg');

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    ctx.body = await ctx.service.login.register(ctx.request.body);
  }
  async login() {
    const { ctx } = this;
    ctx.body = await ctx.service.login.login(ctx.request.body);
  }
}

module.exports = LoginController;
