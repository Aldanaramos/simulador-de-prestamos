    
        function calcularMontoTotal(montoPrestamo, tasaInteres, plazo) {
            //convertir la tasa de interes de porcentaje a decimal
            tasaInteres = tasaInteres / 100 ;
            //calcular el monto total del prestamo
            montoTotal = montoPrestamo * (1 + tasaInteres * plazo)
            let monto = 10000; // monto del prestamo
            let tasaInteres = 0.05; // tasa de interes
            let plazo = 5; // plazo del prestamo en años
            console.log ("Monto del prestamo:" + monto);
            return montoTotal
        }


            // calculamos el monto mensual a pagar 
            function CalcularMontoPagos(montoPrestamo, tasaInteres, plazo) {
                let montoMensual = monto * (tasaInteres / 12) / 1 - (1 + tasaInteres / 12 ) * (-plazo * 12);
            console.log("El monto mensual a pagar es:"+ montoMensual);
            return montoMensual
            }

            

                
        




