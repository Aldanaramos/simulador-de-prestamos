document.getElementById("title")

    //sweetAlert

    Swal.fire({
        title: "Bienvenido a la simulacion de prestamo",
        text: "Ingrese los datos",
        icon: "info"
      });



            const resultado = document.getElementById(`resultado`)
            
            function CalcularMontoPagos(montoPrestamo, tasaInteres, plazo) {
                let tasaMensual = tasaInteres / 12;
                let numeroPagos = plazo * 12;
                let montoMensual = montoPrestamo * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos))
                            return montoMensual;
            }

            function calcularMontoPagos(prestamo) {
                let tasaMensual = (prestamo.interes / 100) / 12;
                let numeroPagos = prestamo.plazo;
                if (prestamo.interes === `fijo` || prestamo.tipoInteres === `variable`){
                    prestamo.pagoMensual = prestamo.monto * tasaMensual / (1 - Math.pow(1 + tasaMensual - numeroPagos));

                } else{
                prestamo.pagoMensual = prestamo.monto * tasaMensual * Math.pow(1 + tasaMensual , numeroPagos) 
                / (Math.pow(1 + tasaMensual , numeroPagos)- 1);
                }
                prestamo.totalPagar = prestamo.pagoMensual * numeroPagos;
                prestamo.totalInteres = prestamo.totalPagar - prestamo.monto;
            }

             // Filter
             const pres=[
                {tipoInteres:"fijo"},
                {tipoInteres:"variable"}
             ]
            

             const prestamoFijos = pres.filter((prestamos) => prestamos.tipoInteres === "fijo")
             const prestamoVariables = pres.filter((prestamos) => prestamos.tipoInteres === "variable")

              
            // definir montoRestante con el valor inicial del monto del prestamo

            
            const resultadoElement = document.getElementById(`resultado`);
            const iniciar = document.getElementById(`iniciar`);


            let prestamo={monto:1000}
            let montoRestante = prestamo?.monto;
            let pagosRealizados = 0;

                const intervalid = setInterval(function(){
                    if (montoRestante > 0){
                        montoRestante -= pres.pagoMensual;
                        pagosRealizados++;
                     } else {
                        clearInterval(intervalid);
                    }; 1000; //actualizar cada un segundo
                });


                // solicitar informacion al usuario

                const form = document.getElementById(`formulario-simulacion`);
                const simular = document.getElementById(`simulacion`);
                
                form.addEventListener(`submut`, (e) =>{
                    // codigo para manejar el evento de envio del formulario

                });

                // <!-- JSON -->

                let prestamos= document.getElementById("prestamos")

                fetch("./db/data.json")
                .then(response => response.json())
                .then(data => {
                    const fragment= document.createElement("div");
                    data.forEach(simulaciones =>{
                        const card = document.createElement("div")
                        card.innerHTML = `<h2>Monto:${simulaciones.monto}</h2>
                                          <h3>Plazo:${simulaciones.plazo}</h3>
                                          <h4>Interes:${simulaciones.interes}</h4>`
                                        
                                          fragment.appendChild(card)
                                        })
                                    
                                    })               
