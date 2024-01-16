const threshold = [];
for (let i = 0; i <= 1; i += 0.05) {
  threshold.push(i);
}

const el = document.querySelector(".about")
const header = document.querySelector("header")
const observer = new IntersectionObserver( 
  ([entry]) => {
    header.style.fontSize = `${16 + entry.intersectionRatio * 8}px`
  },
  {
    rootMargin: "-140px 0px 0px 0px",
    threshold
  }
);

observer.observe(el);

  scrollSpy('body', {
    sectionSelector: '.scroll-target',
    targetSelector: 'a.menu-target',
    activeClass: 'active',
    onActive: (menuItem, section) => {
      document.querySelectorAll('header .menu-target')
        .forEach((el) => {
          el.classList.toggle('active', el.classList.contains(section.dataset.menu))
        })
    },
    offset: 140,
  })
