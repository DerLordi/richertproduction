// Changing the defaults
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('.slide-in-left', { duration: 1000, origin: 'left', delay: 200, opacity: 0, distance: '50px' });
sr.reveal('.slide-in-right', { duration: 1000, origin: 'right', delay: 200, opacity: 0, distance: '50px' });
sr.reveal('.fade-in', { duration: 1000, origin: 'right', delay: 200, opacity: 0, distance: '0px' });
