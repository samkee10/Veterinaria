const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    }

    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'))
    citas.push(nuevaCita)

    fs.writeFileSync("citas.json", JSON.stringify(citas))
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf-8'))
    return citas
}
module.exports = {
    registrar,
    leer
}