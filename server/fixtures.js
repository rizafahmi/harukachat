var students = Students.find();

if (students.count() < 1) {
  // TODO: THis is only temporary url
  var url = "http://117.54.8.205:8080/home/api/get_students";
  var queryAPI = function () {
    HTTP.get(url, function (error, result) {
      if (result) {
        console.log("Insert student");
        var data = JSON.parse(result.content);
        console.log(data.length);
        for (i=0; i< data.length; i++)
          Students.insert(data[i]);
      }
      else {
        console.log(error);
      }
    });
  };

  queryAPI();

}
