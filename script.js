const numero = "5567998978482";

document.querySelectorAll(".whatsapp").forEach(btn => {
  btn.addEventListener("click", function () {
    const app = this.dataset.app;
    const msg = `Olá, quero comprar ${app}`;

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