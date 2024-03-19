let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "0 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS = "45 56 73 34 65 72 70 32";

let calcularpromedio = curso => 
{
    let listaCurso = curso.split(" ");
    let promedio = 0;
    
    for(i= 0; i<listaCurso.length; i++)
    {
        promedio += Number(listaCurso[i]);
    }

    return promedio/listaCurso.length;
}


let elegirCursoPromedio = (graduadosHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, opcion, calcularpromedio) =>
{
    switch (opcion) {
        case 1:
            console.log("\nEl promedio del curso de HTML5 es: " + calcularpromedio(graduadosHTML5));
            break;

        case 2:
            console.log("\nEl promedio del curso de CSS3 es: " + calcularpromedio(graduadosCSS3));
            break;

        case 3:
            console.log("\nEl promedio del curso de JAVASCRIPT es: " + calcularpromedio(graduadosJAVASCRIPT));
            break;

        case 4:
            console.log("\nEl promedio del curso de NODEJS es: " + calcularpromedio(graduadosNODEJS));
            break;

        default:
            console.log
            (
                "\nLas opciones de los cursos son las siguientes: \n" +
                "1 = HTML5\n" +
                "2 = CSS3\n" +
                "3 = JAVASCRIPT\n" +
                "4 = NODEJS\n"
            );
    }
}

elegirCursoPromedio(graduadosHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, 0, calcularpromedio)