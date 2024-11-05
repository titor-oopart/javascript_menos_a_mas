let a = -1;

let mensaje =
  typeof a == "boolean"
    ? "No es un numero"
    : a == 0
      ? "Su valor es 0"
      : a > 0
        ? "es un numero positivo"
        : a < 0
          ? "es un numero negativo"
          : typeof a == "number"
            ? "Es un numero"
            : "No es un numero";
console.log(mensaje);
