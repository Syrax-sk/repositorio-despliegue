import * as combine from "./combine.js";

const btnTests = document.getElementById("run-tests");
const resultados = document.getElementById("test-results");
const operacionSelect = document.getElementById("operacion");

btnTests.addEventListener("click", ejecutarTests);

function ejecutarTests() {
    const operacion = operacionSelect.value;
    let salida = "";

    function test(nombre, condicion) {
        salida += `<div>${condicion ? "✅" : "❌"} ${nombre}</div>`;
    }

    switch (operacion) {

        case "eje11":
            test("Suma básica", combine.eje11.fnSumaVectorFor([1,2,3]) === 6);
            test("Suma con negativos", combine.eje11.fnSumaVectorFor([-1,1]) === 0);
            break;

        case "eje12":
            test("Máximo normal", combine.eje12.fnMaximoVectorFor([1,9,3]) === 9);
            test("Máximo negativos", combine.eje12.fnMaximoVectorFor([-5,-2,-9]) === -2);
            break;

        case "eje13":
            test("Elemento encontrado", combine.eje13.fnBuscarElementoWhile([5,6,7], 6) === 1);
            test("Elemento no encontrado", combine.eje13.fnBuscarElementoWhile([1,2,3], 9) === -1);
            break;

        case "eje14":
            test(
                "Invertir vector",
                JSON.stringify(combine.eje14.fnInvertirVectorFor([1,2,3])) === JSON.stringify([3,2,1])
            );
            break;

        case "eje15":
            test("Contar pares", combine.eje15.fnContarPares([1,2,3,4]) === 2);
            test("Sin pares", combine.eje15.fnContarPares([1,3,5]) === 0);
            break;

        default:
            salida = "⚠️ Selecciona un ejercicio primero";
    }

    resultados.innerHTML = salida;
}