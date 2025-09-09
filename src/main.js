import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Default language path: redirect to /en if no /en or /id prefix
const seg = location.pathname.replace(/^\/+/, '').split('/')[0]
if (!['en', 'id'].includes(seg)) {
  const target = `/en${location.pathname}${location.search}${location.hash}`
  history.replaceState(null, '', target)
  document.documentElement.lang = 'en'
} else {
  document.documentElement.lang = seg || 'en'
}

createApp(App).mount("#app");
