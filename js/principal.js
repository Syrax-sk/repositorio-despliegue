import * as combine from "./combine.js";

window.addEventListener("DOMContentLoaded", () => {

    const operacionSelect = document.getElementById("operacion");
    const resultadosDiv = document.getElementById("resultados");
    const ejecutar = document.getElementById("ejecutar");
    const contenedorInputs = document.getElementById("inputs-dinamicos");

    // 🎛️ Generar inputs dinámicos
    operacionSelect.addEventListener("change", generarInputs);

    function generarInputs() {
        contenedorInputs.innerHTML = "";

        switch (operacionSelect.value) {
            case "eje11":
            case "eje12":
            case "eje14":
            case "eje15":
                contenedorInputs.innerHTML = `
                    <label>Vector (ej: 1,2,3,4):</label>
                    <input type="text" id="vectorInput">
                `;
                break;

            case "eje13":
                contenedorInputs.innerHTML = `
                    <label>Vector (ej: 1,2,3,4):</label>
                    <input type="text" id="vectorInput">
                    <label>Número a buscar:</label>
                    <input type="number" id="buscarInput">
                `;
                break;
        }
    }

    // 🎮 Ejecutar
    ejecutar.addEventListener("click", calcular);

    function calcular() {
        try {
            const operacion = operacionSelect.value;

            const input = document.getElementById("vectorInput")?.value;

            if (!input) throw new Error("Ingresa un vector");

            const vector = input.split(",").map(n => Number(n.trim()));

            let resultado;

            switch (operacion) {
                case "eje11":
                    resultado = `Suma: ${combine.eje11.fnSumaVectorFor(vector)}`;
                    mostrarCajas(vector);
                    break;

                case "eje12":
                    resultado = `Máximo: ${combine.eje12.fnMaximoVectorFor(vector)}`;
                    mostrarCajas(vector);
                    break;

                case "eje13":
                    const valor = Number(document.getElementById("buscarInput").value);
                    const pos = combine.eje13.fnBuscarElementoWhile(vector, valor);
                    resultado = pos !== -1
                        ? `Encontrado en posición ${pos}`
                        : "No encontrado";
                    mostrarCajas(vector);
                    break;

                case "eje14":
                    const inv = combine.eje14.fnInvertirVectorFor(vector);
                    resultado = `Invertido: [${inv.join(", ")}]`;
                    mostrarCajas(inv);
                    break;

                case "eje15":
                    resultado = `Cantidad de pares: ${combine.eje15.fnContarPares(vector)}`;
                    mostrarCajas(vector);
                    break;

                default:
                    throw new Error("Selecciona una operación");
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

    // 🧩 Visualización
    function mostrarCajas(vector) {
        const contenedor = document.getElementById("cajas");
        contenedor.innerHTML = "";

        vector.forEach(num => {
            const div = document.createElement("div");
            div.className = "box";
            div.textContent = num;
            contenedor.appendChild(div);
        });
    }

});