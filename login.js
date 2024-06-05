const $ = (elemento) => document.querySelector(elemento);

$("#entrar").addEventListener("click", (ev) => {
  ev.preventDefault();

  let string = localStorage.getItem("usuario");
  let usuarioCadastrado = JSON.parse(string);

  let { login, senha } = usuarioCadastrado;

  let dadosCorretos =
    login === $("#login").value && senha === $("#senha").value;
  console.log(dadosCorretos);

  if (!dadosCorretos) {
    alert("Dados inválidos!");
    return;
  }

  window.location.href = "./logado.html";
});