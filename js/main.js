    
        function calcularMontoTotal(montoPrestamo, tasaInteres, plazo) {
            //convertir la tasa de interes de porcentaje a decimal
            tasaInteres = tasaInteres / 100 ;
            //calcular el monto total del prestamo
            montoTotal = montoPrestamo * (1 + tasaInteres * plazo)
                return montoTotal
        }

