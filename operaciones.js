const fs = require("fs");

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
  // Leer el archivo citas.json
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  // Crear una nueva cita
  const nuevaCita = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  };

  // Agregar la nueva cita al arreglo
  citas.push(nuevaCita);

  // Guardar el arreglo actualizado en el archivo citas.json
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito");
}

// Función para leer todas las citas
function leer() {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(citas);
}

// Exportar las funciones
module.exports = { registrar, leer };
