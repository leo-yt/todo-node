function ResponseSuccess(data) {
  return {
    code: 200,
    data,
    msg: 'success',
  };
}

function ResponseError(msg) {
  return {
    code: 500,
    msg: msg.message ?? msg,
  };
}

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function omit(obj, keys) {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

function toCamelCase(obj) {
  const newObj = {};
  for (const str in obj) {
    if (/(?<!^)_/.test(str)) {
      let _str = str;
      _str = str.replace(/(_[a-z])/g, function(match) {
        return match.toUpperCase().replace('_', '');
      });
      newObj[_str] = obj[str];
    } else {
      newObj[str] = obj[str];
    }
  }
  return newObj;
}


module.exports = {
  ResponseSuccess,
  ResponseError,
  pick,
  omit,
  toCamelCase,
};
