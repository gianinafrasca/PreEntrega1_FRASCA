// PRE ENTREGA 1 - FRASCA GIANINA
// Simulador Interactivo para Compra de Entradas a Recitales

function calcularCuotaMensual(precioEntrada, cuotas, interes) {
    console.log("Detalle de cuotas a pagar: 🎟");
    for (let i = 1; i <= cuotas; i++) {
        console.log("CUOTA " + i + ": AR$" + (precioEntrada * interes) / cuotas);
    }
}

function simularCompraEntrada() {
    let tipoEntrada = prompt("Ingrese el tipo de entrada: CAMPO o PLATEA");
    let precioEntrada;

    if (tipoEntrada.toUpperCase() === "CAMPO") {
        precioEntrada = 70000;
        console.log("El precio de tu entrada es: 💲 " + precioEntrada);
    } else if (tipoEntrada.toUpperCase() === "PLATEA") {
        precioEntrada = 50000;
        console.log("El precio de tu entrada es: 💲 " + precioEntrada);
    } else {
        console.warn("El tipo de entrada ingresado no existe 🚫");
        return; 
    }

    let banco = prompt("¿Tiene tarjeta de crédito de Banco Patagonia? SI o NO");
    let interes;

    if (banco.toUpperCase() === "SI") {
        console.log("¡Tiene hasta 6 cuotas sin interés! 😊");
        interes = 1;
    } else {
        console.log("Puede pagar en hasta 6 cuotas con un interés del 15%");
        interes = 1.15;
    }

    let cantCuotas = parseInt(prompt("Ingrese cantidad de cuotas:"));

    calcularCuotaMensual(precioEntrada, cantCuotas, interes);
}

simularCompraEntrada();