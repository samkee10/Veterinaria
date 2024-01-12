const {registrar,leer} = require('./operaciones')

const [operacion,nombre,edad,animal,color,enfermedad] = process.argv.slice(2) 

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad)
    console.log("registro exitoso")
}

if (operacion === "leer") {
    const citas = leer() 
    console.log(citas)
}

