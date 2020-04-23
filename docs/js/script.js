var bandera; //variable para determinar si la comparación es correcta
var resultado; //variable de retorno de funciones

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); //Para poder hacer depuración de errores, previene la recarga de la página al completar form
    const cadena = document.getElementById("cadena").value;
    evaluar(cadena);
    console.log("Formulario enviado!");
    console.log("La cadena es: " + cadena);

    if (bandera == true) {
        alert("La cadena es válida.\nResultado: " + resultado);
    } else alert("La cadena es inválida");
});

function evaluar(MiCadena) {
    //N, encontrar caracter en N espacio
    if (MiCadena[0] == "N") {
        if (
            MiCadena[0] == "N" &&
            MiCadena[1] == "(" &&
            MiCadena[MiCadena.length - 1] == ")"
        ) {
            var indexcoma = MiCadena.indexOf(",");
            var subarray = MiCadena.slice(2, indexcoma);

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }

            if (bandera == true) {
                var EvalNum = parseInt(MiCadena[indexcoma + 1]);
                console.log(EvalNum + " a Int: " + Number.isInteger(EvalNum));
                if (Number.isInteger(EvalNum) == true) {
                    var numero = MiCadena[indexcoma + 1];
                    resultado = subarray[numero];
                    console.log("Indice de la coma: " + indexcoma);
                    console.log("Subarray: " + subarray);
                    console.log(
                        "Numero de indice a buscar en subarray: " + numero
                    );
                    var EvalNum = parseInt(MiCadena[indexcoma + 1]);
                    console.log("EvalNum= " + EvalNum);
                    console.log(
                        "Es " + EvalNum + " int? " + Number.isInteger(EvalNum)
                    );
                } else {
                    bandera = false;
                }
            } else {
                bandera = false;
            }
        } else {
            bandera = false;
        }
    } else if (MiCadena[0] == "L") {
        //función L Longitud
        if (
            MiCadena[0] == "L" &&
            MiCadena[1] == "(" &&
            MiCadena[MiCadena.length - 1] == ")"
        ) {
            var subarray = MiCadena.slice(2, MiCadena.length - 1);
            console.log("El subarray es: " + subarray);
            console.log("El tamaño del subarray es: " + subarray.length);

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }
            if (bandera == true) {
                resultado = subarray.length;
            }
        } else {
            bandera = false;
        }
    } else if (MiCadena[0] == "P") {
        //función P Primer
        if (
            MiCadena[0] == "P" &&
            MiCadena[1] == "(" &&
            MiCadena[MiCadena.length - 1] == ")"
        ) {
            var subarray = MiCadena.slice(2, MiCadena.length - 1);
            console.log("El subarray es: " + subarray);
            console.log("El tamaño del subarray es: " + subarray.length);
            console.log("El primer caracter del subarray es: " + subarray[0]);

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }
            if (bandera == true) {
                resultado = subarray[0];
            }
        } else {
            bandera = false;
        }
    } else if (MiCadena[0] == "F") {
        //función F Final
        if (
            MiCadena[0] == "F" &&
            MiCadena[1] == "(" &&
            MiCadena[MiCadena.length - 1] == ")"
        ) {
            var subarray = MiCadena.slice(2, MiCadena.length - 1);
            console.log("El subarray es: " + subarray);
            console.log("El tamaño del subarray es: " + subarray.length);
            console.log(
                "El último caracter del subarray es: " +
                    subarray[subarray.length - 1]
            );

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }
            if (bandera == true) {
                resultado = subarray[subarray.length - 1];
            }
        } else {
            bandera = false;
        }
    } else if (MiCadena[MiCadena.length - 2] == "*") {
        //función * multiplicar
        if (
            MiCadena[MiCadena.length - 2] == "*" &&
            MiCadena[MiCadena.length - 1] == "2"
        ) {
            var subarray = MiCadena.slice(0, MiCadena.length - 2);
            console.log("El subarray es: " + subarray);
            console.log("El tamaño del subarray es: " + subarray.length);
            console.log(
                "El último caracter del subarray es: " +
                    subarray[subarray.length - 1]
            );

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }
            if (bandera == true) {
                resultado = subarray.length * 2;
            }
        } else {
            bandera = false;
        }
    } else if (MiCadena[MiCadena.length - 2] == "/") {
        //función / dividir
        if (
            MiCadena[MiCadena.length - 2] == "/" &&
            MiCadena[MiCadena.length - 1] == "2"
        ) {
            var subarray = MiCadena.slice(0, MiCadena.length - 2);
            console.log("El subarray es: " + subarray);
            console.log("El tamaño del subarray es: " + subarray.length);
            console.log(
                "El último caracter del subarray es: " +
                    subarray[subarray.length - 1]
            );

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }
            if (bandera == true) {
                resultado = subarray.length / 2;
            }
        } else {
            bandera = false;
        }
    } else if (MiCadena[0] == "U") {
        //función U Union
        if (
            MiCadena[0] == "U" &&
            MiCadena[1] == "(" &&
            MiCadena[MiCadena.length - 1] == ")"
        ) {
            var indexcoma = MiCadena.indexOf(",");
            var tamañomenosuno = MiCadena.length - 1;
            var subarray = MiCadena.slice(2, indexcoma);
            var subarray2 = MiCadena.slice(indexcoma + 1, tamañomenosuno);
            console.log("Tamaño de la cadena completa es: " + MiCadena.length);
            console.log("Indice de la ',' es:" + indexcoma);
            console.log("Tamaño de la cadena menos uno es: " + tamañomenosuno);
            console.log(
                "MiCadena[tamañomenosuno] = " + MiCadena[tamañomenosuno]
            );
            console.log("El subarray es: " + subarray);
            console.log("El subarray2 es: " + subarray2);
            console.log("El tamaño del subarray es: " + subarray.length);
            console.log("El tamaño del subarray2 es: " + subarray2.length);
            console.log(
                "El último caracter del subarray es: " +
                    subarray[subarray.length - 1]
            );
            console.log("El primer caracter del subarray2 es: " + subarray2[0]);

            i = 0;
            while (i < subarray.length) {
                if (
                    subarray[i] == "a" ||
                    subarray[i] == "b" ||
                    subarray[i] == "c" ||
                    subarray[i] == "d" ||
                    subarray[i] == "e"
                ) {
                    bandera = true;
                } else {
                    bandera = false;
                    break;
                }
                i++;
            }
            if (bandera == true) {
                i = 0;
                while (i < subarray2.length) {
                    if (
                        subarray2[i] == "a" ||
                        subarray2[i] == "b" ||
                        subarray2[i] == "c" ||
                        subarray2[i] == "d" ||
                        subarray2[i] == "e"
                    ) {
                        bandera = true;
                    } else {
                        bandera = false;
                        break;
                    }
                    i++;
                }
                if (bandera == true) {
                    resultado = subarray += subarray2;
                } else {
                    bandera = false;
                }
            }
        } else {
            bandera = false;
        }
    } else {
        //Validar Cadena
        i = 0; //variable iterativa para hacer cíclos dentro de la cadena
        while (i < MiCadena.length) {
            //Escribir una cadena
            if (
                MiCadena[i] == "a" ||
                MiCadena[i] == "b" ||
                MiCadena[i] == "c" ||
                MiCadena[i] == "d" ||
                MiCadena[i] == "e"
            ) {
                bandera = true;
            } else {
                bandera = false;
                break;
            }
            i++;
        }
        resultado = MiCadena;
    }
}
