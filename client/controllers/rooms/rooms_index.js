RoomsIndexController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    Session.set('userId', this.params.user_id);
    Session.set('courseId', this.params.course_id);
  },

  action: function () {
    this.render();
  }
});
