// script.js

document.getElementById("theme-toggle").addEventListener("change", function() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  const mainContent = document.querySelector('.main-content');
  mainContent.classList.toggle("light-mode");
  mainContent.classList.toggle("dark-mode");
  const footer = document.querySelector('.footer');
  footer.classList.toggle("light-mode");
  footer.classList.toggle("dark-mode");
    const Youtube = document.querySelector('.youtube');
    Youtube.classList.toggle("light-mode");
    Youtube.classList.toggle("dark-mode");
});

  
