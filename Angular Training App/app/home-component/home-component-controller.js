var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };
    $scope.initials=localStorage.getItem("username");
    if($scope.initials != null && $scope.initials != undefined && $scope.initials != "" ){
        $scope.initials=$scope.initials.split('')[0].toUpperCase();
    }
});