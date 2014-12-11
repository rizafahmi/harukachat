/*****************************************************************************/
/* RoomsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.RoomsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .enterButton': function (e, tmpl) {
    Log.insert({dateTime: new Date(),
      userId: Session.get('userId'),
      courseId: Session.get('courseId'),
      logText: "Enter the room"
    });
    Router.go('chats.index', {user_id: Session.get('userId'), course_id: Session.get('courseId')});
  }
});

Template.RoomsIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* RoomsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.RoomsIndex.created = function () {
};

Template.RoomsIndex.rendered = function () {
};

Template.RoomsIndex.destroyed = function () {
};
