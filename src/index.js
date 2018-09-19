import Button from './packages/Button'

const VueFlagList = {
  install(Vue, options) {
    Vue.component(Button.name, Button)
  }
}
export default VueFlagList
