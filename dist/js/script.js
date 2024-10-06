//Navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik ddi luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

gsap.registerPlugin(TextPlugin);
gsap.to("#username", {
  duration: 1,
  text: { value: "dave", scrambleText: true },
  delay: 0.5,
});

// Animasi scramble teks untuk #underscore
gsap.to("#underscore", {
  duration: 1,
  text: { value: "disini_", scrambleText: true },
  delay: 1.5,
});

var options = {
  strings: [
    '<span style="font-weight: bold;">Student.</span>',
    '<span style="font-weight: bold;">Programmer.</span>',
    '<span style="font-weight: bold;">Gamer.</span>',
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 100,
  loop: true,
  showCursor: true,
  cursorChar: "|",
};

var typed = new Typed("#animated-text", options);
gsap.from("#navbargua", { duration: 1.5, y: "-100%", opacity: 0 });
const images = ["img/5.png", "img/6.png"]; // Array berisi file gambar
let currentImageIndex = 0;

function flipImage() {
  const imgElement = document.querySelector(".rotate-img");
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop ke gambar berikutnya

  // Animasi rotasi flip ke belakang
  gsap.to(imgElement, {
    duration: 0.8,
    rotationY: 90,
    ease: "power2.in",
    onComplete: () => {
      imgElement.src = images[currentImageIndex]; // Ganti sumber gambar ketika flip selesai
      gsap.fromTo(
        imgElement,
        { rotationY: -90 }, // Mulai dari sisi belakang
        { duration: 0.8, rotationY: 0, ease: "power2.out" } // Flip kembali ke depan
      );
    },
  });
}

// Ganti gambar setiap 3 detik
setInterval(flipImage, 3000);
