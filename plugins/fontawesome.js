import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

// fas
library.add(faChevronDown)
// fab
library.add(faGithub, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
