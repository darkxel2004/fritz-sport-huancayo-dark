function buscar() {
  const codigo = document.getElementById("codigo").value;
  const cargando = document.getElementById("cargando");
  const resultado = document.getElementById("resultado");

  if (codigo.trim() === "") {
    alert("Ingrese un código UBIGEO");
    return;
  }

  resultado.innerHTML = "";
  cargando.style.display = "block";

  setTimeout(() => {
    cargando.style.display = "none";

    resultado.innerHTML = `
      <h3>📍 UBIGEO ENCONTRADO</h3>
      <p>Código ingresado: <b>${codigo}</b></p>
      <h2 style="color:#00d9ff;">Ubicación: 2S1-A01</h2>
    `;
  }, 5000);
}

function regresar() {
  window.location.href = "menu.html";
}
