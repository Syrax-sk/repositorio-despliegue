import { fnSumaVectorFor } from "./eje11.js";
import { fnMaximoVectorFor } from "./eje12.js";
import { fnBuscarElementoWhile } from "./eje13.js";
import { fnInvertirVectorFor } from "./eje14.js";
import { fnContarPares } from "./eje15.js";

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

    // EJE 11
    let r1 = fnSumaVectorFor([1,2,3]) === 6;
    log("Suma [1,2,3] = 6", r1);

    // EJE 12
    let r2 = fnMaximoVectorFor([1,9,3]) === 9;
    log("Máximo [1,9,3] = 9", r2);

    // EJE 13
    let r3 = fnBuscarElementoWhile([10,20,30], 20) === 1;
    log("Buscar 20 = 1", r3);

    // EJE 14
    let inv = fnInvertirVectorFor([1,2,3]);
    let r4 = JSON.stringify(inv) === JSON.stringify([3,2,1]);
    log("Invertir [1,2,3]", r4);

    // EJE 15
    let r5 = fnContarPares([1,2,4,5,6]) === 3;
    log("Contar pares = 3", r5);

    // resumen final
    const total = [r1,r2,r3,r4,r5].filter(Boolean).length;
    log(`RESULTADO FINAL: ${total}/5 pruebas correctas`, total === 5);
}

btn.addEventListener("click", runTests);