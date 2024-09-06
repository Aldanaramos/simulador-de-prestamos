const plazo= document.getElementById(`plazo`)
            const interes=10
            const montoTotalElement=document.getElementById(`montoTotal`)

        calcular.addEventListener ("click", function() {
            const prestamo= parseFloat(document.getElementById(`prestamo`))
            const plazo=parseInt(document.getElementById(`plazo`).value)
            let montoTotal= 0;
            for (let i = 0; i < plazo; i++) {
                montoTotal += montoPrestamo + (montoPrestamo * interes / 100);
            }
                    montoTotalElement.textContent=
                    "Resultado:$${montoTotal.tofixed(2)"
            if(montoTotal===0||isNanN(montoTotal)){
                Swal.fire({
                    title: "Error",
                    text: "No se ha ingresado un valor valido",
                    icon: "error"
                  });
            } else{
                montoTotalElement.innerHTML=montoTotal
            }
                
        });