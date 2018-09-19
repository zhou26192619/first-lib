import Button from './packages/Button'

export default {
  install(Vue) {
    Vue.component('Z-' + Button.name, Button)
    console.log(Vue);
  }
}
