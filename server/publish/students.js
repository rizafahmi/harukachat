/*****************************************************************************/
/* Students Publish Functions
/*****************************************************************************/

Meteor.publish('students', function () {
  // you can remove this if you return a cursor
  return Students.find();
});
