

    const Calcular = document.getElementById(`calcular`);
    const resultadoTiempo = document.getElementById(`calcularResultado`);
    const tipoInteres = document.getElementById(`tipoInteres`);
    const montoTotal = parseFloat(localStorage.getItem(`montoPrestamo`,montoPrestamo));


    calcular.addEventListener(`click`, function(event){
        event.preventDefault();
        const tiempo = calcularTiempoPrestamo(montoTotal, montoPrestamo, tipoInteres)             
    });
    function calcularTiempoPrestamo (montoTotal, montoPrestamo, tipoInteres) {
        const tiempo = (montoTotal / montoPrestamo) / (1 + tipoInteres);
        return tiempo;
    }

