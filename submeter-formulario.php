<?php
// Verifica que el formulario haya sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtiene los valores enviados por el formulario
  $nombre = $_POST["introducir_nombre"];
  $email = $_POST["introducir_email"];
  $telefono = $_POST["introducir_telefono"];
  $website = $_POST["introducir_website"];
  $asunto = $_POST["introducir_asunto"];
  $mensaje = $_POST["introducir_mensaje"];

  // Envía el mensaje por correo electrónico
  $to = "pablo.camposv94@gmail.com"; // Cambia esto por el correo electrónico del destinatario
  $subject = "Nuevo mensaje de contacto desde el sitio web";
  $message = "Nombre: $nombre\n";
  $message .= "Email: $email\n";
  $message .= "Teléfono: $telefono\n";
  $message .= "Sitio web: $website\n\n";
  $message .= "Asunto: $asunto\n";
  $message .= "Mensaje: \n$mensaje";
  $headers = "From: $email\r\nReply-To: $email";

  if (mail($to, $subject, $message, $headers)) {
    // Si el correo electrónico se envió correctamente, muestra un mensaje de éxito
    echo "¡Gracias! Tu mensaje ha sido enviado correctamente.";
  } else {
    // Si hubo un error al enviar el correo electrónico, muestra un mensaje de error
    echo "Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
  }
}
?>