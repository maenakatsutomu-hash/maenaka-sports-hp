function openMM() { document.getElementById('mmenu').classList.add('open'); }
function closeMM() { document.getElementById('mmenu').classList.remove('open'); }

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
