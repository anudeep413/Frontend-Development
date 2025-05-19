
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.parentElement.classList.add("active");
    }
  });
});


const typingText = document.querySelector(".typing-text");

if (typingText) {
  setInterval(() => {
    typingText.classList.remove("typing-text");
    void typingText.offsetWidth;
    typingText.classList.add("typing-text");
  }, 8000); 
}


const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = contactForm.querySelector("input[placeholder='Your Name']").value;
    const email = contactForm.querySelector("input[placeholder='Your Email']").value;
    const message = contactForm.querySelector("textarea").value;

    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
}
