const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = window.location.href
  const href = link.href
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}
links.forEach(ativarLink)


// Ativar Itens Orçamento

const parametros = new URLSearchParams(location.search);



// function ativarProduto(parametro) {
//   const elemento = document.getElementById(parametro);
//   console.log(elemento)
// }

// parametros.forEach(ativarProduto)

parametros.forEach((e) => {
  const elemento = document.getElementById(e);
  if (elemento) {
    elemento.checked = true;
    console.log(elemento)
  }
})

// perguntas
const perguntas = document.querySelectorAll('.perguntas dt');

function mudarClasse(e) {
  e.classList.toggle('ativo');
}

perguntas.forEach(e => {
  e.addEventListener('click', () => mudarClasse(e))
})


//GALERIA
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const source = event;
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    galeriaContainer.prepend(source);
  }
}

galeria.forEach((e) => {
  e.addEventListener('click', () => {
    trocarImagem(e)
  })
})

//animação
if (window.SimpleAnime) {
  new SimpleAnime()
}
