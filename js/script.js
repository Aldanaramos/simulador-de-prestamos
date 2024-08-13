    //getElementById


    let titulo = document.getElementById("Title")
    console.log(titulo)

    //getElementysByClassName
    

    const calcular = document.getElementById(`calcular`);
    const montoTotalElement = document.getElementById(`monto-total`);
    const prestamo = document.getElementById("prestamo");

    calcular.addEventListener ("click", function() {
        let total = 0 
        for (let i = 0; i < plazo; i++) {
            const montoPrestamo = parseFloat (prestamos [i]("input[type= `number`]").value);
            montoTotal += monto + (monto * interes / 100);
            const tasaInteres = parseFloat(document.getElementById(`tasaInteres`).value);
            const plazo = parseFloat(document.getElementById(`plazo`).value);
            const montoMensual = CalcularMontoPagos(montoPrestamo, tasaInteres, plazo);
        }
        montoTotalElement.innerHTML = montototal`${montoTotal.toFixed(2)}`
    });



            // calcular el monto mensual a pagar 
            const resultado = document.getElementById(`resultado`)
            calcular.addEventListener(`click`, function(event) {
                event.preventDefault();
                const montoPrestamo = parseFloat(document.getElementById(`montoPrestamo`).value);
                const tasaInteres = parseFloat(document.getElementById(`tasaInteres`).value);

                const montoMensual = CalcularMontoPagos(montoPrestamo, tasaInteres, plazo);
          })
            function CalcularMontoPagos(montoPrestamo, tasaInteres, plazo) {
                let tasaMensual = tasaInteres / 12;
                let numeroPagos = plazo * 12;
                let montoMensual = montoPrestamo * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos))
                return montoMensual;
            }


            // calcular el plazo

            const Calcular = document.getElementById(`calcular`);
            const resultadoTiempo = document.getElementById(`calcularResultado`);

            calcular.addEventListener(`click`, function(event){
                event.preventDefault();
                const montoTotal = parseFloat(document.getElementById(`montoTotal`).value);
                const montoPrestamo = parseFloat(document.getElementById(`montoPrestamo`).value);
                const tipoInteres = parseFloat(document.getElementById(`tipoInteres`).value);
                const tiempo = calcularTiempo (montoTotal, montoPrestamo, tipoInteres)       
                resultadoTiempo.innerHTML = ElTiempoes;{tiempo};      
            })
            function calcularTiempoPrestamo (montoTotal, montoPrestamo, tipoInteres) {
                let tiempo = (montoTotal / montoPrestamo) / (1 + tipoInteres);
                return tiempo;
            }


            // arrays y objetos


            const simulacion= {
                id:1, 
                monto: 10000,
                plazo: 12,
                interes: 10,
                tipoInteres:"fijo",
                pagoMensual: 0,
                totalInteres: 0,
                totalPagar: 0
            };
            
            calcularMontoPagos(simulacion);

        function calcularMontoPagos(prestamo) {
            let tasaMensual = (prestamo.interes / 100) / 12;
            let numeroPagos = prestamo.plazo;
            prestamo.pagoMensual = prestamo.monto * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos));
            prestamo.totalPagar = prestamo.pagoMensual * numeroPagos;
            prestamo.totalInteres = prestamo.totalPagar - prestamo.monto;
            
        }
        
            
            const sim = {
                id:2,
                monto: 20000,
                plazo: 24,
                interes: 12,
                tipoInteres: "variable",
                pagoMensual: 0,
                totalInteres: 0,
                totalPagar:0
                
            };

            function calcularMontoPagos(prestamo) {
                let tasaMensual = (prestamo.interes / 100) / 12;
                let numeroPagos = prestamo.plazo;
                if (prestamo.interes === `fijo`){
                    prestamo.pagoMensual = prestamo.monto * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos));

                } else{
                prestamo.pagoMensual = prestamo.monto * tasaMensual * Math.pow(1 + tasaMensual , numeroPagos) 
                / (Math.pow(1 + tasaMensual , numeroPagos)- 1);
                }
                prestamo.totalPagar = prestamo.pagoMensual * numeroPagos;
                prestamo.totalInteres = prestamo.totalPagar - prestamo.monto;
            }


            
            // definir montoRestante con el valor inicial del monto del prestamo

            
            const resultadoElement = document.getElementById(`resultado`);
            const iniciar = document.getElementById(`iniciar`);

            let montoRestante = sim.monto;
            let pagosRealizados = 0;
                resultadoElement.innerHTML = ""; //limpiar el contenido del elemento

                const intervalid = setInterval(function(){
                    if (montoRestante > 0){
                        montoRestante -= sim.pagoMensual;
                        pagosRealizados++;
                     } else {
                        clearInterval(intervalid);
                    }; 1000; //actualizar cada un segundo
                });

                

                // solicitar informacion al usuario

                const form= document.getElementById(`formulario-simulacion`);
                const simular = document.getElementById(`simulacion`);
                
                form.addEventListener(`submut`, (e) =>{
                    // codigo para manejar el evento de envio del formulario

                });


                const montoPrestamo = parseInt(document.getElementById(`montoPrestamo`).value);
                const tasaInteres = parseInt(document.getElementById(`tasaInteres`).value);
                const plazoPrestamo = parseInt(document.getElementById(`plazoPrestamo`).value);
                const tipoPlazo = document.getElementById(`tipoPlazo`).value


                if (montoPrestamo && tasaInteres && plazoPrestamo && tipoPlazo) {
                    const montoTotal = montoPrestamo * (1 + (tasaInteres / 100 ) * (tipoPlazo === `años`? plazoPrestamo : plazoPrestamo / 12));
                    const cuotaMensual = montoTotal / (tipoPlazo === `años` ? plazoPrestamo * 12 : plazoPrestamo);
                   
                    const h2Element = document.createElement(`h2`);
                    h2Element.textContent = `resultado:`;

                    const pElement1 = document.createElement(`p`);
                    pElement1.textContent = `tasa de interes anual:`+ tasaInteres + `%`;

                    const pElement2 = document.createElement(`p`);
                    pElement2.textContent = `plazo del prestamo:` + plazoPrestamo + `` + tipoPlazo;

                    const pElement3 = document.createElement(`p`);
                    pElement3.textContent = `cantidad total a pagar:$` + montoTotal.toFixed(2);

                    const pElement4 = document.createElement(`p`);
                    pElement4.textContent = `cuota mensual:$${cuotaMensual.toFixed(2)}`;

                    resultadoElement.innerHTML = ""
                    resultadoElement.appendChild(h2Element);
                    resultadoElement.appendChild(pElement1);
                    resultadoElement.appendChild(pElement2);
                    resultadoElement.appendChild(pElement3);
                    resultadoElement.appendChild(pElement4);
                } 

                const mensaje = document.getElementById(`mensaje`);

                if (!montoPrestamo || !tasaInteres || !plazoPrestamo || !tipoPlazo){
                   console.log("Lamentablmente no completaste todas las opciones");

                } else {
                    //codigo para mostrar el resultado
                }
                
                

                
