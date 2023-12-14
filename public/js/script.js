//Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const hamburgerLines = document.querySelectorAll(".hamburger-line");
  const navmenu = document.getElementById("nav-menu");
  const navlinks = document.querySelectorAll(".nav-link");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.add("h-[5rem]");
    hamburgerLines.forEach((line) => {
      line.style.backgroundColor = "black"; // Ubah warna garis hamburger menjadi hitam
    });
    // navmenu.style.color = "!text-black"; // Mengubah warna latar belakang elemen dengan ID tertentu menjadi hitam

    navlinks.forEach((navlink) => {
      navlink.classList.remove("lg:text-white");
      navlink.classList.add("lg:text-black");
    });
    // Ganti sumber gambar logo
    logo.src = "./img/Logo fix hitam.png"; // Ganti dengan lokasi yang benar dari folder img
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.remove("h-[5rem]");
    hamburgerLines.forEach((line) => {
      line.style.backgroundColor = "white"; // Ubah warna garis hamburger menjadi putih (default)
    });
    // navmenu.style.color = "white"; // Mengubah warna latar belakang elemen dengan ID tertentu menjadi putih (default)

    navlinks.forEach((navlink) => {
      navlink.classList.add("lg:text-white");
      navlink.classList.remove("lg:text-black");
    });

    // Kembalikan sumber gambar logo ke semula
    logo.src = "./img/Logo fix.png";
  }
};

// Rubah warna sub menu navbar
document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname;
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    var linkHref = link.getAttribute("href");
    currentPage = currentPage.replace(/\/$/, "");

    console.log(linkHref, currentPage);
    if (linkHref === currentPage) {
      link.closest("a").classList.add("navlinkactive");
    }
  });
});

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//Accordion
const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});

//Gallery
document.querySelectorAll(".image-container-gallery img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image-gallery").style.display = "block";
    document.querySelector(".popup-image-gallery img").src =
      image.getAttribute("src");
  };
});

document.querySelector(".popup-image-gallery span").onclick = () => {
  document.querySelector(".popup-image-gallery").style.display = "none";
};

function openTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('button');

  tabs.forEach(tab => {
    tab.classList.add('hidden');
  });

  tabButtons.forEach(btn => {
    btn.classList.remove('active-tab');
  });

  document.getElementById(tabName).classList.remove('hidden');
  document.getElementById('tabBtn' + tabName.slice(-1)).classList.add('active-tab');
}

// Set Tab 1 as active by default
document.getElementById('tab1').classList.remove('hidden');
document.getElementById('tabBtn1').classList.add('active-tab');






let index = 0;
  const images = document.querySelectorAll('#slider > div');

  function showImage() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add('hidden');
    }
    images[index].classList.remove('hidden');
    index = (index + 1) % images.length;
  }

  function startSlider() {
    setInterval(showImage, 3000); // Ganti gambar setiap 3 detik
  }

  startSlider();