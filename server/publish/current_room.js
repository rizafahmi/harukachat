/*****************************************************************************/
/* CurrentRoom Publish Functions
/*****************************************************************************/

Meteor.publish('current_room', function () {
  // you can remove this if you return a cursor
  return CurrentRoom.find();
});
