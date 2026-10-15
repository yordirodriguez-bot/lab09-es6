export const promedio = (...notas) => notas.reduce((a, b) => a + b, 0) / notas.length;

export const estado = (nota, minima = 13) => nota >= minima ? "Aprobado" : "Desaprobado";

export const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};