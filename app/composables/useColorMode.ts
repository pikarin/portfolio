import { ref, computed, watch, onMounted } from 'vue'

type ColorMode = 'dark' | 'light'

const STORAGE_KEY = 'portfolio-color-mode'
const DEFAULT_MODE: ColorMode = 'dark'

const colorMode = ref<ColorMode>(DEFAULT_MODE)

export function useColorMode() {
  function applyMode(mode: ColorMode) {
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }

  function toggle() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ColorMode | null
    if (stored === 'dark' || stored === 'light') {
      colorMode.value = stored
    }
    applyMode(colorMode.value)
  })

  watch(colorMode, (newMode) => {
    applyMode(newMode)
    localStorage.setItem(STORAGE_KEY, newMode)
  })

  return {
    colorMode,
    toggle,
    isDark: computed(() => colorMode.value === 'dark'),
  }
}
