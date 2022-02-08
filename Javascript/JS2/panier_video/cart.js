function calculePrixTotal() {
  let prices = document.querySelectorAll('.full-price');
  let subTotal = 0;
  for (let price of prices) {
     subTotal = subTotal + parseFloat(price.innerText);
  }

  let champSubTotal = document.querySelector('.subtotal span');
  let champTaxes = document.querySelector('.tax span');
  let champTotalTaxes = document.querySelector('.total span');

  let taxes = subTotal * .05;
  let totalTaxes = (subTotal > 0)?(subTotal * 1.05) + 5: 0;

  champSubTotal.innerText   = subTotal.toFixed(2);
  champTaxes.innerText      = taxes.toFixed(2);
  champTotalTaxes.innerText = totalTaxes.toFixed(2);
}

calculePrixTotal();


  let boutons = document.querySelectorAll('.qt-button');
  for (let bouton of boutons) {
    bouton.addEventListener('click', function(){
      let content = this.closest('footer.content');
      let champQuantite  = content.querySelector('.qt');
      let champPrixTotal = content.querySelector('.full-price');

      if (!(this.dataset.qt == '-1' && content.dataset.quantite == 0)) {
      content.dataset.quantite =
              Number(content.dataset.quantite) + Number(this.dataset.qt);
      }

      champQuantite.innerText  = content.dataset.quantite;
      champPrixTotal.innerText =
              (content.dataset.quantite * content.dataset.prix).toFixed(2) + '€';
      calculePrixTotal();
    });
  }
