const meuBotao = document.querySelector("#btn-sortear");

function sortear() {
  const min = document.querySelector("#number-1").value;
  const max = document.querySelector("#number-2").value;

  if (min === "" || max === "") {
    Toastify({
      text: "Preencha todos os campos",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  const minValue = parseFloat(min);
  const maxValue = parseFloat(max);

  if (minValue >= maxValue) {
    Toastify({
      text: "O número do campo um deve ser menor que do campo dois",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  const resultado =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  Toastify({
    text: `Número sorteado foi ${resultado}`,
    duration: 3000,
    gravity: "top",
    position: "center",
  }).showToast();
}

meuBotao.addEventListener("click", sortear);
