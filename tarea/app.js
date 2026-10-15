import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);
document.querySelector("#curso").textContent = `Curso: ${curso}`;

const ul = document.querySelector("#reportes");
todos.forEach(estudiante => {
  const rep = reporte(estudiante);
  console.log(rep);
  ul.innerHTML += `<li>${rep}</li>`;
});