'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/users', controller.users.findAll);
  router.get('/api/users/:id', controller.users.findById);
  router.post('/api/users/create', controller.users.create);
  router.post('/api/users/update', controller.users.update);

  router.get('/api/tasks', controller.tasks.findAll);
  router.post('/api/tasks/create', controller.tasks.create);
  router.post('/api/tasks/update', controller.tasks.update);
  router.delete('/api/tasks/:id', controller.tasks.delete);
  router.get('/api/tasks/:id', controller.tasks.findById);

  router.post('/api/login', controller.login.login);
  router.post('/api/register', controller.login.register);
};
