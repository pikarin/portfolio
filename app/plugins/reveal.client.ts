/*
  v-reveal: adds `is-visible` once the element enters the viewport.
  IntersectionObserver only, no scroll listeners. Reduced motion is
  handled in CSS (the hidden state only exists under no-preference).
*/
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (observer) return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )
    return observer
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      if (typeof binding.value === 'number') {
        el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      }
      getObserver().observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
