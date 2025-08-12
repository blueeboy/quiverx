// const track = document.querySelector('.carousel-track');
// const images = document.querySelectorAll('.carousel img');

// let index = 0;
// const slideInterval = 5000; // 5 seconds

// function moveCarousel() {
//   index++;
//   if (index >= images.length) {
//     index = 0;
//   }
//   track.style.transform = `translateX(-${index * 300}px)`; // match width
// }

// setInterval(moveCarousel, slideInterval);


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});



let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const header = document.getElementsByTagName("header")

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", ()=> {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const sections = document.querySelectorAll('.animate-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Remove so it can animate again
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% visible

sections.forEach(section => observer.observe(section));

  
