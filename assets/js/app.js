const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
  },
];

const galeria = document.querySelector("#galeria");
const inputFiltro = document.querySelector("#filtro");
const btnFiltrar = document.querySelector("#btnFiltrar");
const btnMostrarTodos = document.querySelector("#btnMostrarTodos");

function renderizarPersonajes(listaPersonajes) {
  galeria.innerHTML = "";

  listaPersonajes.forEach(({ id, nombre, imagen }) => {
    galeria.innerHTML += `
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card card-personaje h-100 shadow-sm">
          <img src="${imagen}" class="card-img-top" alt="${nombre}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${nombre}</h5>
          </div>
        </div>
      </div>
    `;
  })
}

function filtrarPersonajes() {
  const textoFiltro = inputFiltro.value.trim().toLowerCase();

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(textoFiltro)
  );

  renderizarPersonajes(personajesFiltrados);
}
btnFiltrar.addEventListener("Click" , filtrarPersonajes);

btnMostrarTodos.addEventListener("click", () => {
  inputFiltro.value = "";
  renderizarPersonajes(personajes);
});

renderizarPersonajes(personajes);