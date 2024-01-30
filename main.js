let catalogoCajas = [
  { modelo: "Argo", contenido: "Vinos", precio: 1500 },
  { modelo: "Greta", contenido: "Té", precio: 1300 },
  { modelo: "Justa", contenido: "Cafe", precio: 1200 },
];

document.getElementById("buscarButton").addEventListener("click", function() {
  let modeloUsuario = document.getElementById("modeloInput").value;
  
  // Almacenar el modelo buscado en Local Storage
  localStorage.setItem("ultimoModeloBuscado", modeloUsuario);

  // Buscar la caja y mostrar la información
  let cajasEncontrado = buscarCajasPorModelo(modeloUsuario);
  mostrarInformacionCajas(cajasEncontrado);
});

function buscarCajasPorModelo(modelo) {
  return catalogoCajas.find(cajas => cajas.modelo.toLowerCase() === modelo.toLowerCase());
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

// Cargar el último modelo buscado al recargar la página
window.onload = function() {
  const ultimoModeloBuscado = localStorage.getItem("ultimoModeloBuscado");
  if (ultimoModeloBuscado) {
      document.getElementById("modeloInput").value = ultimoModeloBuscado;
      let cajasEncontrado = buscarCajasPorModelo(ultimoModeloBuscado);
      mostrarInformacionCajas(cajasEncontrado);
  }
};
