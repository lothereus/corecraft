import './style.css'

// Smooth scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0')
      entry.target.classList.remove('opacity-0', 'translate-y-10')
    }
  })
}, observerOptions)

// Observe all sections with fade-in class
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in')
  elements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
    observer.observe(el)
  })
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }
  
  // Stack details toggle
  const toggleStackBtn = document.getElementById('toggle-stack')
  const stackDetails = document.getElementById('stack-details')
  const stackSummary = document.getElementById('stack-summary')
  
  if (toggleStackBtn && stackDetails && stackSummary) {
    toggleStackBtn.addEventListener('click', () => {
      const isHidden = stackDetails.classList.contains('hidden')
      
      if (isHidden) {
        stackDetails.classList.remove('hidden')
        stackSummary.classList.add('hidden')
        toggleStackBtn.textContent = '← Masquer le détail'
      } else {
        stackDetails.classList.add('hidden')
        stackSummary.classList.remove('hidden')
        toggleStackBtn.textContent = 'Voir le détail complet →'
      }
    })
  }
})
