const pantalla = document.getElementById("pantalla");

const agregar = (valor) => pantalla.value += valor;

const agregarPunto = () => {
  const partes = pantalla.value.split(/[\+\-\*\/]/);
  const ultimaParte = partes[partes.length - 1];
  if (!ultimaParte.includes('.')) {
    pantalla.value += '.';
  }
};

const agregarNegativo = () => {
  if (pantalla.value === "" || pantalla.value.slice(-1).match(/[\+\-\*\/]/)) {
    pantalla.value += "-";
  }
};

const calcular = () => {
  try {
    pantalla.value = `${eval(pantalla.value)}`;
  } catch {
    pantalla.value = "Error";
  }
};

const borrar = () => pantalla.value = "";
