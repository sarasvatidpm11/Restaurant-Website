//Navbar Fixed

window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const hamburgerLines = document.querySelectorAll(".hamburger-line");
    const navmenu = document.getElementById("nav-menu");
    const navlinks = document.querySelectorAll(".nav-link");
  
    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
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
      hamburgerLines.forEach((line) => {
        line.style.backgroundColor = "white"; // Ubah warna garis hamburger menjadi putih (default)
      });
      navmenu.style.color = "white"; // Mengubah warna latar belakang elemen dengan ID tertentu menjadi putih (default)
  
      navlinks.forEach((navlink) => {
        navlink.classList.add("lg:text-white");
        navlink.classList.remove("lg:text-black");
      });
  
      // Kembalikan sumber gambar logo ke semula
      logo.src = "./img/Logo fix.png";
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });


  const faqItems = document.querySelectorAll('#accordion .border');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('border-gray-500');
      item.querySelector('div').classList.toggle('hidden');
    });
  });