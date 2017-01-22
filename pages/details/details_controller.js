app.controller('detailsController', function ($scope, $routeParams) {

    if ($routeParams.app) {
        appId = $routeParams.app

        $scope.downloads = 0
        $scope.apps.forEach(function (app) {
            if (app.id == appId) {
                $scope.app = app
            }
            $scope.downloads += app.downloads
        });
        console.log($scope.downloads)
    }

    if (!$scope.app) {
        console.log("ERROR : app is not defined")
    }

    console.log($scope.app)

    $scope.details_page = "pages/" + $scope.app.id + ".html";
    $scope.$parent.pageName = $scope.app.title;
});
