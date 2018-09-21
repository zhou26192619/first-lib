import Button from './packages/Button'
import Dialog from './packages/Dialog'
import Input from './packages/Input'

export default {
  install(Vue, options) {
    let pre = 'z-';
    Vue.component(pre + Button.name.toLowerCase(), Button);
    Vue.component(pre + Dialog.name.toLowerCase(), Dialog);
    Vue.component(pre + Input.name.toLowerCase(), Input);
    console.log(Vue);
  }
}
