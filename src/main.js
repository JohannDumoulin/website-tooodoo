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

    breakpoints: {
        530: {
            perView: 1,
        },
        1023: {
            perView: 2,
        },
        1279: {
            perView: 3,
        }
    }
}).mount()
