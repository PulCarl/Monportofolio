document.getElementById('playButton').onclick = function(e) {
   move('.Acceuil').translate(-450, -250).end();
   move('.Competence').ease('in').translate(-450, -250).end();
   move('.Projet').ease('in').translate(-250, -450).end();
   move('.Contact').ease('in').translate(150, -450).end();

};
