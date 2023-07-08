var objetos = []; // Arreglo para almacenar los objetos agregados

function agregarObjeto() {
  var tipo = document.getElementById("tipo").value;
  var nombre = document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  var imagen = document.getElementById("imagen").value;

  // Validación de datos
  if (nombre === "" || precio === "" || imagen === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear objeto y agregarlo al arreglo
  var objeto = {
    tipo: tipo,
    nombre: nombre,
    precio: precio,
    imagen: imagen
  };
  objetos.push(objeto);

  // Actualizar contador
  mostrarContador();
}

function mostrarContador() {
  var contador = document.getElementById("contador");
  contador.innerHTML = "<h3>Contador</h3>";
  contador.innerHTML += "<ul>";
  for (var i = 0; i < objetos.length; i++) {
    contador.innerHTML += "<li>" + objetos[i].tipo + ": " + objetos[i].nombre + " - $" + objetos[i].precio + "</li>";
  }
  contador.innerHTML += "</ul>";
}