function calculeTotaux(){
  let prices = document.querySelectorAll('article .full-price');
  let champSubTotal = document.querySelector('.subtotal span');
  let subTotal = 0;

  for (let price of prices) {
    subTotal = subTotal + parseFloat(price.innerText);
  }
  champSubTotal.innerText = subTotal.toFixed(2);

}

calculeTotaux();


const boutonsPlus = document.querySelectorAll('.qt-plus');
for(let bouton of boutonsPlus) {
  bouton.addEventListener('click',function(){
    let content        = this.closest('.content');
    let champQuantite  = content.querySelector('.qt');
    let champPrixTotal = content.querySelector('.full-price');

    content.dataset.quantite++;
    champQuantite.innerText  = content.dataset.quantite;
    champPrixTotal.innerText = (content.dataset.quantite * content.dataset.prix).toFixed(2);
    calculeTotaux();
  })
}















// Les liens '-'
const moins = document.querySelectorAll('.qt-minus');
for(let bouton of moins) {
  bouton.addEventListener('click',function(){
    alert("moins");
  })
}
