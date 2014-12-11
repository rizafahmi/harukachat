ChatsIndexController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    console.log("A");
  },

  action: function () {
    this.render();
  }
});
