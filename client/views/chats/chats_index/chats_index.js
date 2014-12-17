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
    $(".chat-content").scrollTop($(".chat-content")[0].scrollHeight);

  }
});

Template.ChatsIndex.helpers({
  'usersList': function () {
    return CurrentRoom.find();
  },
  'chats': function () {
    return Chats.find({}, {sort: {dateCreated: 1}});
  },
  'getName': function (id) {

    var user = Students.findOne({id: String(id)});
    if (user)
      return user.fullname;
    return "";
  },
  'getPhoto': function (id) {
    var baseUrl = "http://static.harukaedu.com/uploads/students/" + id + "/avatar/thumbs/";
    var user = Students.findOne({id: String(id)});
    if (user) {
      var image = user.image.split(".");

      return baseUrl + image[0] + "_70_70." + image[1];
    }
    return "";

  }
});

/*****************************************************************************/
/* ChatsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ChatsIndex.created = function () {
};

Template.ChatsIndex.rendered = function () {
  $(".chat-content").scrollTop($(".chat-content")[0].scrollHeight);
};

Template.ChatsIndex.destroyed = function () {
};
