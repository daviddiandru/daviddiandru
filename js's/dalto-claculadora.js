class Calculadora{
    constructor(){

    }
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    exponenciar(num1,num2){
        return parseInt(num1) ** parseInt(num2)
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }

}
const calculadora = new Calculadora();

alert("Que operacion deseas realizar")
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5: exponenciacion, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1){
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("ssegundo número para sumar");
    resultado = calculadora.sumar(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("ssegundo número para restar");
    resultado = calculadora.restar(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);

}
else if (operacion == 3){
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("ssegundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);

}
else if (operacion == 4){
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("ssegundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);

}
else if (operacion == 5){
    let numero1 = prompt("numero a potenciar");
    let numero2 = prompt("exponente");
    resultado = calculadora.exponenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6){
    let numero1 = prompt("conocer la raiz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7){
    let numero1 = prompt("conocer la raiz cubica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado la operacion")
}