const visitaForm = document.getElementById("visita-form");

visitaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const telefoneInput = document.getElementById("telefone");
  const horarioSelect = document.getElementById("horario");

  const nome = nomeInput.value;
  const email = emailInput.value;
  const telefone = telefoneInput.value;
  const horario = horarioSelect.value;

  console.log("Nome: " + nome);
  console.log("E-mail: " + email);
  console.log("Telefone: " + telefone);
  console.log("Horário: " + horario);

  visitaForm.reset();
});
