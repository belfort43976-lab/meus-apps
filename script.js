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

document.querySelectorAll(".suporte").forEach(btn => {
  btn.addEventListener("click", function () {
    const app = this.dataset.app || "Suporte";

    if (typeof fbq !== "undefined") {
      fbq("track", "Contact", {
        content_name: app
      });
    }
  });
});

const suporteFixo = document.getElementById("suporteFixo");

if (suporteFixo) {
  suporteFixo.addEventListener("click", function () {
    if (typeof fbq !== "undefined") {
      fbq("track", "Contact", {
        content_name: "Suporte Geral"
      });
    }
  });
}