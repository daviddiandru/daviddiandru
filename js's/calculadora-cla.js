const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2)
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2)
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2)
}
const exponenciar = (num1,num2)=>{
    return parseInt(num1) ** parseInt(num2)
}

alert("¿Que operacion deseas realizar el dia de hoy?");
let operacion = prompt("1:suma, 2:resta, 3:division, 4:multiplicacion, 5:exponenciacion");

if (operacion == 1){
    let numero1 = prompt("primer numero a sumar");
    let numero2 = prompt("segundo numero a sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer numero a restar");
    let numero2 = prompt("segundo numero a restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt("primer numero a dividir");
    let numero2 = prompt("segundo numero a dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt("primer numero a multiplicar");
    let numero2 = prompt("segundo numero a multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5){
    let numero1 = prompt("primer numero a exponenciar");
    let numero2 = prompt("segundo numero a exponenciar");
    resultado = exponenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else{
    alert("operacion no disponible");
}