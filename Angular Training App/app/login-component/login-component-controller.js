var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        if(document.getElementById("username").value!=undefined && document.getElementById("username").value!=null
           && document.getElementById("username").value !="" ){
            localStorage.setItem("username",document.getElementById("username").value);
            localStorage.setItem("password",document.getElementById("password").value);
            $state.go('home.dashboard');
        }

        else{
            alert("enter valid username and password!!");
        }

    };
  });