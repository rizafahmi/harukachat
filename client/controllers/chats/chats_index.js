ChatsIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('current_room');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
