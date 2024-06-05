const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  let nome = $("#nome").value;
  let email = $("#email").value;
  let login = $("#login").value;
  let senha = $("#senha").value;
  let confirmaSenha = $("#confirma-senha").value;

  let senhaConfirmada = senha === confirmaSenha;

  if (!senhaConfirmada) {
    alert("Sua confirmação de senha não confere.\nPor favor verifique.");
    return;
  }

  let tudoPreenchido =
    nome.length !== 0 &&
    email.length !== 0 &&
    login.length !== 0 &&
    senhaConfirmada.length !== 0 &&
    senha.length !== 0;

  if (tudoPreenchido === false) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  let usuarioCadastrado = {
    email,
    nome,
    login,
    senha,
    confirmaSenha,
  };

 let string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "./login.html";
});