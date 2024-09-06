let montoPrestamo,plazoPrestamo,tipoPlazo,tasaInteres


 //try-catch-finally
try{
     montoPrestamo= parseFloat(document.getElementById("montoPrestamo").value);
     plazoPrestamo= parseInt(document.getElementById("plazoPrestamo").value);
     tasaInteres= calcularTasaInteres(montoPrestamo,plazoPrestamo);
     tipoPlazo = document.getElementById(`tipoPlazo`).value;
    if (montoPrestamo<1000){
        throw new error ("el monto del prestamo debe ser mayor a $1000")

    }
    
    } catch(error){
    //manejo del error
    mensajeError= error.message
};
if (montoPrestamo && tasaInteres && plazoPrestamo && tipoPlazo) {
    const esAnual1 = tipoPlazo === `años`;
    const factorPlazo = esAnual1 ? 1 : 12;
    const montoTotal = montoPrestamo * (1 + (tasaInteres / 100 ) * ( plazoPrestamo / factorPlazo));
    const cuotaMensual = montoTotal / ( plazoPrestamo * factorPlazo);

    const resultadoElement= document.getElementById(`resultado`
       
    )
   
    const h2Element = document.createElement(`h2`);
    h2Element.textContent = `resultado:`;
    resultadoElement.appendChild(h2Element)


    const pElement1 = document.createElement(`p`);
    pElement1.textContent = `tasa de interes anual:`+ tasaInteres + `%`;
    resultadoElement.appendChild(pElement1)

    const pElement2 = document.createElement(`p`);
    pElement2.textContent = `plazo del prestamo:` + plazoPrestamo + `` + tipoPlazo;
    resultadoElement.appendChild(pElement2)

    const pElement3 = document.createElement(`p`);
    pElement3.textContent = `cantidad total a pagar:$` + montoTotal.toFixed(2);
    resultadoElement.appendChild(pElement3)

    const pElement4 = document.createElement(`p`);
    pElement4.textContent = `cuota mensual:$${cuotaMensual.toFixed(2)}`;
    resultadoElement.appendChild(pElement4)
} 

const mensaje = document.getElementById(`mensaje`);

if (!montoPrestamo || !tasaInteres || !plazoPrestamo || !tipoPlazo){

} else {
    //codigo para mostrar el resultado
};

// localStorage: guardar datos de la simulacion de prestamos
localStorage.setItem(`montoPrestamo`,montoPrestamo);
localStorage.setItem(`tasaIntres`,tasaInteres);
localStorage.setItem(`plazoPrestamo`,plazoPrestamo)