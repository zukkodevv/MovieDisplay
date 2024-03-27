document.addEventListener("DOMContentLoaded", function () {
  //! Archivo Javascript para la página moreMovies adicional */
  const peliculas = [
    {
      name: "Advenger Infinty War",
      description:
        "Minutos después de los acontecimientos en Thor: Ragnarok, la nave de los sobrevivientes de Asgard es súbitamente atacada por Thanos y sus secuaces, la Orden Negra - Cull Obsidian, Proxima Midnight, Ebony Maw y Corvus Glaive - los cuales caminan entre los cadáveres de todos los Asgardianos asesinados. Thanos enfrenta a Loki y exige el Teseracto, o de lo contrario matará a Thor. Thanos ya tiene la Gema del Poder en el Guantelete del Infinito después de haberla adquirido a la fuerza en el planeta Xandar. Loki deja que Thanos proceda a matar a su hermano, pero cede al último momento y le muestra el Teseracto. Sin embargo, Hulk aparece y ataca a Thanos, dándole unos buenos golpes antes de que Thanos lo derrote fácilmente, gracias a la Gema del Poder, golpeándolo contra una pared. Heimdall usa lo último que le queda de energía oscura para enviar a Hulk a través del Bifrost hacia la Tierra antes de que Thanos pueda matarlo. Sin embargo, Thanos no conforme con esto empala a Heimdall en el corazón, matándolo. Loki parece rendirse ante Thanos y unirse a él, pero en su lugar hace un inútil intento de matarlo. Thanos agarra a Loki por el cuello y se lo rompe, matándolo, mientras Thor solo puede mirar impontentemente la situación. Thanos abre el Teseracto para obtener la Gema del Espacio y se va con sus hijos. Thor se arrastra hacia el cuerpo sin vida de Loki mientras que la nave explota.",
      category: "Acción | Ciencia Ficsión | Aventura | Comedia",
      Rating: "9.5",
      img: "https://www.cinemascomics.com/wp-content/uploads/2018/04/poster-imax-vengadores-infinity-war.jpg",
    },
    {
      name: "Avengers: Age of Ultron",
      description:
        "En un país de Europa del Este llamado Sokovia, Los Vengadores conformados por Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff y Clint Barton atacan una fortaleza de HYDRA, con la misión de recuperar el Cetro de Loki de manos del Barón Wolfgang Von Strucker, quien ha estado experimentando con humanos usando su poder. Pese a los esfuerzos de Strucker por ocultar a sus dos únicos éxitos - los gemelos Pietro Maximoff, que posee supervelocidad, y Wanda Maximoff, que puede manipular mentes y proyectar energía – ambos terminan enfrentándose a los héroes y escapan, mientras Strucker es capturado.6​ En la base de los Vengadores, Stark y Banner descubren una Inteligencia artificial dentro de la gema del cetro, y deciden usarlo secretamente para completar el programa de defensa global llamado Ultron por presión de Stark (cuya paranoia por una segunda invasión había sido revivida por los poderes de Wanda). La inteligencia Ultron, creyendo que debe eliminar a la humanidad para salvar a la tierra, elimina la inteligencia artificial J.A.R.V.I.S. y ataca a los Vengadores interrumpiendo su fiesta de celebración. Habiendo escapado con el cetro, Ultrón usa los recursos de Strucker en su base de Sokovia para construirse un cuerpo avanzado y un ejército de robots.",
      category: "Acción | Ciencia Ficsión | Aventura | Comedia",
      Rating: "9.7",
      img: "https://images-na.ssl-images-amazon.com/images/I/61ql%2BmHJetL._SY445_.jpg",
    },
    {
      name: "Thor Ragnarok",
      description:
        "Dos años después de la Batalla de Sokovia, Thor ha sido capturado por misteriosas fuerzas enemigas. Se dirige hacia un esqueleto que comparte su jaula por haber estado buscando las Gemas del Infinito, pero sin haber encontrado nada. Él dice que algunas veces debes ser capturado para obtener una respuesta directa de alguien. Ese alguien resulta ser Surtur. Thor logra liberarse de la jaula, y llega al mundo de Surtur, en el cual este último se burla de él con el conocimiento de que Odín ya no está más en Asgard y que la ausencia de Thor lo deja vulnerable. Él le anuncia que el Ragnarök (el fin de Asgard) estaba cerca y que vendrá por su mano, y no hay nada que Thor pueda hacer para detenerlo, aunque tontamente le confiesa que su corona es la fuente de sus poderes.",
      category: "Acción | Ciencia Ficsión | Aventura | Comedia",
      Rating: "9.6",
      img: "https://www.discshop.se/img/front_large/155343/thor_3_ragnarok.jpg",
    },
    {
      name: "Iron Man 3",
      description:
        "En un flashback de 1999 y en plena víspera de Año Nuevo 2000 de en Berna, Suiza, Tony Stark da una conferencia sobre los circuitos integrados estando en estado de ebriedad. Después de su presentación, es abordado por un científico lisiado, Aldrich Killian, quien busca la ayuda de Tony para su proyecto, A.I.M. (Avanzadas Ideas Mecánicas). Tony le dice a Killian que se encontrara con él en la azotea en cinco minutos. Killian, desesperado, espera durante horas, pero el propio Stark no se presenta por lo que al perecer Stark le mintió. Tony y Maya Hansen pasan la noche juntos. Además, ambos tratan de arreglar el error fatal del virus Extremis desarrollado por Maya. Algún tiempo después de los acontecimientos de Los Vengadores, un frecuentado Tony ha construido obsesivamente varios trajes de Iron Man en su mansión debido al trauma del agujero de gusano lo que en parte le causa ataques de ansiedad si alguien le recuerda lo que pasó aquel día. Esto causa fricción con su novia, la nueva jefa de Stark Industries Pepper Potts.6​",
      category: "Acción | Ciencia Ficsión | Aventura | Comedia",
      Rating: "9.2",
      img: "https://images-na.ssl-images-amazon.com/images/I/8189A%2B9%2Bf9L._SY445_.jpg",
    },
    {
      name: "Black Panther",
      description:
        "Siglos atrás, cuando cinco tribus africanas luchaban por un meteorito formado de Vibranium, un metal alienígena, un guerrero-chamán ingirió una hierba en forma de corazón afectada por el metal y adquiriendo con esto habilidades sobrehumanas. Con esto, se convierte en el primer Pantera Negra y así dirigiendo a las cuatro tribus (mientras que la tribu Jabari se exilia en las montañas) y así se forma la nación de Wakanda. A medida que pasa el tiempo, los wakandianos utilizan el vibranium para desarrollar una tecnología altamente avanzada, y al mismo tiempo aislarse del resto del mundo y hacerse pasar por un país del Tercer Mundo.",
      category: "Acción | Ciencia Ficsión | Aventura | Comedia",
      Rating: "9.5",
      img: "https://cdn.britannica.com/700x450/36/198336-004-0F77A000.jpg",
    },
    {
      name: "Batman vs Superman",
      description:
        "Bruce Wayne llega a Metrópolis al enterarse de que la ciudad está siendo atacada por kryptonianos. El empresario intenta llegar a Empresas Wayne para evacuar a sus empleados pero el edificio es destruido antes de que Jack O'Dwyer, hombre de confianza de Bruce, logre salir muriendo en el incidente. La pelea entre Superman y el general Zod no solo se ha cobrado la vida de O'Dwyer sino que ha causado la muerte de decenas de personas y una gran destrucción en la ciudad, y Wayne ve a Superman como una amenaza potencial para la humanidad.",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.7",
      img: "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      name: "Batman El Caballero De La Noche",
      description:
        "Nueve meses después de los eventos de la primera película, una banda de ladrones disfrazados con máscaras de payasos llevan a cabo un violento robo en uno de los bancos de la mafia de Gotham City, pero los asaltantes desconocen que entre ellos se encuentra el Joker (Heath Ledger), quien les había ordenado traicionarse y asesinarse unos a otros, con la finalidad de repartir entre menos el botín. Finalmente el Joker asesina al último de sus cómplices y escapa en un autobús escolar. Más tarde, un grupo de imitadores de Batman intenta interrumpir una reunión de traficantes con el Dr. Jonathan Crane (Cillian Murphy), cuando de pronto el verdadero Batman (Christian Bale) aparece y aprehende a todos los delincuentes junto con los impostores, pero sufre lesiones que le conducen a diseñar un traje nuevo que le permita mayor movilidad, rapidez y protección contra perros.",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.8",
      img: "http://allcalidad.com/wp-content/uploads/2016/05/1-542.jpg",
    },
    {
      name: "Justice Leage",
      description:
        "Miles de años atrás, en la antigüedad, Steppenwolf y su ejército de parademonios intentaron conquistar y rehacer la Tierra a través de las energías combinadas de las Cajas Madre, antes de que sus planes fueran frustrados por un ejército unificado que incluyó a las amazonas, atlantes, Linternas, dioses y humanos. Después de repeler al ejército de Steppenwolf, las Cajas Madre fueron separadas y escondidas en lugares de todo el mundo. Una caja madre quedó en manos de los atlantes, otra en manos de las amazonas de Temiscira y la otra caja pasó a manos de los humanos, quienes se aseguraron de ocultarla de la vista de cualquiera que quisiera usar su poder.",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.4",
      img: "https://3.bp.blogspot.com/-jzAzp94d4mQ/WNWLpl_3dFI/AAAAAAAA6Wo/9FARrrd6oGQ94_ALej9P9WowuJGfam_jQCLcB/s1600/IMG_2017-03-24%2B22%253A09%253A15.jpg",
    },
    {
      name: "Star Wars 7: El Despertar De La Fuerza",
      description:
        "Hace mucho tiempo en una galaxia muy, muy lejana [...] Luke Skywalker ha desaparecido. En su ausencia, la siniestra PRIMERA ORDEN ha surgido de las cenizas del Imperio y no descansará hasta que Skywalker, el último Jedi, haya sido destruido. [...] Con el apoyo de la REPÚBLICA, la General Leia Organa dirige una valiente RESISTENCIA. Desesperadamente busca a su hermano Luke con el fin de obtener su ayuda para restaurar la paz y la justicia en la galaxia. [...] Leia ha enviado a su piloto más audaz en una misión secreta a Jakku, donde un viejo aliado ha descubierto una pista del paradero de Luke...",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.9",
      img: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/42299.jpg",
    },
    {
      name: "Star Wars 8: Los Ultimos Jedi",
      description:
        "Hace mucho tiempo en una galaxia muy, muy lejana [...] La PRIMERA ORDEN impera. Luego de diezmar a la pacífica República, el Líder Supremo Snoke ahora envía a sus despiadadas legiones a asumir el control militar de la galaxia. [...] Solo la general Leia Organa y su grupo de combatientes de la RESISTENCIA se oponen a la creciente tiranía, convencidos de que el Maestro Jedi Luke Skywalker regresará y restaurará la chispa de esperanza en la lucha. [...] Pero la Resistencia ha sido expuesta. Mientras la Primera Orden se dirige hacia la base rebelde, los valientes héroes organizan un desesperado escape...",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.8",
      img: "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/STAR-WARS-8-POSTER-1090884.jpg",
    },
    {
      name: "Star Wars: Rouge One",
      description:
        "Galen Erso (Mads Mikkelsen) vive junto a su esposa Lyra (Valene Kane) y su hija Jyn en el planeta remoto Lah'mu. Un día aterriza el director imperial Orson Krennic (Ben Mendelsohn) con su tropa e intenta, por la fuerza, hacer que Galen, que en el pasado fue un eminente científico, trabaje nuevamente para el Imperio en la construcción de una nueva arma secreta. Pese a las indicaciones de Galen de huir del lugar, su esposa Lyra intenta defenderlo y logra herir al oficial Krennic, pero ella resulta muerta en esta maniobra. Jyn logra esconderse en una cueva y es rescatada luego por Saw Gerrera (Forest Whitaker), un prominente luchador rebelde. Galen, su padre, es obligado a unirse nuevamente al Imperio para colaborar en la construcción de una nueva arma.",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.2",
      img: "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg",
    },
    {
      name: "Star Wars: Han Solo",
      description:
        "Han Solo: Una Historia de Star Wars es una nueva aventura del sinvergüenza y contrabandista más conocido de la galaxia, a bordo del Halcón Milenario y en un viaje a una galaxia muy lejana. A través de una serie de aventuras en un submundo criminal oscuro y peligroso, Han Solo se hace amigo de su futuro copiloto Chewbacca y conoce al conocido jugador Lando Calrissian, en un viaje que marcará el camino de uno de los héroes más improbables de la saga de Star Wars. La película se sitúa muchos años antes que Han conociera a Luke Skywalker y a Obi Wan Kenobi en Una nueva esperanza y mucho antes de los acontecimientos ocurridos en Rogue One.",
      category: "Acción | Ciencia Ficsión | Aventura",
      Rating: "9.8",
      img: "https://pre00.deviantart.net/32f8/th/pre/i/2017/113/7/a/han_solo___a_star_wars_story_poster_by_gerardosart-db6x25j.jpg",
    },
  ];

  function getMovies() {
    const pelisMap = peliculas.map((peli) => {
      return generateMovies(peli);
    });
  }

  const divGen = document.getElementById("morePelis");

  function generateMovies({ name, description, category, Rating, img }) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML += `
      <div>
      <h3> Título: ${name} </h3>
      <hr/>
      <p> Descripción: ${description} </p>
      <hr/>
      <p> Géneros: ${category} </p>
      <hr/>
      <p> Rating; ${Rating} </p>
      <hr/>
      <img src="${img}" alt="${name}">
      </div>
      `;
    divGen.appendChild(newDiv);
  }
  getMovies();
});
