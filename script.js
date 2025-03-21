window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const threshold = 300; // Quando iniziare a nascondere il testo
  
    if (scrollPosition > threshold) {
      document.body.classList.add("disappear");
    } else {
      document.body.classList.remove("disappear");
    }
  });

  const sections = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Mostra l'elemento quando è visibile
      } else {
        entry.target.classList.remove('show'); // Nasconde l'elemento quando esce dalla viewport
      }
    });
  }, { threshold: 0.2 }); // Cambia stato quando il 20% dell'elemento è visibile
  
  sections.forEach(section => observer.observe(section));


  let navLi = document.getElementById("nav-li");  
  let navBar = document.getElementById("nav"); 
  
  navLi.addEventListener("click", navAnimation);
  
  function navAnimation() {
    navBar.classList.add("animate-nav");
    document.body.classList.add("disappear");
    setTimeout(() => {
      window.location.href = "index.html"; // Naviga dopo il completamento dell'animazione
    }, 1000); // Modifica il tempo in base alla durata dell'animazione CSS
  }

let lightModeBtn = document.getElementById("lightModeBtn");
let body = document.getElementsByTagName("body")[0];
let all = document.querySelectorAll('*')

const switchLightMode = () => {

  body.classList.toggle("night")
  if (body.classList.contains("night")) { 
  body.style.background  = "1s ease"
  body.style.background = "linear-gradient(rgb(65, 19, 88), rgb(32, 32, 32)) no-repeat center center fixed";
 
} else { 
  body.style.transition  = "1s ease"
  body.style.background = "linear-gradient(rgb(210, 159, 236), white) no-repeat center center fixed";
} 

}

lightModeBtn.addEventListener("click", switchLightMode)

