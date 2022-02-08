

  const liens = document.querySelectorAll('.acheter');
  const htva  = document.getElementById('htva');
  const tva   = document.getElementById('tva');
  const tvac  = document.getElementById('tvac');
  let totalHTVA = 0;

  for (let lien of liens){
    lien.addEventListener('click', function() {
      totalHTVA += Number(this.dataset.prix);
      htva.innerText = totalHTVA;
      tva.innerText  = (totalHTVA * 0.21).toFixed(2);
      tvac.innerText = (totalHTVA * 1.21).toFixed(2);
    });
  }
