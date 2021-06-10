backdrop = document.querySelector('.backdrop');
navBar = document.querySelector('.nav-bar');
navBarElements = document.querySelector('.nav-bar-elements');
navBar.addEventListener('click', () => {
  setTimeout(() => {
    navBar.classList.toggle('nav-bar-handler');
    backdrop.classList.toggle('backdrop-handler');
    navBarElements.classList.toggle('nav-bar-elements-handler');
  }, 100);
});

navBarElements.addEventListener('click', closeHandler);
backdrop.addEventListener('click', closeHandler);
function closeHandler() {
  console.log('inside close handler');
  setTimeout(() => {
    navBar.classList.toggle('nav-bar-handler');
    backdrop.classList.toggle('backdrop-handler');
    navBarElements.classList.toggle('nav-bar-elements-handler');
  }, 100);
}
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)) {
    return false;
  }
};
