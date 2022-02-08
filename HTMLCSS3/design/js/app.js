
const menuFlecheIcon = document.getElementById("mainNavIcon");
const menuFlecheLabel = document.getElementById("flecheLabel");
menuFlecheLabel.addEventListener("click", function(){
	menuFlecheIcon.classList.toggle("fa-chevron-down");
	menuFlecheIcon.classList.toggle("fa-chevron-up");
})
