    
        function simuladorPrestamos(montoPrestamos,tasaInteres,plazo) {
            let total = 0;
            for (let i = 0; i < plazo; i++)
            
        {
                let interes = montoPrestamo * (tasaInteres / 100);
                let cuota = montoPrestamo / plazo;
                total += cuota + interes;
                montoPrestamo -= cuota;
                console.log (`total a pagar:${total.toFixed(2)}`);
            }       

            return total;
        }
        
            // calcular el monto mensual a pagar 
            function CalcularMontoPagos(montoPrestamo, tasaInteres, plazo) {
                let tasaMensual = tasaInteres / 12;
                let numeroPagos = plazo * 12;
                let montoMensual = montoPrestamo * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos))
            console.log("El monto mensual a pagar es:"+ montoMensual.toFixed(2));
            return montoMensual;
            
            }
            // calcular el tipo de interes
            function CalcularTipoInteres(montoPrestamo,montoTotal,plazo) {
                let tipoInteres =  (montoTotal - montoPrestamo) / (montoPrestamo * plazo);
                console.log ("El tipo de interes es:" + tipoInteres.toFixed(2));
                return tipoInteres;
            }
            // calcular el plazo
            function calcularTiempo (montoTotal, montoPrestamo, tipoInteres) {
                let tiempo = (montoTotal / montoPrestamo) / (1 + tipoInteres);
                console.log ("El plazo es:"+ tiempo.toFixed(2))
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

        function calcularMontoPagos(prestamo) {
            let tasaMensual = (prestamo.interes / 100) / 12;
            let numeroPagos = prestamo.plazo;
            prestamo.pagoMensual = prestamo.monto * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos));
            prestamo.totalPagar = prestamo.pagoMensual * numeroPagos;
            prestamo.totalInteres = prestamo.totalPagar - prestamo.monto;
            
        }
        
        calcularMontoPagos (simulacion);
        console.log("simulacion");
            
            const sim = {
                id:1,
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
                prestamo.pagoMensual = prestamo.monto * tasaMensual * Math.pow (1 + tasaMensual, numeroPagos) / (Math.pow(1 + tasaMensual,numeroPagos) - 1);
                prestamo.totalPagar = prestamo.pagoMensual * numeroPagos;
                prestamo.totalInteres = prestamo.totalPagar - prestamo.monto;
            }

            calcularMontoPagos (sim);
            console.log ("sim");
            // definir montoRestante con el valor inicial del monto del prestamo

            let montoRestante = sim.monto;
            let pagosRealizados = 0;
        

            while (montoRestante > 0) {
                montoRestante -= sim.pagoMensual;
                pagosRealizados++;
                console.log (`Pago ${pagosRealizados} : montoRestante $${montoRestante.toFixed(2)}`)


                }

                // solicitar informacion al usuario

                let montoPrestamo = parseInt(prompt("ingrese el monto del prestamo:"));
                let tasaInteres = parseInt(prompt("ingrese la tasa de interes anual (%):"));
                let plazoPrestamo = parseInt(prompt("ingrese el plazo del prestamo (meses o años):"));
                let tipoPlazo =  prompt("ingrese el tipo de plazo (meses / años):");


                if (montoPrestamo && tasaInteres && plazoPrestamo && tipoPlazo) {
                    console.log ("completaste todas las opciones para simular el prestamo");
                    let montoTotal = montoPrestamo * (1 + (tasaInteres / 100 ) * (tipoPlazo === `años`? plazoPrestamo : plazoPrestamo / 12));
                    let cuotaMensual = montoTotal / (tipoPlazo === `años` ? plazoPrestamo * 12 : plazoPrestamo);
                    alert (`Atencion! al simular este prestamo ten en cuenta lo siguiente:
                        - La tasa de interes anual es del ${tasaInteres}%.
                        - El plazo del prestamo es de${plazoPrestamo} ${tipoPlazo}.
                        - La cantidad total a pagar sera de $${montoTotal.toFixed(2)}.
                        Estas seguro de continuar con la simulacion?`);
                    } else {
                        // cancelar la simulacion 
                        alert ("Lamentablemte no completaste todas las opciones");
                        
                    }

                
