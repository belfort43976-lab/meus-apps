const numero = "5567998978482";

document.querySelectorAll(".whatsapp").forEach(botao => {
  botao.addEventListener("click", function (e) {
    e.preventDefault();

    const app = this.getAttribute("data-app");
    const mensagem = `Olá, quero garantir meu acesso ao ${app} agora!`;

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );

    if (typeof fbq !== "undefined") {
      fbq("track", "Contact", {
        app: app
      });
    }
  });
});

document.querySelectorAll(".comprar").forEach(botao => {
  botao.addEventListener("click", function () {
    const card = this.closest(".card");
    const app = card.querySelector("h2").innerText;

    if (typeof fbq !== "undefined") {
      fbq("track", "Lead", {
        app: app
      });
    }
  });
});

document.getElementById("suporteFixo").addEventListener("click", function (e) {
  e.preventDefault();

  const mensagem = "Olá, preciso de suporte para escolher um app.";

  window.open(
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );

  if (typeof fbq !== "undefined") {
    fbq("track", "Contact");
  }
});