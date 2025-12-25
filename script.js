// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Skill Bars Animation
document.querySelectorAll('.skill-bar span').forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => { bar.style.width = width; }, 500);
});

// Animated Counters
document.querySelectorAll('.counter').forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;
    if(count < target){ counter.innerText = Math.ceil(count + increment); setTimeout(updateCount, 20); } 
    else { counter.innerText = target; }
  };
  updateCount();
});

// Scroll Reveal
const sections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
};
const observer = new IntersectionObserver(revealSection, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));
