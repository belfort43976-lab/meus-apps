// =========================
// TRACKING PIXEL (EVENTOS)
// =========================

// BOTÕES DE COMPRA
document.querySelectorAll('.btn').forEach(botao => {
  botao.addEventListener('click', () => {

    if (typeof fbq !== "undefined") {
      fbq('track', 'InitiateCheckout');
    }

    console.log('Clique em comprar');
  });
});

// BOTÕES DE SUPORTE
document.querySelectorAll('.btn2').forEach(botao => {
  botao.addEventListener('click', () => {

    if (typeof fbq !== "undefined") {
      fbq('track', 'Contact');
    }

    console.log('Clique no suporte');
  });
});


// =========================
// EFEITO VISUAL NOS BOTÕES
// =========================

const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 0 20px #00ff88";
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});


// =========================
// LOG DE INICIALIZAÇÃO
// =========================

console.log("🔥 Script carregado e funcionando");