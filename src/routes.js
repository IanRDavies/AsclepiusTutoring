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
	})
	.state("about", {
		url: "/about",
		templateUrl: "src/templates/about.template.html"
	})
	.state("ourServices", {
		url: "/our-services",
		templateUrl: "src/templates/services.template.html"
	})
	.state("contactUs", {
		url: "/contact-us",
		templateUrl: "src/templates/contact.template.html"
	});
};

})();