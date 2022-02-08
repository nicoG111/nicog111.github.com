function toggleVisible(btnClass, elementClass) {
  const btns = document.querySelectorAll(btnClass);
  for (let btn of btns) {
    btn.addEventListener('click', function() {
      this.parentElement.querySelector(elementClass).classList.toggle('visible');
      removeVisible(btnClass, elementClass);
    });
  }
}

function removeVisible(btnClass, elementClass){
  window.addEventListener('click', function(e){
    if (!(e.target.matches(btnClass) || e.target.closest(btnClass))) {
      document.querySelector(elementClass).classList.remove('visible');
    }
  });
}


// toggle.visible sur le menu-dropdown le Dropdown
toggleVisible('.menu-dropdown-btn', '.menu-dropdown');

// toggle.visible sur le menu-slider le Dropdown
toggleVisible('.menu-slider-btn', '.menu-slider-menu');
