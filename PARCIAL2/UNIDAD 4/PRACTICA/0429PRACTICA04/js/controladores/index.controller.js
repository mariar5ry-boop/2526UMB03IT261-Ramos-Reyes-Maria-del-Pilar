angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.formConsultaRuta = {
        fechaInicio: '',
        fechaFin: '',
        idProveedor: '',
        idAutomovil: '',
        idDriver: '',
        idRuta: '',
    }

    $scope.imprimirMensaje = () => {
        console.log($scope.formConsultaRuta);
    }
    $scope.optionEjemplo ={
        etiqueta: 'chevy', 
        valor:69
    }

    $scope.optionsAutos =[
        {
        etiqueta: 'Chevy', 
        valor:1
    },
    {
        etiqueta: 'Tornado', 
        valor:2
    },
    {
        etiqueta: 'Camaro', 
        valor:3
    },
    {
        etiqueta: 'Suburban', 
        valor:4
    }
    ];

    $scope.optionsDriver =[
        {
            etiqueta:'ConductorA',
            valor:1
        },

        {
            etiqueta: 'ConductorB',
            valor:2

        },

        {
            etiqueta: 'ConductorC',
            valor:3
        },

        {
            etiqueta:'ConductorD',
            valor:4
        }

    ];
     $scope.optionsProveedores =[
        {
            etiqueta:'ProveedorA',
            valor:1
        },

        {
            etiqueta: 'ProveedorB',
            valor:2

        },

        {
            etiqueta: 'ProveedorC',
            valor:3
        },

        {
            etiqueta:'ProveedorD',
            valor:4
        }
    ];


}

