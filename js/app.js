const targets = document.querySelectorAll('.news, .skills, .plan');

window.addEventListener('scroll', () => {
  targets.forEach((target) => {
    const position = target.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight * 0.8) {
      target.classList.add('is-visible');
    }
  });
});
