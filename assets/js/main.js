import {Reproductor } from "../modulos/clases.js";



let musica = new Reproductor(
    "https://www.youtube.com/embed/Y9sXv_UekNE",
    "musica"
  );

musica.playMultimedia();
musica.setInicio(4);

let peliculas = new Reproductor(
    "https://www.youtube.com/embed/b_D3ysY_QCA",
    "peliculas"
  );

  peliculas.playMultimedia();
  peliculas.setInicio(12);

  let series = new Reproductor(
    "https://www.youtube.com/embed/KKziOmsJxzE",
    "series"
  );

  series.playMultimedia();
  series.setInicio(5);

 