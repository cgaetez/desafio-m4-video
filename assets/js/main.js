import { Multimedia, Reproductor } from "../modulos/clases.js";



let musica = new Reproductor(
    "https://www.youtube.com/embed/FJfFZqTlWrQ?si=0EXqluW-MfSB-HOv",
    "musica"
  );

musica.playMultimedia();
musica.setInicio(4);

let peliculas = new Reproductor(
    "https://www.youtube.com/embed/b_D3ysY_QCA?si=8MK27KPP8gsHTqwj",
    "peliculas"
  );

  peliculas.playMultimedia();
  peliculas.setInicio(12);

  let series = new Reproductor(
    "https://www.youtube.com/embed/KKziOmsJxzE?si=WKFRLPC8lx6g3HCK",
    "series"
  );

  series.playMultimedia();
  series.setInicio(5);

 