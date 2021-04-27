const photos = document.querySelectorAll(".art");
const gallery = document.querySelector(".gallery");
let isOpen = false;
let activePhoto;
var vpwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

photos.forEach(photo => {
  photo.addEventListener("click", handleClick);
});

function handlePosition(photo) {
  const { width, height, top, left } = photo.getBoundingClientRect();
  if (vpwidth < 400) {
    photo.style.transform = `translateY(${innerHeight / 3.9 -
      height / 3.9 -
      top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(2.2)`;
  } else if (vpwidth > 401 && vpwidth < 768) {
    photo.style.transform = `translateY(${innerHeight / 3.57 -
      height / 3.57 -
      top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(2.2)`;
  } else if (vpwidth > 768 && vpwidth < 990) {
    photo.style.transform = `translateY(${innerHeight / 2.4 -
      height / 2.4 -
      top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(1.8)`;
    } else if (vpwidth > 991 && vpwidth < 1100) {
      photo.style.transform = `translateY(${innerHeight / 4 -
        height / 4 -
        top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(2.2)`;
  } else if (vpwidth > 1101 && vpwidth < 1580) {
      photo.style.transform = `translateY(${innerHeight / 2 -
        height / 2 -
        top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(1.7)`;
  } else {
    photo.style.transform = `translateY(${innerHeight / 1.8 -
      height / 1.8 -
      top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(1.4)`;
  }
}

function handleClick(e) {
  activePhoto = e.target;
  photos.forEach(photo => photo.setAttribute("style", ""));
  handlePosition(activePhoto);
  activePhoto.classList.add("is-active");
  gallery.classList.add("is-expanded");
  setTimeout(() => {
    isOpen = true;
  }, 0);
}

function hide() {
  if (isOpen) {
    activePhoto.setAttribute("style", "position: relative; z-index: 1");
    activePhoto.classList.remove("is-active");
    gallery.classList.remove("is-expanded");
    isOpen = false;
  }
}

window.addEventListener("resize", hide);
document.addEventListener("click", hide);

// loading 
window.onload = () => document.querySelector(".loading").remove();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
      this.style.display = "none";
    };
  });
});