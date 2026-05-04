const numeroWhatsApp = "5567998978482";

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const app = this.closest(".card").querySelector("h2").innerText;

    if (typeof fbq !== "undefined") {
      fbq("track", "InitiateCheckout", {
        content_name: app
      });
    }
  });
});

document.querySelectorAll(".suporte").forEach(botao => {
  botao.addEventListener("click", function(e) {
    e.preventDefault();

    const app = this.getAttribute("data-app");

    const mensagem = `Gostaria de saber mais sobre ${app}. Vi que é uma assinatura anual, pode me explicar como funciona?`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    if (typeof fbq !== "undefined") {
      fbq("track", "Contact", {
        content_name: app
      });
    }
  });
});

const suporteFixo = document.getElementById("suporteFixo");

if (suporteFixo) {
  suporteFixo.addEventListener("click", function (e) {
    e.preventDefault();

    const mensagem = "Gostaria de saber mais sobre as assinaturas anuais disponíveis. Pode me explicar como funciona?";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    if (typeof fbq !== "undefined") {
      fbq("track", "Contact", {
        content_name: "Suporte Geral"
      });
    }
  });
}