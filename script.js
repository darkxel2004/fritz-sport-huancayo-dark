window.onload = () => {
  document.getElementById("transicion").style.display = "none";
};

document.getElementById("btnEntrar").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "dark" && clave === "2026") {
    localStorage.setItem("logueado", "true");

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("titulo").style.display = "none";

    const transicion = document.getElementById("transicion");
    const video = document.getElementById("videoCarga");

    transicion.style.display = "flex";
    video.play();

    setTimeout(() => {
      window.location.href = "menu.html";
    }, 3500);

  } else {
    alert("❌ Usuario o contraseña incorrectos");
  }
});
