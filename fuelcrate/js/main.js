// Scripts for the FuelCrate marketing site

// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

// Smooth scrolling for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // ignore href="#" which is often used for placeholders
  if (anchor.getAttribute('href') === '#') return;
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: show a thank-you message on form submission
const contactForm = document.querySelector('form.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = document.createElement('p');
    message.textContent = 'Thanks! We\'ll be in touch soon.';
    contactForm.replaceWith(message);
  });
}

// Optional: debounced resize logging for debugging
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(null, args), delay);
  };
}

window.addEventListener('resize', debounce(() => {
  console.log(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
}, 200));
