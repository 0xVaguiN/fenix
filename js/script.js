window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const toggleBtn = document.querySelector(".menu-toggle");
  const menuMobile = document.querySelector(".menu");

  toggleBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("open");
    toggleBtn.classList.toggle("active");
  });