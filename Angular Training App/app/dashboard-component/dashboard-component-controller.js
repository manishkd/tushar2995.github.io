var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){

    $scope.todoName="";
    $scope.todoDesc="";
    $scope.todoList=[];
    $scope.open=false;
    $scope.addData = function(){

        $scope.todo = {};
        $scope.todo.name = $scope.todoName;
        $scope.todo.desc = $scope.todoDesc;
        $scope.todo.checked=false;
        $scope.todoList.push($scope.todo);
    }

    $scope.delete=function(i){
        $scope.todoList.splice(i,1);
        document.getElementById("descPara").innerHTML="NO DESCRIPTION";

    }
    $scope.showDesc=function(i){
        if($scope.todoList[i].desc!=null && $scope.todoList[i].desc!=undefined && $scope.todoList[i].desc!="")
            document.getElementById("descPara").innerHTML=$scope.todoList[i].desc;
        else
            document.getElementById("descPara").innerHTML="NO DESCRIPTION";    


    }
    $scope.strike=function(i){
        if(todoList[i].checked_status==true)
            document.getElementById("title")
    }
    
});