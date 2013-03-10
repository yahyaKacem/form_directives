//#####Creating the directives object to hold all the directives##########
var directives = {};
//########################################################################
//###################START demo###########################################
directives.demo = function(){
  var template = '<div class="pull-left demo span5" ng-transclude></div>';
  var linker   = function(scope, element, attrs) {};
  return {
    scope:      {},
    replace:    true,
    restrict:   "EA",
    transclude: true,
    link:       linker,
    template:   template
  }
};
//###################END demo#############################################
//########################################################################
//###################START code###########################################
directives.code = function(){
  var template = '<pre ' +
                   'ng-transclude ' +
                   'class="pull-right span6 code"' +
                 '>' +
                 '</pre>';
  var linker   = function(scope, element, attrs) {};
  return {
    scope:      {},
    replace:    true,
    restrict:   "EA",
    transclude: true,
    link:       linker,
    template:   template
  }
};
//###################END code#############################################
//########################################################################
