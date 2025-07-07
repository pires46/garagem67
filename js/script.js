<script>
  let indiceAtual = 0;

  function mostrarAvaliacoes() {
    const container = document.getElementById("galeriaAvaliacoes");
    const cards = container.querySelectorAll(".card-avaliacao");
    const total = cards.length;

    cards.forEach((card, i) => {
      card.style.display = "none";
      card.classList.remove("destaque");
    });

    for (let i = 0; i < 3; i++) {
      const index = (indiceAtual + i) % total;
      cards[index].style.display = "block";
      if (i === 0) {
        cards[index].classList.add("destaque");
      }
    }
  }

  function moverGaleria(direcao) {
    const container = document.getElementById("galeriaAvaliacoes");
    const total = container.querySelectorAll(".card-avaliacao").length;
    indiceAtual = (indiceAtual + direcao + total) % total;
    mostrarAvaliacoes();
  }

  document.addEventListener("DOMContentLoaded", mostrarAvaliacoes);
</script>
</body>
b