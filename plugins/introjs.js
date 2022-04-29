import introJs from 'intro.js'
import Vue from 'vue'

const intro = introJs().setOptions({
  showBullets: false,
  showProgress: true,
  nextLabel: 'Далее',
  prevLabel: 'Назад',
  doneLabel: 'Закрыть',
})

export default ({ app }, inject) => {
  inject('intro', Vue.observable(intro))
}
