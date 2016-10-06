(function() {
"use strict";

angular.module("TutoringApp")
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
function RoutesConfig($stateProvider, $urlRouteProvider){
	$urlRouteProvider.otherwise("/");

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "src/templates/home.template.html",
		controller: "WelcomeController as main"
	});
};

})();