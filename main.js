// Bucle 

// for (let contador = 1; contador <= 10; contador++) {
//     console.log(contador);
//   }



// Condicional 

// let edad = prompt("Ingrese su edad");

// if (edad < 18) {
//   alert("No puedes votar, eres menor de edad.");
// } else if (edad >= 80){
//   alert("Te estas por morir, tu voto no sirve para la comunidad.");
// } else {
//     alert("Puedes votar")
// }


// Funcion 

 function calcularIVA(monto, porcentajeIVA) {
     let iva = (monto * porcentajeIVA) / 100;
  
     let totalConIVA = monto + iva;
  
     return {
       iva: iva,
       totalConIVA: totalConIVA
     };
   }
  
   let montoProducto = prompt("Ingrese monto a calcualar");
   const calcularMonto = parseFloat (montoProducto)
   const porcentajeIVA = 22; 
  
   let resultado = calcularIVA(calcularMonto, porcentajeIVA);
  
//   console.log("Monto sin IVA: $" + calcularMonto);
//   console.log("IVA (" + porcentajeIVA + "%): $" + resultado.iva);
//   console.log("Total con IVA: $" + resultado.totalConIVA);

 alert("Monto sin IVA: $" + calcularMonto);
 alert("IVA (" + porcentajeIVA + "%): $" + resultado.iva);
 alert("Total a pagar: $" + resultado.totalConIVA)
  