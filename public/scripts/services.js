//########################################################################
//###################START Inputs#########################################
app.factory('Inputs', ['$http', function($http){
  var Url    = "partials/json_files/inputs.json";
  var Inputs = $http.get(Url).then(function(response){
     return response.data;
  });
  return Inputs;
}]);
//###################END Inputs###########################################
//########################################################################
