$(document).ready(function () {
  // Chemins des images dans le dossier "images" qui est au même niveau que "index.html"
  var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    // Ajoutez d'autres images comme nécessaire
  ];

  var currentIndex = 0;
  var autoSlideInterval;
  var isCarouselRunning = false;

  // Démarrer/Arrêter le carrousel en cliquant sur le bouton
  $("#slider-toggle").click(function () {
    if (isCarouselRunning) {
      // Si le carrousel est en cours d'exécution, l'arrêter
      clearInterval(autoSlideInterval);
      isCarouselRunning = false;
    } else {
      // Sinon, démarrer le carrousel
      autoSlideInterval = setInterval(showNextImage, 2000); // Changer d'image toutes les 2 secondes
      isCarouselRunning = true;
    }
  });

  // Fonction pour passer à l'image suivante
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Incrémente l'index, boucle si nécessaire
    $("#slider img").attr("src", images[currentIndex]);
  }

  // Fonction pour revenir à l'image précédente
  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Décrémente l'index, boucle si nécessaire
    $("#slider img").attr("src", images[currentIndex]);
  }

  $("#slider-previous").click(showPreviousImage);
  $("#slider-next").click(showNextImage);

  // Navigation avec les touches fléchées du clavier
  $(document).keydown(function (e) {
    if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "ArrowLeft") {
      showPreviousImage();
    }
  });

  $("#slider img").attr("src", images[currentIndex]);
});

$(document).ready(function () {
  $("#toolbar-toggle").click(function () {
    $(".toolbar").toggle();
  });
});

function showRandomImage() {
  var randomIndex = currentIndex;
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * images.length);
  }
  currentIndex = randomIndex;
  $("#slider img").attr("src", images[currentIndex]); // Met à jour l'image
}

$("#slider-random").click(showRandomImage); // Attachez l'événement click
