function MainCtrl($scope)
{
    $scope.errorLabel = '';


    $scope.randomValues = function()
    {
        var value = Math.floor(Math.random() * 100);
        $scope.error1 = {
            percent: value,
            value: value / 2
        };
        value = Math.floor(Math.random() * 100);
        $scope.error2 = {
            percent: value,
            value: value / 2
        };
        value = Math.floor(Math.random() * 100);
        $scope.error3 = {
            percent: value,
            value: value / 2
        };
    }

    $scope.randomValues();
    setInterval(function(){
        $scope.$apply(function(){
            $scope.randomValues();
        })
    }, 1500);


}

angular.module('MainApp', ['components']);
