//Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    //1. tengo que recorrer el array entero, tanto numeros positivos como numeros negativos

    //2. hay que crear una variable que diga que es el numero mayor, que se comparara con todos los numeros positivos, para saber cual es el mayor de todos
    let numMayor=input[0];
    let numMenor=0;
    for (let i=0;i<input.length;i++){
        //2.5 voy hacer un condicional, para examinar primero los numeros positivos
            if(input[i]>0){
                numMayor=input[i];
            } else if (input[i]<0){
                numMenor=numMenor+input[i];
            }
    }
    return [numMayor,numMenor];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));