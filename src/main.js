import { createApp } from 'vue'
import './style.scss'
import Glide from '@glidejs/glide'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
    locale: 'fr',
    messages: {
        en,
        fr
    }
})

createApp(App).use(i18n).mount('#app')

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
