const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (nav && !nav.querySelector('[href="educators.html"]')) {
  const educatorLink = document.createElement('a');
  educatorLink.href = 'educators.html';
  educatorLink.textContent = 'For educators';
  nav.appendChild(educatorLink);
}

const dateChip = document.querySelector('.date-chip');
if (dateChip) {
  dateChip.querySelector('span').textContent = 'BUILD WEEK';
  dateChip.querySelector('strong').textContent = 'Monday, September 20';
  dateChip.querySelector('small').textContent = 'Fully online · Submit by Friday';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  message.textContent = `You’re on the list, ${name || 'builder'}! Check your inbox for the next step.`;
  form.reset();
});

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('nav-open', !isOpen);
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
