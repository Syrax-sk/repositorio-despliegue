import { fnSumaVectorFor } from "./eje11.js";
import { fnMaximoVectorFor } from "./eje12.js";
import { fnBuscarElementoWhile } from "./eje13.js";
import { fnInvertirVectorFor } from "./eje14.js";
import { fnContarPares } from "./eje15.js";

window.addEventListener("DOMContentLoaded", () => {

    const out = document.getElementById("test-results");
    const btn = document.getElementById("run-tests");

    function log(msg, ok) {
        const div = document.createElement("div");
        div.textContent = (ok ? "✅ " : "❌ ") + msg;
        div.style.color = ok ? "green" : "red";
        out.appendChild(div);
    }

    function clear() {
        out.innerHTML = "";
    }

    function runTests() {
        clear();

        let r1 = fnSumaVectorFor([1,2,3]) === 6;
        log("Suma", r1);

        let r2 = fnMaximoVectorFor([1,9,3]) === 9;
        log("Máximo", r2);

        let r3 = fnBuscarElementoWhile([10,20,30], 20) === 1;
        log("Buscar", r3);

        let inv = fnInvertirVectorFor([1,2,3]);
        let r4 = JSON.stringify(inv) === JSON.stringify([3,2,1]);
        log("Invertir", r4);

        let r5 = fnContarPares([1,2,4,5,6]) === 3;
        log("Pares", r5);

        log(
            `RESULTADO FINAL: ${
                [r1,r2,r3,r4,r5].filter(Boolean).length
            }/5`,
            [r1,r2,r3,r4,r5].every(Boolean)
        );
    }

    btn.addEventListener("click", runTests);
});