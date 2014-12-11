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
  'click .enter': function (e, tmpl) {
    console.log("A");
    console.log(this.params.user_id);
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
