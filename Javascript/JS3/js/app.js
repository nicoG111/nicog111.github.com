function afficher(numeroTiroir) {
    image.src = vignettes[numeroTiroir].dataset.src;
  // Je modifie le titre
    title.innerText = vignettes[numeroTiroir].dataset.title;
  // Je modifie la description
    desc.innerText = vignettes[numeroTiroir].dataset.desc;
}
function next() {
    tiroirAffiche++;
    if(tiroirAffiche >= vignettes.length){
      tiroirAffiche = 0;
    }
    afficher(tiroirAffiche);
}
function previous() {
    tiroirAffiche--;
    if (tiroirAffiche < 0) {
      tiroirAffiche = vignettes.length - 1;
    }
    afficher(tiroirAffiche);
}


  let tiroirAffiche = 0;
  let timer = null;
  let duree = 3000;


  const vignettes = document.querySelectorAll('.vignette a');


  const image = document.querySelector('.ecran .image');
  const title = document.querySelector('.ecran .title');
  const desc  = document.querySelector('.ecran .desc');


  afficher(tiroirAffiche);


  for (vignette of vignettes) {

      vignette.addEventListener('click', function() {
        tiroirAffiche = this.dataset.num;
        afficher(this.dataset.num);
      });
  }

// LE BOUTON NEXT

  document.getElementById('next').addEventListener('click', function(){
    next();
  });

// LE BOUTON PREVIOUS

  document.getElementById('previous').addEventListener('click', function(){
    previous();
  });

// LE BOUTON PLAY
  document.getElementById('play').addEventListener('click', function(){
    if (timer === null) {
      timer = setInterval('next()', duree);
    }
  });

// LE BOUTON STOP
  document.getElementById('stop').addEventListener('click', function(){
    clearInterval(timer);
    timer = null;
  });
