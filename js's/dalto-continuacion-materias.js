let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`<b style="color:red">lo siento</b> ${alumno}, las clases de ${materia} ya estan llenas<br>`)
    }
    else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias["quimica"]
            }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias["programacion"],
                logica: materias['logica'],
                quimica: personas,
            }
        }
        document.write(`Felicicidades ${alumno}, te has inscrito a ${materia}<br>`)
        
    }
}

document.write(materias['fisica'] + "<br>")

inscribir("javier","fisica")
inscribir("meyo","fisica")
inscribir("francis","fisica")
inscribir("hermayony","fisica")
inscribir("galac","fisica")
inscribir("gabriel","fisica")
inscribir("ola","fisica")
inscribir("ottis","fisica")
inscribir("bradd","fisica")
inscribir("elisco","fisica")
inscribir("bibi","fisica")
inscribir("duck","fisica")
inscribir("davis","fisica")
inscribir("papu francis","fisica")
inscribir("lele","fisica")
inscribir("lana","fisica")
inscribir("gaby","fisica")
inscribir("tron","fisica")
inscribir("tyler","fisica")
inscribir("boby","fisica")
inscribir("baltimer","fisica")
inscribir("alanis","fisica")


document.write("<br>" + materias['fisica'])
