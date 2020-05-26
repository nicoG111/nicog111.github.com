// element Sticky

const observer = new IntersectionObserver(function(observables){
  for (observable of observables){
    observable.target.closest('.sticky').classList.toggle('sticked', !observable.isIntersecting);
  }
});

const stickies = document.querySelectorAll('.sticky');
for (let sticky of stickies) {
const trigger = document.createElement('div');
trigger.classList.add('trigger');
sticky.appendChild(trigger);
}

const triggers = document.querySelectorAll('.trigger');
for (let trigger of triggers) {
observer.observe(trigger);
}
