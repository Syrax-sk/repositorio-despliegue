import * as combine from "./combine.js";

window.addEventListener("DOMContentLoaded", () => {

    const operacionSelect = document.getElementById("operacion");
    const resultadosDiv = document.getElementById("resultados");
    const ejecutar = document.getElementById("ejecutar");

    function calcular() {
        try {
            const operacion = operacionSelect.value;
            const vector = [5, 8, 3, 10, 2, 7];

            let resultado;

            switch (operacion) {
                case "eje11":
                    resultado = `Suma: ${combine.eje11.fnSumaVectorFor(vector)}`;
                    break;

                case "eje12":
                    resultado = `Máximo: ${combine.eje12.fnMaximoVectorFor(vector)}`;
                    break;

                case "eje13":
                    const pos = combine.eje13.fnBuscarElementoWhile(vector, 10);
                    resultado = pos !== -1
                        ? `Encontrado en posición ${pos}`
                        : "No encontrado";
                    break;

                case "eje14":
                    const inv = combine.eje14.fnInvertirVectorFor(vector);
                    resultado = `Invertido: [${inv.join(", ")}]`;
                    break;

                case "eje15":
                    resultado = `Pares: ${combine.eje15.fnContarPares(vector)}`;
                    break;

                default:
                    throw new Error("Operación no válida");
            }

            mostrarResultado(resultado);

        } catch (error) {
            mostrarResultado("Error: " + error.message, "error");
        }
    }

    function mostrarResultado(mensaje, tipo = "success") {
        resultadosDiv.textContent = mensaje;
        resultadosDiv.className = "result " + tipo;
    }

    ejecutar.addEventListener("click", calcular);
});