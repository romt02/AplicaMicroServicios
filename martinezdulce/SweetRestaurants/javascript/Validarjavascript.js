function validar(id) {
    var elemento = document.getElementById(id);
    if (elemento.checkValidity()) {
        elemento.style.borderColor = "blue";

    } else {
        elemento.style.borderColor = "blue";
    }

}

function aceptarValidar(edadBuena, promBuena, ingBuena, hermBuea, folBuena) {
    var edadBuena = document.getElementById('edad').value;
    var promBuena = document.getElementById('promedio').value;
    var ingBuena = document.getElementById('ingreso').value;
    var hermBuea = document.getElementById('hermanos').value;
    var folBuena = document.getElementById('folio').value;

    if (edadBuena > 15 && edadBuena< 46) {
        if (promBuena >= 80 && promBuena <= 85) {
            if ( ingBuena >= 0 && ingBuena <= 7000) {
                if (folBuena === '12345' || folBuena === '67890' || folBuena === '98765') {

                    alert("Su solicitud de beca se a procesado correctamente")

                } else {

                    alert("Su solicitud a sido bloqueada")  
                }

            } else {

                alert("No se pudo proceasr su solicitud verifique sus datos")

            }

        } else {
            alert("No se pudo proceasr su solicitud verifique sus datos")


        }

    } else {
        alert("No se pudo proceasr su solicitud verifique sus datos")


    }

}

function aceptarValidarmb(edadBuena, promBuena, ingBuena, hermBuea, folBuena) {
    var edadBuena = document.getElementById('edad').value;
    var promBuena = document.getElementById('promedio').value;
    var ingBuena = document.getElementById('ingreso').value;
    var hermBuea = document.getElementById('hermanos').value;
    var folBuena = document.getElementById('folio').value;

    if (edadBuena > 15 && edadBuena< 46) {
        if (promBuena >= 86 && promBuena <= 95) {
            if ( ingBuena >= 0 && ingBuena <= 7000) {
                if (folBuena === '12345' || folBuena === '67890' || folBuena === '98765') {

                    alert("Su solicitud de beca se a procesado correctamente")

                } else {

                    alert("Su solicitud a sido bloqueada")  
                }

            } else {

                alert("No se pudo proceasr su solicitud verifique sus datos")

            }

        } else {
            alert("No se pudo proceasr su solicitud verifique sus datos")


        }

    } else {
        alert("No se pudo proceasr su solicitud verifique sus datos")


    }

}

function aceptarValidarex(edadBuena, promBuena, ingBuena, hermBuea, folBuena) {
    var edadBuena = document.getElementById('edad').value;
    var promBuena = document.getElementById('promedio').value;
    var ingBuena = document.getElementById('ingreso').value;
    var hermBuea = document.getElementById('hermanos').value;
    var folBuena = document.getElementById('folio').value;

    if (edadBuena > 15 && edadBuena< 46) {
        if (promBuena >= 96 && promBuena <= 100) {
            if ( ingBuena >= 0 && ingBuena <= 7000) {
                if (folBuena === '12345' || folBuena === '67890' || folBuena === '98765') {
                    if (hermBuea > 1 && hermBuea < 15){
                    alert("Su solicitud de beca se a procesado correctamente")
                    }else{
                        alert("No se pudo proceasr su solicitud verifique sus datos")  
                    }

                } else {

                    alert("Su solicitud a sido bloqueada")  
                }

            } else {

                alert("No se pudo proceasr su solicitud verifique sus datos")

            }

        } else {
            alert("No se pudo proceasr su solicitud verifique sus datos")


        }

    } else {
        alert("No se pudo proceasr su solicitud verifique sus datos")


    }
}