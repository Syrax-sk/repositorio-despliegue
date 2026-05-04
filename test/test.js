import { fnSumaVectorFor } from "../js/eje11.js";
import { fnMaximoVectorFor } from "../js/eje12.js";
import { fnBuscarElementoWhile } from "../js/eje13.js";
import { fnInvertirVectorFor } from "../js/eje14.js";
import { fnContarPares } from "../js/eje15.js";

describe("Ejercicios de vectores", () => {

    test("Suma de vector", () => {
        expect(fnSumaVectorFor([1,2,3])).toBe(6);
    });

    test("Máximo de vector", () => {
        expect(fnMaximoVectorFor([1,9,3])).toBe(9);
    });

    test("Buscar elemento existente", () => {
        expect(fnBuscarElementoWhile([10,20,30], 20)).toBe(1);
    });

    test("Elemento no encontrado", () => {
        expect(fnBuscarElementoWhile([10,20,30], 99)).toBe(-1);
    });

    test("Invertir vector", () => {
        expect(fnInvertirVectorFor([1,2,3])).toEqual([3,2,1]);
    });

    test("Contar pares", () => {
        expect(fnContarPares([1,2,4,5,6])).toBe(3);
    });

});