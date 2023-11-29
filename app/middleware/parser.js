const { toCamelCase, omit } = require('../util');

module.exports = () => {
  // TODO
  return async (ctx, next) => {
    await next();
    const { data, code } = ctx.response.body;
    let _data = data;
    if (code === 200 && data) {
      if (Array.isArray(data)) {
        _data = data.map(toCamelCase).map(item => omit(item, ['isDeleted']));
      } else if (Object.keys(data).length > 0) {
        _data = omit(toCamelCase(data), ['isDeleted']);
      }
      ctx.response.body = {
        code: 200,
        data: _data,
        msg: 'success',
      };
    }
  };
};
