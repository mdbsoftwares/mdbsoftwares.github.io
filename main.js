var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ngRoute']);
// http://codepen.io/kyleledbetter/pen/gbQOaV
// https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
app.controller('AppCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$location', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $location) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.apps = allApps

    $scope.menu = [
        {
            link: '#/apps',
            title: 'All apps',
            icon: 'dashboard'
        },
        {
            link: '#/apps/popular',
            title: 'popular',
            icon: 'stars'
        }
    ];

    $scope.admin = [
        {
            link: '#/about',
            title: 'About',
            icon: 'about'
        },
        {
            link: 'http://mdb-softwares.blogspot.fr/',
            title: 'Blog',
            icon: 'computer'
        },
        {
            link: 'mailto:mdbsoftwares@gmail.com',
            title: 'Contact',
            icon: 'email'
        }
    ];

}]);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/apps', {
            templateUrl: 'pages/home/home.html',
            controller: 'homeController'
        })
        .when('/apps/:popular', {
            templateUrl: 'pages/home/home.html',
            controller: 'homeController'
        })
        .when('/details/:app', {
            templateUrl: 'pages/details/details.html',
            controller: 'detailsController'
        })
        .when('/about', {
            templateUrl: 'pages/about/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        }).otherwise({redirectTo: '/apps'});;
});


app.config(function ($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('grey');
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});
