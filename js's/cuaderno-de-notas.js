/*LIBRETILLA DE PROGRAMACION*/


// /*Cofla primer problema de la heladeria */
// dineroCofla = prompt("¿cuanto dinero tienes Cofla?");
// dineroRoberto = prompt("¿cuanto dinero tienes Roberto?");
// dineroPedro = prompt("¿cuanto dinero tienes Pedro?");

// dineroCofla = parseInt(dineroCofla);

// if (dineroCofla >= 0.6 && dineroCofla < 1){
//     alert("Cofla, comprate el helado de agua")
//     alert("y te sobran" + (dineroCofla - 0.6));
// }
// else if (dineroCofla >= 1 && dineroCofla < 1.6){
//     alert("Cofla, comprate el helado de crema")
//     alert("y te sobran" + (dineroCofla - 1));
// }
// else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
//     alert("comprate el helado de heladix")
//     alert("y te sobran" + (dineroCofla - 1.6));
// }
// else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
//     alert("Cofla, comprate el helado de heladovich")
//     alert("y te sobran" + (dineroCofla - 1.7));
// }
// else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
//     alert("Cofla, comprate el helado de helardo")
//     alert("y te sobran" + (dineroCofla - 1.8));
// }

// else if (dineroCofla >= 2.9){
//     alert("Cofla, comprate el helado con confites o el pote de 1/4kg")
//     alert("y te sobran" + (dineroCofla - 2.9));
// }
// else{
//     alert("lo siento Cofla,  no te alcanza para ningun helado")
// }


// if (dineroRoberto >= 0.6 && dineroRoberto < 1){
//     alert("Roberto, comprate el helado de agua")
// }
// else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
//     alert("Roberto, comprate el helado de crema")
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
//     alert("Roberto, comprate el helado de heladix")
// }
// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
//     alert("Roberto, comprate el helado de heladovich")
// }
// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
//     alert("Roberto, comprate el helado de helardo")
// }

// else if (dineroRoberto >= 2.9){
//     alert("Roberto, comprate el helado con confites o el pote de 1/4kg")
// }
// else{
//     alert("lo siento Roberto, no te alcanza para ningun helado")
// }


// if (dineroPedro >= 0.6 && dineroPedro < 1){
//     alert("Pedro, comprate el helado de agua")
// }
// else if (dineroPedro >= 1 && dineroPedro < 1.6){
//     alert("Pedro, comprate el helado de crema")
// }
// else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
//     alert("Pedro, comprate el helado de heladix")
// }
// else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
//     alert("Pedro, comprate el helado de heladovich")
// }
// else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
//     alert("Pedro, comprate el helado de helardo")
// }

// else if (dineroPedro >= 2.9){
//     alert("Pedro, comprate el helado con confites o el pote de 1/4kg")
// }
// else{
//     alert("lo siento Pedro, no te alcanza para ningun helado")
// }




/*Bucles... if se repite una vez, while se repite infinitamente mientras la condicion
sea verdadera, do while hace lo mismo que el while solo que primero ejecuta
y luego pregunta si todavia es verdadero para seguir eecutando el bucle.
tambien se encuentra el break que se usa para detener un while*/
// let numero = 0;
// while(numero < 1000){
//     numero++;
//     document.write(numero);
//     if (numero == 10){
//         break;
//     }
// }
// document.write("Fin")
/*tambien esta continue que se usa para saltar un numero o un valor y seguir con el resto de valores*/
// for (let i = 1; i <= 5; i++){
//     if (i == 4){
//         continue;
//     }
//     document.write(i + "<br>");
// }



// /*lista de estudiantes*/
// let cantidad = prompt("¿cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0]
// }
// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P"){
//         alumnosTotales[p][1]++;
//     }
// }

// for (i = 0; i < 30; i++){
//     for (alumno in alumnosTotales){
//     tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     ________Asistencias: ${alumnosTotales[alumno][1]}<br>
//     ________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}
//     `;
//     if (30 - alumnosTotales[alumno][1] > 18){
//     resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
//     }
//     else {
//         resultado+= "<br><br>"
//     }
//     document.write(resultado);
// }



// /**POO- definicion,ejemplos,instanciacion.
//  * Conseptos basicos de la POO-clase,objeto,atributo,
//  * metodo,constructor,instanciacion*/
 


// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }

// const perro = new animal("perro",5,"marron");
// const gato = new animal("gato",2,"negro");
// const pajaro = new animal("pajaro",1,"verde");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// // document.write(perro.info + "<br>");
// // document.write(gato.info + "<br>");
// // document.write(pajaro.info + "<br>");



/*Caracteristicas de la POO- abstraccion,modularidad,encapsulamiento,polimorfismo*/

// /*Otros conceptos de la POO- herencia,metodos estaticos,metodos accesores(getters, setters)*/
// /*POLIMORFISMO*/
// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
//     ladrar(){
//         if (this.especie == "perro"){
//             document.write("¡Waw!" + "<br>");
//         }else {
//             document.write(`no puede ladrar, ya que es un ${this.especie}` + "<br>")
//         }
//     }
// }

// const perro = new animal("perro",5,"marron");
// const gato = new animal("gato",2,"negro");
// const pajaro = new animal("pajaro",1,"verde");

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();


/*Herencia*/
// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }
// /*No se puede tener un objeto con el mismo nombre que la clase*/
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = raza;
//     }
//     ladrar(){
//         alert("¡Waw!");
//     }

// }

// const perro = new Perro("perro",5,"marron","doberman");
// const gato = new Animal("gato",2,"negro");
// const pajaro = new Animal("pajaro",1,"verde");

// perro.ladrar();
// gato.verInfo();
// pajaro.verInfo();



// /*Metosdos estaticos/ no necesita que la clase se defina para poder ser creado*/
// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }

// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = raza;
//     }
//     static ladrar(){
//         alert("¡Waw!");
//     }

// }

// const gato = new Animal("gato",2,"negro");
// const pajaro = new Animal("pajaro",1,"verde");

// Perro.ladrar();
// gato.verInfo();
// pajaro.verInfo();



/*Metodos getters(obtener un valor) y setters(modificarlos o definirlos)*/
// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }

// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = null;
//     }
//     set setRaza(newName){
//         this.raza = newName;
//     }
//     get getRaza(){
//         return this.raza;
//     }

// }

// const perro = new Perro("perro",5,"marron","doberman");
// const gato = new Animal("gato",2,"negro");
// const pajaro = new Animal("pajaro",1,"verde");

// perro.setRaza = "Pedro";
// document.write(perro.getRaza)



// /*Ejercicio con problemas-cofla*/
// class Celular{
//     constructor(color,peso,tamaño,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncendido(){
//         if (this.encendido == false){
//             alert("celular prendido");
//             this.encendido = true;
//         }else{
//             alert("celular apagado");
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true){
//             alert("reiniciando celular");
//         }else{
//             alert("el celular esta apagado")
//         }
//     }    
//     tomarFoto(){
//         alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
//     }
//     grabarVideo(){
//         alert(`grabando video en ${this.resolucionDeCamara}`)
//     }
//     mobileInfo(){
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Tamaño: <b>${this.tamaño}</b><br>
//         Memoria ram: <b>${this.memoriaRam}</b><br>
//         Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
//         `;
//     }
// }

// class CelularAltaGama extends Celular{
//     constructor(color,peso,tamaño,rdc,ram,rdce){
//         super(color,peso,tamaño,rdc,ram);
//         this.resolucionDeCamaraExtra = rdce
//     }
//     grabarVideoLento(){
//         alert("estas grabando en camara lenta");
//     }
//     reconocimientoFacial(){
//         alert("vamos a iniciar un reconocimiento facial")
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
//     }
// }

// celular1 = new Celular("rojo","150gr","5'","hd","1GB");
// celular2 = new Celular("negro","155gr","5.4'","full hd","2GB");
// celular3 = new Celular("blanco","15046gr","5.9'","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.presionarBotonEncendido();

// const celular1 = new CelularAltaGama("rojo","130gr","5.2'","4K","3G","full hd");
// const celular2 = new CelularAltaGama("negro","142gr","6'","4K","2GB","hd");

// document.write(`
//     ${celular1.infoAltaGama()} <br><br>
//     ${celular2.infoAltaGama()} <br>
// `);




// /*Ejercicio con problemas-cofla 2*/
// class App{
//     constructor(descargas,puntuacion,peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.iniciada = false;
//         this.instalada = false;
//     }
//     instalar(){
//         if(this.instalada == false){
//             this.instalada = true;
//             alert("app instalada correctamente")
//         }
//     }
//     desinstalar(){
//         if(this.instalada == true){
//             this.instalada = false;
//             alert("app desinstalada correctamente")
//         }
//     }
//     abrir(){
//         if(this.iniciada == false && this.instalada == true){
//             this.iniciada = true;
//             alert("app iniciada")
//         }
//     }
//     cerrar(){
//         if(this.iniciada == true && this.instalada == true){
//             this.iniciada = false;
//             alert("app cerrada");
//         }
//     }
//     appInfo(){
//         return `
//         Descargas: <b>${this.descargas}</b><br>
//         Puntuacion: <b>${this.puntuacion}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         `
//     }

// }


// app = new App("16.000","5 estrellas","900mb");
// app2 = new App("1.000","4 estrellas","400mb");
// app3 = new App("6.000","4.5 estrellas","100mb");
// app4 = new App("23.000","4.8 estrellas","1gb");
// app5 = new App("900","5 estrellas","250mb");
// app6 = new App("17","3.7 estrellas","522mb");
// app7 = new App("23.377","2.9 estrellas","723mb");

// document.write(`
//     ${app.appInfo()} <br>
//     ${app2.appInfo()} <br>
//     ${app3.appInfo()} <br>
//     ${app4.appInfo()} <br>
//     ${app5.appInfo()} <br>
//     ${app6.appInfo()} <br>
//     ${app7.appInfo()} <br>
// `)




/*Metodos de cadena-concat*/

// let cadena = "cadena de prueba ";
// let cadena2 = " cadena 2"
// resultado = cadena.concat(cadena2);
// document.write(resultado)
/**startWith y endsWith verifica que comience y/o termine con una palabra o algo en especifico*/
// let cadena = "cadena de prueba ";
// let cadena2 = "cadena"
// resultado = cadena.startsWith(cadena2);
// document.write(resultado)
/**include, verifica si cualquier palabra o elemento esta dentro*/
// let cadena = "sigo a bria en instagram";
// let cadena2 = "bria ";
// resultado = cadena.includes(cadena2);
// document.write(resultado);
/**indexOf, nos devuelve la posicion en la que se encuentra el primer elemento ingresado
en un elemento*/
// let cadena = "pedro es un estupido infantil";
// let cadena2 = "";
// resultado = cadena.indexOf("estupido");
// document.write(cadena[12]);
/**lastIndexOf, en vez de devolver el primer elemento(la posicion) nos devuelve el ultimo*/
// let cadena = "rapuncel es una princesa hermosa hermosa hermosa hermosa"
// let cadena2 = "";
// resultado = cadena.lastIndexOf("hermosa");
// document.write(cadena[49] + cadena[50] + cadena[51]);
/**padStart y padEnd, rellena la cadena al principio y/o al final con los caracteres deseados*/
// let cadena = "rapuncel es una princesa"
// let cadena2 = "";
// resultado = cadena.padEnd(50, " hermosa ");
// document.write(resultado);
/**repeat, repite la cadena las veces que quera*/
// let cadena = "rapuncel es una princesa hermosa "
// let cadena2 = "";
// resultado = cadena.repeat(10000);
// document.write(resultado);
/**split, divide la cadena en arrays como le indiquemos*/
// let cadena = "Hola,como,estas";
// resultado = cadena.split(",");
// document.write(resultado)
/**substring, nos devuelve lo que seleccionamos en arrays pero lo que le digamos por ahi va a comenzar(va a recortar todo desde ahi en adelante)*/
// let cadena = "ABCDEFG";
// resultado = cadena.substring(0,2);
// document.write(resultado);
/**toLowerCase y toUpperCase, convierte una cadena a minuscula y sucesivamente a mayuscula*/
// let cadena = "A Maria Se Le Escapo Una Gallina";
// resultado = cadena.toLowerCase();
// document.write(resultado);
/**toString, convierte a cadena de texto */
// let cadena = "1999";
// resultado = cadena.toString();
// document.write(2 + resultado);
/**trim, remueve los espacios. tambien como trimStart, que elimina los espacios del principio y trimEnd los del final*/
// let cadena = "    pedro    ";
// let resultado = cadena.trim();
// document.write(resultado.length);




/*metodos de arrays(transformadores) - pop, eliminar el ultimo elemento del arrays y ademas  nos muestra cual elimino*/
// let nombres = ["pedro", "maria", "jorge"];
// document.write(nombres + "<br>");
// let resultado = nombres.pop();
// document.write(resultado + "<br>");
// document.write(nombres);
/**shift, hace lo mismo que pop pero en vez de eliminar el ultimo elimina el primero*/
// let nombres = ["pedro", "maria", "jorge"];
// document.write("Array Original: <b>" + nombres + "</b><br>");
// let resultado = nombres.shift();
// document.write("Elemento Removido: <b style='color:red'>" + resultado + "</b><br>");
// document.write("Resultado: <b>" + nombres + "</b>");
/**push, agrega un elemento al array al final de la lista */
// let nombres = ["pedro", "maria", "jorge"];
// document.write(nombres + "<br>");
// let resultado = nombres.push("juancito","roberto","chris","natalie");
// document.write(nombres);
/**reverse invierte el orden de los elementos de un array*/
// let numeros = [1,2,3,4,5];
// document.write(numeros + "<br>");
// let resultado = numeros.reverse();
// document.write(resultado);
/**unshift, agrega uno o mas elementos al inicio del array*/
// let numeros = [3,4,5];
// document.write(numeros + "<br>");
// numeros.unshift(0,1,2);
// document.write(numeros);
/**sort, ordena los elementos lexico grafica y alfabeticamente*/
// let numeros = [3,9,8,3,9,2,3,9,5,3,0,0,3,9,2,9,1,9,8,3,4,5];
// document.write(numeros + "<br>");
// numeros.sort();
// document.write(numeros);
/**splice, cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos*/
// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];
// document.write(numeros + "<br>");
// numeros.splice(0,0,"gustavo","roberto","maximo");
// document.write(numeros);
// // Nota:para referirse al final de un array se utiliza -1

/**metodos accesores */
/**join, nos convierte los arrays en una cadena de texto, pero tiene una diferencia con toString y es que le puedes agregar cualquier separador*/
// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];
// document.write(numeros + "<br>");
// let resultado = numeros.join("<br>elemento: ");
// document.write("elemento:" + resultado);
/**slice, devuelve una parte del array dentro de un nuevo array empezando por inicio hasta el fin(fin no incluido)*/
// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];
// document.write(numeros + "<br>");
// let resultado = numeros.slice(0,-1);
// document.write(resultado);

/**metodos de repeticion - filter, crea un nuevo array con todos los elementos que cumplan con la condicion.(recibe como parametro una funcion)es como un bucle*/
// let numeros = ["abecedario","manzana","pedro","dedo","bobo","pedro"];
// numeros.filter(numero=> document.write(numero + "<br>"));
/**forEach, ejecuta la funcion indicada una vez por cada elemento del array*/





/*objeto math -- basico. - Math.sqrt, calcula la raiz cuadrada del valor que le indiquemos.
- Math.cbrt, calcula la raiz cubica.
- Math.max, calcula entre los numeros ingresados cual es el numero mas grande. 
- Math.min, calcula cual es el numero mas pequeño.
- Math.random, devuelve un numero pseudo aleatorio entre 0 y 1.*/
// numero = Math.sqrt(25);
// document.write(numero + "<br>");
// numero2 = Math.cbrt(27);
// document.write(numero2)
// numero3 = Math.max(4,3,5,3,2,345,375,678,789,65);
// document.write(numero3 + "<br>");
// numero4 = Math.min(4,3,5,3,2,345,375,678,789,65);
// document.write(numero4);
// numero5 = Math.random();
// document.write(numero5);
/*Nota: si queremos un numero del 0 al 100 hacemos lo siguiente*/
// numero6 = Math.random()*100
// document.write(numero6)
/*Ahora que pasa si queremos un numero esntero y no decimal como el anterior, hacemos lo siguiente(pero esta no es la mejor manera para hacerlo)*/
// numero7 = Math.random()*100;
// numero7 = numero7.toString();
// num = numero7[0] + numero7[1];
// if (numero7[1] == "."){
//     num = numero7[0];
// }
// document.write(num)
/*Para volverlo entero usamos round*/
// numero8 = Math.random()*100;
// numero8 = Math.round(numero8);
// document.write(numero8)
/**Math.floor, redondea el numero hacia abajo*/
/**Math.trunc, quita los decimales de un numero*/
/*PROPIEDADES*/
/**Math.PI, radio de la circunferencia de un circulo respecto a su diametro, aproximadamente, 3.14159.*/
/**Marh.SQRT1_2, raiz cuadrada de un medio y Math.SQRT2 es la raiz cuadrada de 2*/
/*Constantes y logaritmos*/
/**Math.E constante de euler, la base de los logaritmos naturales*/
/**Math.LN2, logaritmo natural de 2 luego LN10, que es el logaritmo natural de 10*/
/**Math.LOG2E, Logaritmo de e con base 2 y luego tenemo LOG10E, que es el logaritmo de E con base 10*/




// /*Cofla problemas*/
// const materias = {
//     fisica: [90,6,3,"fisica"],
//     matematica: [84,8,2,"matematica"],
//     logica: [92,8,4,"logica"],
//     quimica: [96,8,4,"quimica"],
//     calculo: [91,6,3,"calculo"],
//     programacion: [79,7,4,"programacion"],
//     biologia: [75,9,2,"biologia"],
//     bbdd: [98,9,1,"bbdd"],
//     algebra: [100,10,4,"algebra"]
// }

// const aprobo = ()=>{
//     for (materia in materias){

//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2]
//         console.log(materias[materia][3]);
        
//         if (asistencias >= 90){
//             console.log("%cAsistencias en orden","color:green");
//         }
//         else {
//             console.log("%cFalta de asistencias","color:red");
//         }
//         if (true) {
//             console.log("%cPromedio en orden","color:green");
//         }
//         else {
//             console.log("%cPromedio desaprobado","color:red");

//         }
//         if (trabajos >= 3){
//             console.log("%cTrabajos practicos en orden","color:green");
//         }
//         else{
//             console.log("%cFaltan trabajos practicos","color:red");
//         }
//     }
// }

// aprobo()

/**Another cofla  problem */
// let tp = "100 minutos hacer trabajos prácticos";
// let estudio = "100 minutos de estudio";
// let trabajo = "240 minutos de trabajo";
// let homework = "30 minutos de cosas de la casa";
// let descanso = "10 minutossss de descanso";

// console.log("TAREAS");

// for (var i = 0; i < 14; i++){
//     if (i == 0){
//         console.group("semana 1")
//     }

//     console.groupCollapsed("dia " + (i+1) );
//     console.log(trabajo);
//     console.log(estudio);
//     console.log(tp);
//     console.log(homework);    
//     console.groupEnd();
//     if (i == 7){
//         console.groupEnd();
//         console.groupCollapsed("semana 2")
//     }
// }

// console.groupEnd();
// console.groupEnd();


// parrafo = document.getElementsByTagName("p")
// document.write(parrafo[0])

// parrafo2 = document.querySelector(".parrafo");
// document.write(parrafo2[0])

// const rangoEtario = document.querySelector(".rangoEtario");
// valorDelAtributo = rangoEtario.removeAttribute("type")
// document.write(valorDelAtributo )

/*Atributos globales*/
/*contenteditable - indica si el elemento puede ser modificable por el usuario
dir - indica la direccionalidad del texto
hidden - indica si el elemento aun no es, o ya no es, relevante.
id - define un identificador unico.
style - contiene declaraciones de estilos css para ser aplicadas al elemento.
tabindex - indica si el elemento puede obtener un focus de input.
title - contiene un texto con la informacion relacionada al elemento al que pertenece.*/

// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contentEditable","true")

// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("title","hay su maquina")

/*Atributos de los inputs
-className
-value
-form
-minlength
-placeholder
-required*/
// const input = document.querySelector(".input-normal");
// input.accept = "image/png"




/*Clases, classlist y metodos de classlist
-add() añade una clase
-romove() remueve una clase
-item() devuelve la clase del indice especificado
-contains() verifica si ese elemento posee o no, la clase especificada
-replace() reemplaza una clase por otra
toggle() si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.*/

// const titulo = document.querySelector(".titulo");

// let valor = titulo.classList.replace("grande", "chico");
// document.write(valor)

/*Obtencion y modificacion de elementos
-textContent- devuelve el texto de cualquier modo
-innerText- devuelve el texto visible de un node element(ya no se usa)
-outerText- devuelve el texto que den las etiquetas html incluidas las etiquetas(ya no se usa)

-innerHTML- devuelve el contenido html de un elemento
-outerHTML- devuelve el codigo html completo del elemento*/
// const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent;
// let resultado2 = titulo.innerHTML;
// let resultado3 = titulo.outerHTML;

// alert(resultado)
// alert(resultado2)
// alert(resultado3)


/*1 - Creacion de elementos
-createElements()
-createTextNode()
-appendChild()
-createDocumentFragment()*/
/*2 - Obtencion y modificacion de childs(hijos)
-firstChild
-lastChild
-firstElementChild
-lastElementChild
-childNodes
-children*/
/*3 - Metodos de childs(hijos)
-appendChild()
-replaceChild()
-removeChild()
-hasChildNodes()*/
/*4 - Propiedades de parents(padres)
-parentElement
-parentNode*/
/*5 - Propiedades de siblings
-nextSibling*/
// const contenedor = document.querySelector(".contenedor");//creacion de elementos
// const item = document.createElement("li");
// // const textDelItem = document.createTextNode("este es un item de la lista")
// // // item.innerHTML = textDelItem;//nodo dentro de otro nodo
// // item.appendChild(textDelItem);//metodos de childs
// item.innerHTML = "Este es un item de la lista"//esto reemplaza a item.appendChild(textDelItem) y a const textDelItem = document.createTextNode("este es un item de la lista")
// contenedor.appendChild(item)
// console.log(item);
const contenedor = document.querySelector(".contenedor"); //obtencion y modificacion de childs
const primerHijo = contenedor.firstChild;
console.log(primerHijo)
9:05:00