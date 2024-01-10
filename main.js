
let catalogoCajas = [
    { modelo: "Argo", contenido: "Vinos", precio: 1500 },
    { modelo: "Greta", contenido: "Té", precio: 1300 },
    { modelo: "Justa", contenido: "Cafe", precio: 1200 },
  ];
  
  function buscarCajasPorModelo(modelo) {
    for (let cajas of catalogoCajas) {
      if (cajas.modelo.toLowerCase() === modelo.toLowerCase()) {
        return cajas;
      }
    }
    return null; 
  }
  

  function mostrarInformacionCajas(cajas) {
    if (cajas) {
      console.log(`Modelo: ${cajas.modelo}`);
      console.log(`Contenido: ${cajas.contenido}`);
      console.log(`Precio: $${cajas.precio}`);
    } else {
      console.log("Caja no encontrado en el catálogo.");
    }
  }
  

  let modeloUsuario = prompt("Ingrese la caja que desea buscar:");
  

  let cajasEncontrado = buscarCajasPorModelo(modeloUsuario);
  
  mostrarInformacionCajas(cajasEncontrado);
  