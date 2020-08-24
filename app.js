function validarCampos() {
  var txtnome = document.getElementById("nome");
  var txtemail = document.getElementById("email");
  var numtelefone = document.getElementById("telefone");

  var nome = txtnome.value;
  var email = txtemail.value;
  var telefone = numtelefone.value;
  if (nome == "" || nome == isNaN) {
    alert("Por favor digite seu nome");
  }
  if (email == "") {
    alert("Por favor digite seu email");
  }
  if (telefone == "") {
    alert("Por favor digite seu telefone");
  } else {
    alert("Sucesso!");
  }
}
