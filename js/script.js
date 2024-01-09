
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;


/// Open and close mobile menu ///

const btnNav = document.querySelector('.nav-menu');
const header = document.querySelector('.main-header');
const mainNav = document.querySelector('.main-nav');

const form = document.querySelector('.cta-form');
form.addEventListener('submit', function () {
  form.reset();
})

btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
  document.body.classList.toggle('no-scroll');
});

document.addEventListener('click', function (e) {
  if (e.target.classList[0] !== 'main-nav' && e.target.classList[0] !== 'menu-icon') {
    header.classList.remove('nav-open');
    document.body.classList.remove('no-scroll');
  }
})

const links = document.querySelectorAll('a');
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth'
      })
    }

    if (link.classList.contains('nav-link')) {
      header.classList.remove('nav-open');
      document.body.classList.remove('no-scroll');
    }
  })
})


/// Sticky navigation ///

const sectionHero = document.querySelector('.hero-section');

const observer = new IntersectionObserver(function (entries) {
  const entry = entries[0]

  if (entry.isIntersecting === false) {
    document.body.classList.add('sticky')
  }
  if (entry.isIntersecting) {
    document.body.classList.remove('sticky')
  }
},
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  });
observer.observe(sectionHero);

