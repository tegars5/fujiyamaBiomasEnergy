// Function untuk menangani toggle FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Toggle active class pada item yang diklik
      item.classList.toggle("active");

      // Close semua FAQ lain
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  // Tambahkan menu toggle untuk mobile
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  // Buat toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = '<i class="uil uil-bars"></i>';
  toggleBtn.style.display = "none";

  navbar.insertBefore(toggleBtn, navLinks);

  // Fungsi untuk mengatur tampilan berdasarkan ukuran layar
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      toggleBtn.style.display = "block";
      navLinks.style.display = "none";
      navLinks.style.marginTop = "1rem";
    } else {
      toggleBtn.style.display = "none";
      navLinks.style.display = "flex";
    }
  }

  // Jalankan saat halaman dimuat
  checkScreenSize();

  // Jalankan ketika ukuran layar berubah
  window.addEventListener("resize", checkScreenSize);

  // Toggle menu saat tombol diklik
  toggleBtn.addEventListener("click", function () {
    if (navLinks.style.display === "none") {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      toggleBtn.innerHTML = '<i class="uil uil-times"></i>';
    } else {
      navLinks.style.display = "none";
      toggleBtn.innerHTML = '<i class="uil uil-bars"></i>';
    }
  });

  // Tambahkan style untuk menu toggle
  const style = document.createElement("style");
  style.textContent = `
      .menu-toggle {
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
      }
      
      @media (max-width: 768px) {
        .menu-toggle {
          display: block;
          align-self: flex-end;
        }
      }
    `;
  document.head.appendChild(style);
});

// Animasi sederhana saat scroll
window.addEventListener("scroll", function () {
  const projectBoxes = document.querySelectorAll(".project-box");
  const scrollPosition = window.scrollY + window.innerHeight * 0.8;

  projectBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition > boxTop) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});

// Tambahkan animasi awal ke project-box
document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
      .project-box {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s, transform 0.5s;
      }
    `;
  document.head.appendChild(style);
});
