const btnBorrar = document.getElementById('btnBorrar');
btnBorrar.addEventListener('click', function(){
    (document.getElementById('entradas')).reset();
});

function Precio(){
    let cantidad = parseInt(document.getElementById("cantidadTickets".value));
    let costo; 
    let precio = parseFloat(200);
    let precioEstudiante = Number(40);
    let precioTrainee = Number(100);
    let precioJunior = Number(170);
    let cat = document.getElementById(categoria);

    if(cantidad>0){
        switch(cat){
            case "estudiante":
                costo = parseInt(cantidad) * parseInt(precioEstudiante);    //precio con descuento de Estudiante
                break;
            case "trainee": 
                costo = parseInt(cantidad) * parseInt(precioTrainee);   //precio con descuento de Trainee
                break;
            case "junior":
                costo = parseInt(cantidad) * parseInt(precioJunior);    //precio con descuento de Junior
                break;
            default:
                costo = parseInt(cantidad) * (precio);      //precio sin ningun descuento
        }
    }
    total.innerHTML = "Total a Pagar: $ " + costo;
};

document.getElementById("btnResumen").onclick = Precio;



