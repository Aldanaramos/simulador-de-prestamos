    
        function calcularMontoTotal(montoPrestamo, tasaInteres, plazo) {
            let montoPrestamo = (montoPrestamo * tipoInteres * tiempo);
            return montoTotal;
        }
            // calcular el monto mensual a pagar 
            function CalcularMontoPagos(montoPrestamo, tasaInteres, plazo) {
                let montoMensual = monto * (tasaInteres / 12) / 1 - (1 + tasaInteres / 12 ) * (-plazo * 12);
            console.log("El monto mensual a pagar es:"+ montoMensual);
            return montoMensual;
            }
            // calcular el tipo de interes
            function CalcularTipoInteres(montoPrestamo, tasaInteres, plazo) {
                let (montoTotal - montoPrestamo) / (montoPrestamo * plazo);
                return tipoInteres;
            }
            // calcular el plazo
            function calcularTiempo (montoTotal, montoPrestamo, tipoInteres) {
                let (montoTotal / montoPrestamo) / (1 + tipoInteres);
                return tiempo;
            }
            // arrays y objetos

            const simuladorPrestamos = {
                id:1, 
                monto: 10000,
                plazo: 12,
                interes: 10,
                tipoInteres:"fijo",
                pagoMensual: 0,
                totalInteres: 0,
                totalPagar: 0
        

            }
            const simuladorPrestamo = {
                monto: 20000,
                plazo: 24,
                interes: 12,
                tipoInteres: "variable",
                pagoMensual: 0,
                totalInteres: 0,
                totalPagar:0
                
            }

            // solicitar informacion al usuario
            let montoPrestamo = prompt ("ingrese el monto del prestamo:");
            let tasaInteres = prompt ( " ingrese la tasa de interes anual (%):");
            let plazoPrestamo = prompt ( "ingrese el plazo del prestamo (meses o años):");
            let tipoPlazo = prompt ("ingrese el tipo de plazo (meses/años):");
            
            // convertir la tasa de interes a decimal
            tasaInteres = tasaInteres / 100
            



            







                
        




