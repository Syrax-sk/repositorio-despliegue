import { fnSumaVectorFor } from "../js/eje11.js";
import { fnMaximoVectorFor } from "../js/eje12.js";
import { fnBuscarElementoWhile } from "../js/eje13.js";
import { fnInvertirVectorFor } from "../js/eje14.js";
import { fnContarPares } from "../js/eje15.js";

describe("🧪 Ejercicios de vectores", () => {

    test("Suma de vector básica", () => {
        expect(fnSumaVectorFor([1, 2, 3])).toBe(6);
    });

    test("Suma con negativos", () => {
        expect(fnSumaVectorFor([-1, 1])).toBe(0);
    });

    test("Máximo de vector", () => {
        expect(fnMaximoVectorFor([1, 9, 3])).toBe(9);
    });

    test("Máximo con negativos", () => {
        expect(fnMaximoVectorFor([-5, -2, -10])).toBe(-2);
    });

    test("Buscar elemento existente", () => {
        expect(fnBuscarElementoWhile([10, 20, 30], 20)).toBe(1);
    });

    test("Elemento no encontrado", () => {
        expect(fnBuscarElementoWhile([10, 20, 30], 99)).toBe(-1);
    });

    test("Invertir vector", () => {
        expect(fnInvertirVectorFor([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test("Invertir vector vacío", () => {
        expect(fnInvertirVectorFor([])).toEqual([]);
    });

    test("Contar pares", () => {
        expect(fnContarPares([1, 2, 4, 5, 6])).toBe(3);
    });

    test("Sin pares", () => {
        expect(fnContarPares([1, 3, 5])).toBe(0);
    });

});