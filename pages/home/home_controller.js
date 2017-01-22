// create the controller and inject Angular's $scope
app.controller('homeController', function ($scope, $routeParams) {

    if ($routeParams.popular) {
        $scope.show_popular_only = true
        $scope.$parent.pageName = 'Popular apps';
    } else {
        $scope.show_popular_only = false
        $scope.$parent.pageName = 'Apps';
    }

    $scope.formatDownloads = function (downloads) {
        return downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    $scope.filterPopular = function (app) {
        return $scope.show_popular_only ? app.downloads > 350000 : true
    };
});
