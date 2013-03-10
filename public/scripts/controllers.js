//#####Creating the controllers object to hold all the controlles#########
var controllers = {};
//########################################################################
//###################START MainCtrl#######################################
controllers.MainCtrl = function($scope, Inputs){
  $scope.something = "Home";
  $scope.selected  = false;
  Inputs.then(function(data){
    $scope.nav_items = data;
  })
  $scope.activate  = function(elm){
    for(var i in $scope.nav_items){
      $scope.nav_items[i].active = "";
    }
    elm.active = "active";
  };
};
//###################END MainCtrl#########################################
//########################################################################
//###################START EmailCtrl######################################
controllers.EmailCtrl = function($scope) {
  $scope.something = "";
  
};
//###################END EmailCtrl########################################
//########################################################################
//###################START UrlCtrl########################################
controllers.UrlCtrl = function($scope) {
  $scope.something = "Urls";
};
//###################END UrlCtrl##########################################
//########################################################################
//###################START BtnCtrl########################################
controllers.BtnCtrl = function($scope) {
  $scope.something = "buttons";
};
//###################END BtnCtrl##########################################
//########################################################################
