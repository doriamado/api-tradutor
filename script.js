

  function mudarFundo() {
  const personagem = document.getElementById("personagem").value;
  const corpo = document.body;

  if (personagem === "yoda") {
    corpo.style.backgroundImage = "url('https://i.pinimg.com/736x/87/c7/d6/87c7d6d25d98960aedf67c87d047be86.jpg')";
  } else if (personagem === "shakespeare") {
    corpo.style.backgroundImage = "url('https://i.pinimg.com/736x/c2/15/05/c215052cd29197220f3e285904f79a93.jpg')";
  } else if (personagem === "minion") {
    corpo.style.backgroundImage = "url('https://i.pinimg.com/736x/b9/05/04/b90504f26fe3e6eed2370100d638f8ef.jpg')";
  } else if (personagem === "mandalorian") {
    corpo.style.backgroundImage = "url('https://i.pinimg.com/736x/62/30/d3/6230d37e6c56f93e103a7b355b2b6089.jpg')";
  } else if (personagem === "groot") {
    corpo.style.backgroundImage = "url('https://i.pinimg.com/736x/c3/0c/dc/c30cdc805e9d3c6ba51fdd6f5a5ee996.jpg')";
  }
}


function traduzir() {
  const tipo = document.getElementById("personagem").value;
  const texto = document.getElementById("textoOriginal").value;
  const url = `https://api.funtranslations.com/translate/${tipo}.json`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({ text: texto })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("resultado").innerText = data.contents.translated;
    })
    .catch(error => {
      console.error("Erro:", error);
      document.getElementById("resultado").innerText =
        "Ocorreu um erro ou o limite de uso gratuito foi excedido.";
    });
}
