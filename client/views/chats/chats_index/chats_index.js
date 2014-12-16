/*****************************************************************************/
/* ChatsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ChatsIndex.events({
  'submit .chatForm': function (e, tmpl) {
    e.preventDefault();

    var text = $(e.target).find('[name=text]').val();
    var userId = Session.get('userId');
    var courseId = Session.get('courseId');

    Chats.insert({text: text,
      userId: userId,
      courseId: courseId,
      dateCreated: new Date()
    });

    $(e.target).find('[name=text]').val("");

  }
});

Template.ChatsIndex.helpers({
  'usersList': function () {
    return CurrentRoom.find();
  },
  'chats': function () {
    return Chats.find();
  }
});

/*****************************************************************************/
/* ChatsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ChatsIndex.created = function () {
};

Template.ChatsIndex.rendered = function () {
};

Template.ChatsIndex.destroyed = function () {
};
