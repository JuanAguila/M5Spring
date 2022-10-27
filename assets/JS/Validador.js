//Query de validaciones para nuestro formulario
/*var valor = document.getElementById('correo').value;
function validarEmail(valor) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
   alert("La dirección de email " + valor + " es correcta!.");
  } else {
   alert("La dirección de email es incorrecta!.");
  }
}*/

function validaForm(){
  var valor = document.getElementById('nombre').value;
  if(valor == null || valor.length == 0) {
    alert('El campo Nombre debe tener un valor...!');
      return false;
  }

  var valor2 = document.getElementById('Telefono').value
    if (valor2 == null || valor2.length == 0 ) {
      // Si no se cumple la condicion...
      alert('El campo Telefono debe tener un valor..!');
      return false;
  }

  var valor3 = document.getElementById('correo').value
  if (valor3 == null || valor3.length == 0 ) {
      // Si no se cumple la condicion...
      alert('El campo Correo debe tener un valor..!!');
      return false;
  }
/*
  var valor4 = document.getElementById('direccion').value
  if (valor4 == null || valor4.length == 0 ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo direccion debe tener un valor...!');
      return false;
  }

  var valor5 = document.getElementById('descripcion').value
  if (valor5 == null || valor5.length == 0 ) {
      // Si no se cumple la condicion...
      alert('[ERROR] Debe incorporar una descripción!');
      return false;
  }
  alert('Los datos han sido guardados, exitosamente...!!');
  return true;*/
}