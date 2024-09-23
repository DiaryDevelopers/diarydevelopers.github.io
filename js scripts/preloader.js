document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader").classList.add("hide_preloader");
        document.querySelector("body").classList.add("loaded");
    }, 1000)
  });

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader").classList.add("hide_loader");
    }, 1500)
  });
