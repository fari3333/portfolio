
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Mark active
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.hero-nav');
  const btn = nav.querySelector('.hero-nav__toggle');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.setAttribute(
      'aria-label',
      nav.classList.contains('open') ? 'Close menu' : 'Open menu'
    );
  });

  // Optional: close when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
});
