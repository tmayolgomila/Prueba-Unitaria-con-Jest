const sum = (a, b) =>{
    return a + b;
}
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.006;
    // retornamos el valor
    return valueInPound;
}









module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };