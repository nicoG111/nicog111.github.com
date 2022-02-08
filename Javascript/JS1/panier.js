

  const liens = document.querySelectorAll('.acheter');
  const htva  = document.getElementById('htva');
  const tva   = document.getElementById('tva');
  const tvac  = document.getElementById('tvac');

  for (let lien of liens){
    lien.addEventListener('click', function() {
      htva.innerText = Number(htva.innerText) + Number(this.dataset.prix);
      tva.innerText  = (Number(htva.innerText) * 0.21).toFixed(2);
      tvac.innerText = (Number(htva.innerText) * 1.21).toFixed(2);
    });
  }
