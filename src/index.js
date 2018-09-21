import Button from './packages/Button'
import Dialog from './packages/Dialog'
import Input from './packages/Input'
import Checkbox from './packages/Checkbox'
import CheckboxGroup from './packages/CheckboxGroup'
import Dropdown from './packages/Dropdown'
import EnergyColumn from './packages/EnergyColumn'
import NavMenu from './packages/NavMenu'
import Pagination from './packages/Pagination'
import RadioGroup from './packages/RadioGroup'
import Search from './packages/Search'
import Select from './packages/Select'
import Table from './packages/Table'
import TableColumn from './packages/TableColumn'
import Tabs from './packages/Tabs'

export default {
  install(Vue, options) {
    let pre = 'z-';
    Vue.component(pre + Button.name.toLowerCase(), Button);
    Vue.component(pre + Dialog.name.toLowerCase(), Dialog);
    Vue.component(pre + Input.name.toLowerCase(), Input);
    Vue.component(pre + Checkbox.name.toLowerCase(), Checkbox);
    Vue.component(pre + CheckboxGroup.name.toLowerCase(), CheckboxGroup);
    Vue.component(pre + Dropdown.name.toLowerCase(), Dropdown);
    Vue.component(pre + EnergyColumn.name.toLowerCase(), EnergyColumn);
    Vue.component(pre + NavMenu.name.toLowerCase(), NavMenu);
    Vue.component(pre + Pagination.name.toLowerCase(), Pagination);
    Vue.component(pre + RadioGroup.name.toLowerCase(), RadioGroup);
    Vue.component(pre + Search.name.toLowerCase(), Search);
    Vue.component(pre + Select.name.toLowerCase(), Select);
    Vue.component(pre + Table.name.toLowerCase(), Table);
    Vue.component(pre + TableColumn.name.toLowerCase(), TableColumn);
    Vue.component(pre + Tabs.name.toLowerCase(), Tabs);
  }
}
