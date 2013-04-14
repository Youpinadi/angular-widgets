angular.module('components',[])
    .directive('simpleProgress', function(){
        return{
            restrict: 'E',
            replace: true,
            scope:{
                label: '@',
                percent: '@',
                value: '@',
                warning: '@',
                danger: '@'
            },
            controller: function($scope, $element) {
                $scope.barClass = function() {
                    if (!$scope.danger && !$scope.warning)
                    {
                        return 'info';
                    }
                    if (parseInt($scope.percent, 10) > parseInt($scope.danger, 10))
                    {
                        return 'danger';
                    }
                    if (parseInt($scope.percent, 10) > parseInt($scope.warning, 10))
                    {
                        return 'warning';
                    }
                    return 'success';
                }
            },
            template: '<div class="smart-gauge" ng-class="{\'with-label\': label}"><span class="btn btn-mini" ng-show="label">{{ label }}</span><div class="progress"><div class="bar bar-{{ barClass() }}" style="width: {{ percent }}%;"></div><div class="info"><b>{{ value }}</b> ({{ percent }}%)</div></div></div>'
        }
    });
;