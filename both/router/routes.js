/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/

Router.route('/', {name: 'home'});
Router.route('/student/:user_id/:course_id', {name: 'rooms.index'})
Router.route('/', {name: 'chats.index'});
