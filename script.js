const buttons = document.querySelectorAll('.btn');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    sections.forEach(s => s.classList.toggle('active', s.id === targetId));
  });
});



