(function (){
    'use strict';
    angular.module('myapp', [])
    .controller('mycontrol',myctrl);
    function myctrl($scope ,$filter,$injector){
        $scope.name=" ";
       $scope.count =function(string){
           var x= string.split(',');
           if (string==" ")
               return 0;
           else 
               return x.length;
          
       }
       $scope.msg = function (){
           
        if($scope.count($scope.name)==0)
            return "please enter word first";
        else if($scope.count($scope.name)<=3)
               return "enjoy";
           else
               return "too much";
       }
   
    
    };
})();