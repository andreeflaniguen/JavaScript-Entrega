
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
    let resultado = document.getElementById("resultado");

    if (cajas) {
      resultado.innerHTML = `
        <p>Modelo: ${cajas.modelo}</p>
        <p>Contenido: ${cajas.contenido}</p>
        <p>Precio: $${cajas.precio}</p>
      `;
    } else {
      resultado.innerHTML = "<p>Caja no encontrado en el catálogo.</p>";
    }
  }

  // Obtener el modelo del usuario
  let modeloUsuario = prompt("Ingrese la caja que desea buscar:");

  // Buscar la caja y mostrar la información
  let cajasEncontrado = buscarCajasPorModelo(modeloUsuario);
  mostrarInformacionCajas(cajasEncontrado);