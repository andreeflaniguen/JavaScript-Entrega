
function sumaNumerosPares(limite) {
  let suma = 0;

  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
      suma += i; 
    }
  }

  return suma;
}


let resultado = sumaNumerosPares(50);
console.log(resultado);
  