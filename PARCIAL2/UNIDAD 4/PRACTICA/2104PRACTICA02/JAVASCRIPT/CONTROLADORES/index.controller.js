angular.module("app").controller("index",index);

index.$inject =["$scope"];

function index ($scope) {
    console.log("controlador");

    $scope.mensaje1 ="Hola soy una variable desde controlador";
   $scope.mostrarMensaje = () => {
    alert($scope.mensaje1);
  }


}