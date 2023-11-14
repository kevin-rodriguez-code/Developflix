import peliculas from './peliculas.js'
let generoAccion = 0;
generoAccion = peliculas.filter(element => element.genre_ids.includes(28));
console.log(generoAccion);

let generoThriller = 0;
generoThriller = peliculas.filter(element => element.genre_ids.includes(53));
console.log(generoThriller);

let generoAventura = 0;
generoAventura = peliculas.filter(element => element.genre_ids.includes(12));
console.log(generoAventura);

//<---------------------------------------------------------------->

let genero28Div = document.getElementById("genero-28");

generoAccion.forEach(pelicula => {
  let peliculaDiv = document.createElement("div");

  let tituloPeli = document.createElement("p");
  tituloPeli.textContent = pelicula.title;
  peliculaDiv.appendChild(tituloPeli);

  let imagen = document.createElement("img");
  imagen.src = "https://image.tmdb.org/t/p/w500/" + pelicula.poster_path;
  imagen.alt = pelicula.title;
  peliculaDiv.appendChild(imagen);

  genero28Div.appendChild(peliculaDiv);
})

//<----------------------------------------------------------------->

let genero53Div = document.getElementById("genero-53");

generoThriller.forEach(pelicula => {
  let peliculaDiv = document.createElement("div");

  let tituloPeli = document.createElement("p");
  tituloPeli.textContent = pelicula.title;
  peliculaDiv.appendChild(tituloPeli);

  let imagen = document.createElement("img");
  imagen.src = "https://image.tmdb.org/t/p/w500/" + pelicula.poster_path;
  imagen.alt = pelicula.title;
  peliculaDiv.appendChild(imagen);

  genero53Div.appendChild(peliculaDiv);
})
//<----------------------------------------------------------------->

let genero12Div = document.getElementById("genero-12");

generoAventura.forEach(pelicula => {
  let peliculaDiv = document.createElement("div");

  let tituloPeli = document.createElement("p");
  tituloPeli.textContent = pelicula.title;
  peliculaDiv.appendChild(tituloPeli);

  let imagen = document.createElement("img");
  imagen.src = "https://image.tmdb.org/t/p/w500/" + pelicula.poster_path;
  imagen.alt = pelicula.title;
  peliculaDiv.appendChild(imagen);

  genero12Div.appendChild(peliculaDiv);
})