

// Particle.js functionality
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 2000,
      "density": {
        "enable": true,
        "value_area": 4000
      }
    },
    "color": {
      "value": ["#ffffff", "#aa00ff", "#00ccff"]
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 1,
      "random": true
    },
    "size": {
      "value": 1.9,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 70,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});


//nav
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const burgerIcon = document.querySelector('.burger-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!menu.classList.contains('show')) {
    // Show menu with beam-in
    menu.classList.add('show', 'beam-in');
    menu.classList.remove('beam-out');
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
  } else {
    // Beam-out animation
    menu.classList.remove('beam-in');
    menu.classList.add('beam-out');
    setTimeout(() => {
      menu.classList.remove('show', 'beam-out');
      burgerIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
    }, 300); // Match beam-out duration
  }
}

// Auto-close when nav link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navMenu li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      const burgerIcon = document.querySelector('.burger-icon');
      const closeIcon = document.querySelector('.close-icon');

      if (menu.classList.contains('show')) {
        menu.classList.remove('beam-in');
        menu.classList.add('beam-out');
        setTimeout(() => {
          menu.classList.remove('show', 'beam-out');
          burgerIcon.style.display = 'inline';
          closeIcon.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Add event listener to nav links
const navLinks = document.querySelectorAll('.topnav li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default navigation behavior

    const loadingOverlay = document.getElementById('loadingOverlay');

    // Show the loading overlay
    loadingOverlay.style.display = 'flex';

    // Simulate a delay for loading animation (like 1-2 seconds)
    setTimeout(() => {
      window.location.href = this.href; // After delay, navigate to the link
    }, 2000); // Adjust the delay as per your preference (2 seconds for rocket effect)
  });
});

const messages = ["Buckle up, launching...", "Engaging warp drive...", "Calculating trajectory...", "Ignition sequence start..."];
  let index = 0;
  const loadingText = document.querySelector('.loading-text');

  setInterval(() => {
    index = (index + 1) % messages.length;
    loadingText.textContent = messages[index];
  }, 2000); // Change every 2 seconds


  const starContainer = document.createElement('div');
  starContainer.className = 'stars';
  document.getElementById('loadingOverlay').appendChild(starContainer);

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starContainer.appendChild(star);
  }




//cursor
document.addEventListener("mousemove", function (e) {
  const star = document.createElement("div");
  star.className = "star-trail";

  // Random size between 4px and 10px
  const size = Math.random() * 6 + 4;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random pastel galaxy color
  const colors = ['#ffffff', '#f0f8ff', '#add8e6', '#e6e6fa', '#dcdcdc'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  star.style.background = randomColor;
  star.style.boxShadow = `0 0 6px ${randomColor}, 0 0 12px ${randomColor}, 0 0 20px ${randomColor}`;

  star.style.left = `${e.pageX}px`;
  star.style.top = `${e.pageY}px`;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
});




//images
const galleryItems = document.querySelectorAll('.gallery-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  galleryItems.forEach(item => {
    observer.observe(item);
  });



// Dynamically adjust particles container height
document.addEventListener("DOMContentLoaded", function () {
  const particleContainer = document.getElementById("particles-js");
  particleContainer.style.height = document.body.scrollHeight + "px";
});


// Carousel functionality
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const images = document.querySelectorAll('.carousel-track img');
let currentIndex = 0;
let interval;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

function goNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function goPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

nextBtn.addEventListener('click', () => {
  goNext();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  goPrev();
  resetAutoSlide();
});

function startAutoSlide() {
  interval = setInterval(goNext, 4000); // Every 4 seconds
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', () => {
  updateCarousel();
  startAutoSlide();
});