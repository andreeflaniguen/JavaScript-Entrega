let catalogoCajas = [];

function cargarCatalogoDesdeJSON() {
  fetch('./catalogoCajas.json') 
    .then(response => response.json())
    .then(data => {
      catalogoCajas = data;
      console.log('Catálogo cargado:', catalogoCajas);
      // Verificar si hay un modelo buscado previamente y mostrarlo
      cargarUltimoModeloBuscado();
    })
    .catch(error => console.error("Error al cargar el catálogo de cajas:", error));
}

function cargarUltimoModeloBuscado() {
  const ultimoModeloBuscado = localStorage.getItem("ultimoModeloBuscado");
  if (ultimoModeloBuscado) {
      document.getElementById("modeloInput").value = ultimoModeloBuscado;
      let cajaEncontrada = buscarCajasPorModelo(ultimoModeloBuscado);
      mostrarInformacionCajas(cajaEncontrada);
  }
}

document.getElementById("buscarButton").addEventListener("click", function() {
  let modeloUsuario = document.getElementById("modeloInput").value;
  
  // Almacenar el modelo buscado en Local Storage
  localStorage.setItem("ultimoModeloBuscado", modeloUsuario);

  // Buscar la caja y mostrar la información
  let cajaEncontrada = buscarCajasPorModelo(modeloUsuario);
  mostrarInformacionCajas(cajaEncontrada);
});

function buscarCajasPorModelo(modelo) {
  return catalogoCajas.find(caja => caja.modelo.toLowerCase() === modelo.toLowerCase());
}

function mostrarInformacionCajas(caja) {
  let resultado = document.getElementById("resultado");

  if (caja) {
      resultado.innerHTML = `
          <p>Modelo: ${caja.modelo}</p>
          <p>Contenido: ${caja.contenido}</p>
          <p>Precio: $${caja.precio}</p>
      `;
      swal("Caja encontrada", `Modelo: ${caja.modelo}`, "success");
  } else {
      swal("Caja no encontrada", "La caja solicitada no se encuentra en el catálogo.", "error");
  }
}


window.onload = function() {
  cargarCatalogoDesdeJSON();
}
