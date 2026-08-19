import Vue from 'vue'
import GeckRekt from './GeckRekt.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(GeckRekt)
}).$mount('#geck-rekt-app')
