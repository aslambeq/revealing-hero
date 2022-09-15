const hero = document.getElementById('hero')
const heroFront = document.getElementById('hero-layer-front')

const heroHeight = hero.offsetHeight / 2
window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight) return
  console.log('-window.scrollY : ', heroHeight - window.scrollY + 'px');
  heroFront.style.maxHeight = heroHeight - window.scrollY + 'px'
})
