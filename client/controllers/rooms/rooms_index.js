RoomsIndexController = RouteController.extend({
  waitOn: function () {
    var currentRoom = Meteor.subscribe('current_room');
    return currentRoom;
  },

  data: function () {
    Session.set('userId', this.params.user_id);
    Session.set('courseId', this.params.course_id);
  },

  action: function () {
    this.render();
  }
});
