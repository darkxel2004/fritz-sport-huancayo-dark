document.getElementById("btnEntrar").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "dark" && clave === "2026") {
    localStorage.setItem("logueado", "true");

    document.getElementById("transicion").style.display = "flex";

    setTimeout(() => {
      window.location.href = "menu.html";
    }, 3500);
  } else {
    alert("❌ Usuario o contraseña incorrectos");
  }
});
