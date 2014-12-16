ChatsIndexController = RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('current_room'),
      Meteor.subscribe('chats_index')
    ];
  },

  data: function () {
    Session.set('userId', this.params.user_id);
    Session.set('courseId', this.params.course_id);
    return Chats.find();
  },

  action: function () {
    this.render();
  }
});
