const numero = "5567998978482";

document.querySelectorAll(".whatsapp").forEach(btn => {
  btn.addEventListener("click", function () {
    const app = this.dataset.app;
    const msg = `Olá, quero falar com o suporte sobre ${app}`;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");

    if (typeof fbq !== "undefined") {
      fbq("track", "Contact", {
        content_name: app
      });
    }
  });
});

document.querySelectorAll(".comprar").forEach(btn => {
  btn.addEventListener("click", function () {
    const app = this.closest(".card").querySelector("h2").innerText;

    if (typeof fbq !== "undefined") {
      fbq("track", "InitiateCheckout", {
        content_name: app
      });
    }
  });
});

document.getElementById("suporteFixo").addEventListener("click", function (e) {
  e.preventDefault();

  const msg = "Olá, preciso de ajuda para escolher um app premium.";

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");

  if (typeof fbq !== "undefined") {
    fbq("track", "Contact", {
      content_name: "Suporte Geral"
    });
  }
});