// eje14.js
function fnInvertirVectorFor(arr) {
    let invertido = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }

    return invertido;
}

export { fnInvertirVectorFor };