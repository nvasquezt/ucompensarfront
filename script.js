const movies = [
  { title: "Argo", year: 2012, image: "https://es.web.img2.acsta.net/medias/nmedia/18/90/56/49/20261805.jpg", genre: "Drama, Thriller", resume: "Una película basada en hechos reales sobre un intento de rescate de rehenes en Irán." },
  { title: "Cisne Negro", year: 2010, image: "https://pics.filmaffinity.com/Cisne_negro-861293346-large.jpg", genre: "Drama, Thriller, Terror", resume: "Un thriller psicológico que sigue la vida de una bailarina de ballet mientras lucha con su identidad y la presión de la competencia." },
  { title: "El Artista", year: 2011, image: "https://pics.filmaffinity.com/The_Artist-619065939-large.jpg", genre: "Drama, Romance", resume: "Una película muda que narra la historia de un actor de cine mudo y una joven actriz en la transición al cine sonoro." },
  { title: "El Discurso del Rey", year: 2010, image: "https://es.web.img3.acsta.net/medias/nmedia/18/82/26/21/19609697.jpg", genre: "Biografía, Drama, Historia", resume: "La historia del rey Jorge VI de Gran Bretaña, quien lucha por superar su tartamudez con la ayuda de un terapeuta del habla poco ortodoxo." },
  { title: "El juego de la fortuna", year: 2011, image: "https://mx.web.img2.acsta.net/pictures/19/05/22/00/15/2447754.jpg", genre: "Biografía, Drama, Deporte", resume: "Basada en la historia real de Billy Beane, gerente general de los Oakland Athletics, y su intento de montar un equipo competitivo con un presupuesto limitado." },
  { title: "El Lado Luminoso de la Vida", year: 2012, image: "https://cartelera.montevideo.com.uy/imagenes_espectaculos/moviedetail13/10736.jpg", genre: "Comedia, Drama, Romance", resume: "La historia de Pat Solatano, un hombre con trastorno bipolar, mientras intenta reconstruir su vida y ganarse a su ex esposa." },
  { title: "El Vencedor", year: 2010, image: "https://pics.filmaffinity.com/Vencedor-379534265-large.jpg", genre: "Drama, Deporte", resume: "Basada en la historia real de Micky Ward, un boxeador de peso wélter, y su hermano Dicky Eklund, mientras luchan por el éxito en el boxeo." },
  { title: "Historias cruzadas", year: 2011, image: "https://mx.web.img2.acsta.net/c_310_420/pictures/18/05/10/01/28/4940209.jpg", genre: "Drama", resume: "La historia de varias mujeres afroamericanas en la década de 1960 en el sur de Estados Unidos, que desafían las normas sociales y raciales de la época." },
  { title: "La Red Social", year: 2010, image: "https://pics.filmaffinity.com/La_Red_Social-324516602-large.jpg", genre: "Biografía, Drama", resume: "La historia del ascenso de Mark Zuckerberg, fundador de Facebook, desde su dormitorio en Harvard hasta convertirse en uno de los hombres más jóvenes y ricos del mundo." },
  { title: "La Vida de Pi", year: 2012, image: "https://es.web.img3.acsta.net/medias/nmedia/18/92/99/86/20312878.jpg", genre: "Aventura, Drama, Fantasía", resume: "Un joven indio llamado Pi sobrevive a un naufragio en alta mar y se encuentra a la deriva en un bote salvavidas con un tigre de Bengala." },
  { title: "Lincoln", year: 2012, image: "https://es.web.img2.acsta.net/pictures/13/12/11/13/17/291181.jpg", genre: "Biografía, Drama, Historia", resume: "La historia del presidente de los Estados Unidos, Abraham Lincoln, mientras lucha por aprobar la Decimotercera Enmienda a la Constitución, que aboliría la esclavitud en el país." },
  { title: "Los Descendientes", year: 2011, image: "https://pics.filmaffinity.com/Los_descendientes-233460189-large.jpg", genre: "Comedia, Drama", resume: "La historia de un rico terrateniente de Hawái que intenta reconectar con sus hijas después de que su esposa sufre un accidente de bote y queda en coma." },
  { title: "Medianoche en París", year: 2011, image: "https://pics.filmaffinity.com/Midnight_in_Paris-739821053-large.jpg", genre: "Comedia, Fantasía, Romance", resume: "Un escritor estadounidense en París se encuentra viajando en el tiempo y es transportado misteriosamente a la década de 1920, donde conoce a figuras icónicas del arte y la literatura." },
  { title: "Origen", year: 2010, image: "https://es.web.img3.acsta.net/medias/nmedia/18/72/41/74/20198901.jpg", genre: "Acción, Aventura, Ciencia Ficción", resume: "Un ladrón de ideas entra en los sueños de las personas para robar secretos corporativos, pero se le asigna una tarea diferente: implantar una idea en la mente de alguien." },
  { title: "Toy Story 3", year: 2010, image: "https://es.web.img3.acsta.net/medias/nmedia/18/72/55/90/20125635.jpg", genre: "Animación, Aventura, Comedia", resume: "Woody, Buzz Lightyear y sus amigos juguetes se enfrentan a nuevos desafíos cuando son donados a una guardería después de que su dueño, Andy, se va a la universidad." },
];


function renderMovies(movieArray) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  movieArray.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card", "h-100");

    const movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieImage.classList.add("card-img-top");

    const movieTitle = document.createElement("h5");
    movieTitle.textContent = movie.title;
    movieTitle.classList.add("card-title", "text-center", "mt-3");

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.year;
    movieYear.classList.add("card-text", "text-center");

    const moreInfoButton = document.createElement("button");
    moreInfoButton.textContent = "Detalle";
    moreInfoButton.classList.add("btn", "btn-primary", "w-50", "more-info-btn", "mx-auto", "mt-3", "mb-3");
    moreInfoButton.setAttribute("data-bs-toggle", "modal");
    moreInfoButton.setAttribute("data-bs-target", "#movieModal");
    moreInfoButton.setAttribute("data-movie-index", index);

    cardBody.appendChild(movieImage);
    cardBody.appendChild(movieTitle);
    cardBody.appendChild(movieYear);
    cardBody.appendChild(moreInfoButton);
    card.appendChild(cardBody);
    movieList.appendChild(card);
  });
}


function showMovieDetails(movie) {
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalYear = document.getElementById("modalYear");
  const modalGenre = document.getElementById("modalGenre");
  const modalSynopsis = document.getElementById("modalSynopsis");

  modalTitle.textContent = movie.title;
  modalImage.src = movie.image;
  modalYear.textContent = movie.year;
  modalGenre.textContent = movie.genre;
  modalSynopsis.textContent = movie.resume;
}

function renderCarousel(movieArray) {
  const carouselInner = document.querySelector("#carouselIndicators .carousel-inner");
  carouselInner.innerHTML = "";

  movieArray.forEach((movie, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    const movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieImage.classList.add("d-block", "w-100");

    carouselItem.appendChild(movieImage);
    carouselInner.appendChild(carouselItem);
  });
}

function renderGenreOptions() {
  const genreSelect = document.getElementById("genreSelect");
  const genres = new Set();
  genres.add("");

  movies.forEach(movie => {
    movie.genre.split(", ").forEach(genre => genres.add(genre));
  });

  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre === "" ? "Todos los géneros" : genre;
    genreSelect.appendChild(option);
  });
}

function filterMovies() {
  const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  const selectedGenre = document.getElementById("genreSelect").value;

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  renderMovies(filteredMovies);
  renderCarousel(filteredMovies);
}

document.getElementById("searchInput").addEventListener("keyup", filterMovies);
document.getElementById("genreSelect").addEventListener("change", filterMovies);

renderMovies(movies);
renderCarousel(movies);
renderGenreOptions();

const moreInfoButtons = document.querySelectorAll(".more-info-btn");
moreInfoButtons.forEach(button => {
  button.addEventListener("click", () => {
    const movieIndex = button.dataset.movieIndex;
    showMovieDetails(movies[movieIndex]);
  });
});
