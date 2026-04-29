angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {
    console.log('Controlador');

    $scope.mensaje1 = "Hola soy una variable desde controlador";

    $scope.ctrlBoton = () => {
        alert($scope.mensaje1);
    }

     $scope.formrutas= {
        fechaInicio: null,
        fechaFin: null,
        proveedor: null,
        auto: null,
        driver: null,
        idruta: null
    };

        $scope.guardarRuta = () => {
        console.log($scope.formrutas);
        }
    



}

