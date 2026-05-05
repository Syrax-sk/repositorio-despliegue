// eje15.js
function fnContarPares(numbers) {
    let contador = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

export { fnContarPares };