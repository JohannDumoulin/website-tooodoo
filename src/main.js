import { createApp } from 'vue'
import './style.scss'
import Glide from '@glidejs/glide'
import App from './App.vue'

createApp(App).mount('#app')

new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    perTouch: 1,
    gap: 0,
}).mount()
