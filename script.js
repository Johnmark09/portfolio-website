// Get the navigation links and sections
const navLinks = document.querySelectorAll(' .menu > li a');
const sections = document.querySelectorAll('section');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through the sections and find the one that is currently in view
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove the active class from all links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Add the active class to the current link
      navLinks[index].classList.add('active');
    }
  });
});



function sendMessage(to, subject, body) {
  const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
  const a = document.createElement('a');
  a.href = mailtoLink;
  a.click();
}