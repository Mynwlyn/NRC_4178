// La función que maneja la lógica de inicio de sesión
function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  // Clave estática para la demo
  const CORREO = "miyaball@gmail";
  const emailInput = document.getElementById("email").value;
  const CLAVE_SECRETA = "miyaball";
  const passwordInput = document.getElementById("password").value;

  // 2. Realizar la verificación
  if (emailInput.toLowerCase() === CORREO) {
    if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
      alert("¡Acceso concedido! Bienvenido.");
      // Redirige a tu página principal
      window.location.href = "LandingPage.html";
    } else {
      alert("Clave incorrecta. Inténtalo de nuevo.");
      document.getElementById("password").value = "";
    }
  } else {
    alert("Correo no encontrado. Inténtelo con un correo existente.");
    document.getElementById("Email").value = "";
  }

  return false;
}
