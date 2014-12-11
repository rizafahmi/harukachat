/*****************************************************************************/
/* ChatsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ChatsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ChatsIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  'usersList': function () {
    return CurrentRoom.find();
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
