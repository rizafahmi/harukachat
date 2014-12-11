RoomsIndexController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    Session.set('userId', this.params.user_id);
    Session.set('courseId', this.params.course_id);
    Log.insert({dateTime: new Date(),
      userId: this.params.user_id,
      courseId: this.params.course_id,
      logText: "Enter the room"
    });
  },

  action: function () {
    this.render();
  }
});
