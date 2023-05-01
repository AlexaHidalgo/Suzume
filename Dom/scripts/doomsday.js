// Cambiar el texto de un elemento div por "¡Hola Mundo!"
function cambioTexto() {
    document.getElementById("Div").innerHTML = "¡Hola Mundo!";
  }
  
  // Cambiar el color de fondo de un elemento div
  function cambioFondo() {
    document.getElementById("Divv").style.backgroundColor = "#D4AF37";
  }
  
  // Mostrar una alerta con el mensaje "¡Haz hecho clic!"
  function mostrarAlerta() {
    alert("¡Haz hecho clic!");
  }
  
  // Cambiar el estilo de un elemento div ocultándolo y cambiando su texto por "Ocultar" o "Mostrar"
  function cambioEstiloYTexto() {
    var div = document.getElementById('miDiv');
    let button = document.getElementById('button');

    if (button.textContent == 'Ocultar') {
        button.textContent = 'Mostrar';
        div.style.display='none';
    } else {
        button.textContent = 'Ocultar';
        div.style.display = 'block';
    } 
  }