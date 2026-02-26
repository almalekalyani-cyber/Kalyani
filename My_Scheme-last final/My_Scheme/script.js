const dropdownItems = document.querySelectorAll('#langDropdown .dropdown-item');
const selectedLang = document.getElementById('selectedLang');

dropdownItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    dropdownItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    selectedLang.textContent = this.textContent.split(' - ')[0];
  });
});


const button = document.getElementById('modeToggle');
let darkMode = false;

button.addEventListener('click', () => {
    darkMode = !darkMode; // Toggle mode
    if (darkMode) {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#131313ff';
        button.innerHTML = '<i class="fa fa-sun"></i>'; // Change icon
    } else {
        document.body.style.backgroundColor = '#121111ff';
        document.body.style.color = '#000';
        button.innerHTML = '<i class="fa fa-moon"></i>'; // Change icon
    }
});


// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
  const heroCarouselEl = document.getElementById('heroCarousel');
  const heroCarousel = new bootstrap.Carousel(heroCarouselEl, {
    interval: 5000,
    ride: 'carousel',
    pause: false
  });
});


//tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add 'active' to clicked tab
        tab.classList.add('active');

        // Hide all contents
        contents.forEach(c => c.classList.remove('active'));
        // Show content corresponding to clicked tab
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.overlay-navbar');
    if (window.scrollY > 50) { // change 50 to adjust when it becomes white
        navbar.classList.add('overlay-navbar-white');
    } else {
        navbar.classList.remove('overlay-navbar-white');
    }
});

// Currently empty - added for future enhancements
// For example: animations, scroll effects, dynamic content
console.log("Page Loaded Successfully");
// Remove overlay when user clicks Play
document.querySelector(".video-overlay").addEventListener("click", function () {
    this.classList.add("hide");

    let frame = document.querySelector(".youtube-frame");
    let src = frame.src;

    // Auto-play on overlay click
    if (!src.includes("autoplay=1")) {
        frame.src = src + "&autoplay=1";
    }
});

// Play video on overlay click
document.querySelector(".video-overlay").addEventListener("click", function () {
    this.classList.add("hide");

    let frame = document.querySelector(".youtube-frame");
    let src = frame.src;

    // Autoplay
    if (!src.includes("autoplay=1")) {
        frame.src = src + "&autoplay=1";
    }
});

console.log("Page Loaded Successfully");

// Tabs behavior
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const t = tab.dataset.tab;

    // toggle active classes
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    tab.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const target = document.getElementById(t);
    if (target) {
      target.classList.add('active');
      // accessibility
      document.querySelectorAll('.tab-content').forEach(tc => tc.setAttribute('aria-hidden','true'));
      target.setAttribute('aria-hidden','false');
    }

    // make heading bold / stand out for States/UTs
    document.querySelectorAll('.states-heading').forEach(h => {
      if (t === 'states') h.style.fontWeight = '900';
      else h.style.fontWeight = '';
    });
  });
});

// Initialize ARIA attributes & set categories visible
document.addEventListener('DOMContentLoaded', () => {
  // hide initially-hidden cards
  document.querySelectorAll('.initially-hidden').forEach(el => el.style.display = 'none');

  const viewBtn = document.getElementById('view-all-btn');
  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      const hiddenCards = document.querySelectorAll('.initially-hidden');
      const isHidden = hiddenCards[0].style.display === 'none';
      
      hiddenCards.forEach(el => {
        el.style.display = isHidden ? 'flex' : 'none';
      });

      if (isHidden) {
        viewBtn.textContent = 'Show Less ←';
      } else {
        viewBtn.textContent = 'View All →';
        // optional: scroll up a bit for better UX
        window.scrollTo({
          top: viewBtn.getBoundingClientRect().top + window.scrollY - 220,
          behavior: 'smooth'
        });
      }
    });
  }
});


