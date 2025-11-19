const peliculas = [
  {
    id: 1,
    nombre: "El sexto sentido",
    director: "M. Night Shyamalan",
    clasificacion: "Drama / Suspense",
    recaudacion: "$672 millones",
    cartelera: "https://www.ecartelera.com/carteles/5400/5409/001.jpg",
    nota: 8,
    actores: [
      {
        nombre: "Bruce Willis",
        fechaNacimiento: "19/03/1955",
        biografia: "Bruce Willis es un actor, productor y cantante estadounidense conocido por su papel en 'Jungla de cristal' y 'El sexto sentido'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg/330px-Bruce_Willis_by_Gage_Skidmore_3.jpg"
      },
      {
        nombre: "Haley Joel Osment",
        fechaNacimiento: "10/04/1988",
        biografia: "Haley Joel Osment es un actor estadounidense conocido por su interpretaciÃ³n del niÃ±o que 've gente muerta' en 'El sexto sentido'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Haley_Joel_Osment_TIFF_2014.jpg/500px-Haley_Joel_Osment_TIFF_2014.jpg"
      },
      {
        nombre: "Toni Collette",
        fechaNacimiento: "01/11/1972",
        biografia: "Toni Collette es una actriz australiana nominada al Ã“scar por su papel en 'El sexto sentido'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Toni_Collette_%288968233309%29.jpg/330px-Toni_Collette_%288968233309%29.jpg"
      }
    ],
    resumen: "El Dr. Malcolm Crowe, un psicÃ³logo infantil, trata de ayudar a un niÃ±o que afirma ver espÃ­ritus. Una inquietante historia sobre culpa y redenciÃ³n."
  },
  {
    id: 2,
    nombre: "Pulp Fiction",
    director: "Quentin Tarantino",
    clasificacion: "Crimen / Comedia negra",
    recaudacion: "$213 millones",
    cartelera: "https://www.ecartelera.com/carteles/200/286/001.jpg",
    nota: 9,
    actores: [
      {
        nombre: "John Travolta",
        fechaNacimiento: "18/02/1954",
        biografia: "John Travolta es un actor estadounidense que interpretÃ³ a Vincent Vega en 'Pulp Fiction'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/John_Travolta_Cannes_2018.jpg/330px-John_Travolta_Cannes_2018.jpg"
      },
      {
        nombre: "Uma Thurman",
        fechaNacimiento: "29/04/1970",
        biografia: "Uma Thurman es una actriz estadounidense que interpretÃ³ a Mia Wallace en 'Pulp Fiction'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Uma_Thurman_Cannes_2017_%28cropped%29.jpg/330px-Uma_Thurman_Cannes_2017_%28cropped%29.jpg"
      },
      {
        nombre: "Samuel L. Jackson",
        fechaNacimiento: "21/12/1948",
        biografia: "Samuel L. Jackson es un actor estadounidense que dio vida al icÃ³nico Jules Winnfield en 'Pulp Fiction'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/500px-SamuelLJackson.jpg"
      }
    ],
    resumen: "Varios relatos entrelazados de criminales en Los Ãngeles, con diÃ¡logos ingeniosos, violencia estilizada y humor negro caracterÃ­stico de Tarantino."
  },
  {
    id: 3,
    nombre: "300",
    director: "Zack Snyder",
    clasificacion: "AcciÃ³n / Ã‰pica",
    recaudacion: "$456 millones",
    cartelera: "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",
    nota: 7,
    actores: [
      {
        nombre: "Gerard Butler",
        fechaNacimiento: "13/11/1969",
        biografia: "Gerard Butler es un actor escocÃ©s que interpreta al rey LeÃ³nidas de Esparta en '300'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gerard_Butler_%2829681162176%29.jpg/330px-Gerard_Butler_%2829681162176%29.jpg"
      },
      {
        nombre: "Lena Headey",
        fechaNacimiento: "03/10/1973",
        biografia: "Lena Headey es una actriz britÃ¡nica que interpreta a la reina Gorgo en '300'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lena_Headey_%2847086135862%29_%28cropped%29.jpg/330px-Lena_Headey_%2847086135862%29_%28cropped%29.jpg"
      }
    ],
    resumen: "Basada en la novela grÃ¡fica de Frank Miller, narra la batalla de las TermÃ³pilas donde 300 espartanos lucharon contra el ejÃ©rcito persa."
  },
  {
    id: 4,
    nombre: "El silencio de los corderos",
    director: "Jonathan Demme",
    clasificacion: "Thriller / Crimen",
    recaudacion: "$272 millones",
    cartelera: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    nota: 9,
    actores: [
      {
        nombre: "Jodie Foster",
        fechaNacimiento: "19/11/1962",
        biografia: "Jodie Foster es una actriz estadounidense ganadora del Ã“scar por su papel de Clarice Starling en 'El silencio de los corderos'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jodie_Foster-8667.jpg/500px-Jodie_Foster-8667.jpg"
      },
      {
        nombre: "Anthony Hopkins",
        fechaNacimiento: "31/12/1937",
        biografia: "Anthony Hopkins es un actor galÃ©s cÃ©lebre por su interpretaciÃ³n del Dr. Hannibal Lecter.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/AnthonyHopkins10TIFF.jpg/500px-AnthonyHopkins10TIFF.jpg"
      }
    ],
    resumen: "La agente del FBI Clarice Starling busca la ayuda del brillante pero peligroso Dr. Hannibal Lecter para atrapar a un asesino en serie."
  },
  {
    id: 5,
    nombre: "Forrest Gump",
    director: "Robert Zemeckis",
    clasificacion: "Drama / Comedia",
    recaudacion: "$678 millones",
    cartelera: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    nota: 10,
    actores: [
      {
        nombre: "Tom Hanks",
        fechaNacimiento: "09/07/1956",
        biografia: "Tom Hanks es un actor estadounidense ganador del Ã“scar por interpretar a Forrest Gump.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg"
      },
      {
        nombre: "Robin Wright",
        fechaNacimiento: "08/04/1966",
        biografia: "Robin Wright es una actriz estadounidense que interpreta a Jenny Curran en 'Forrest Gump'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Robin_Wright_Cannes_2017_%28cropped%29.jpg/330px-Robin_Wright_Cannes_2017_%28cropped%29.jpg"
      }
    ],
    resumen: "Forrest Gump, un hombre con un corazÃ³n puro, vive una vida extraordinaria mientras se cruza con momentos clave de la historia de EE.UU."
  },
  {
    id: 6,
    nombre: "Concursante",
    director: "Rodrigo CortÃ©s",
    clasificacion: "Drama",
    recaudacion: "$1.2 millones",
    cartelera: "https://www.ecartelera.com/carteles/1300/1364/001.jpg",
    nota: 7,
    actores: [
      {
        nombre: "Leonardo Sbaraglia",
        fechaNacimiento: "30/06/1970",
        biografia: "Leonardo Sbaraglia es un actor argentino que protagoniza 'Concursante' como MartÃ­n Circo MartÃ­n.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg/330px-Leonardo_Sbaraglia_en_la_presentaci%C3%B3n_de_la_segunda_temporada_de_%E2%80%9C99%2C99%25._La_ciencia_de_las_Abuelas%E2%80%9D_%2816670703837%29_%28cropped%29.jpg"
      },
      {
        nombre: "Miryam Gallego",
        fechaNacimiento: "30/11/1976",
        biografia: "Miryam Gallego es una actriz espaÃ±ola conocida por su papel de Lucrecia en la serie 'Ãguila Roja', asÃ­ como por sus trabajos en televisiÃ³n, teatro y cine. Ha participado tambiÃ©n en producciones como 'Periodistas' y 'Estoy vivo'.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Miryam_Gallego.jpg/330px-Miryam_Gallego.jpg"
      }
    ],
    resumen: "MartÃ­n Circo MartÃ­n gana el mayor concurso de televisiÃ³n de la historia, pero descubre que su fortuna no es lo que parece."
  }
];

export default peliculas;