<template>
  <div class="checkbox-main">
    <Checkbox v-model="isSelectAll" name="All" :key-val="keyVal+'all'" class="checkbox-option" v-if="needAll"
              :style="cssStyle" @onChange="onSelectAll">
    </Checkbox>
    <Checkbox v-for="(item,index) of myList" v-model="item.checked" :name="item.name" :key-val="keyVal+index"
              class="checkbox-option" :style="cssStyle" @onChange="onChange(item)" :key="keyVal+index">
    </Checkbox>
  </div>
</template>

<script>
  import Checkbox from './Checkbox'

  export default {
    name: "CheckboxGroup",
    components: {
      Checkbox
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return {}
        }
      },
      keyVal: {
        type: String,
        default: 'checkbox'
      },
      needAll: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: null
      },
      cssStyle: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        myList: this.list,
        isSelectAll: false,
        selects: []
      };
    },
    methods: {
      onSelectAll(val) {
        for (let argument of this.myList) {
          argument.checked = val;
        }
        if (val) {
          this.selects = this.myList;
        } else {
          this.selects = [];
        }
        this.$emit("onChangeAll", this.selects);
      },
      onChange(item) {
        this.isSelectAll = this.isAllSelect();
        this.amendSelects(item);
        this.$emit("onChange", item, this.selects);
      },
      amendSelects(item) {
        if (item.checked) {
          this.selects.push(item);
        } else {
          let index = this.selects.indexOf(item);
          if (index > -1) {
            this.selects.splice(index, 1);
          }
        }
      },
      isAllSelect() {
        for (let argument of this.myList) {
          if (!argument.checked) return false
        }
        return true
      }
    },
    watch: {
      list: {
        handler(val, old) {
          if (val instanceof Array) {
            this.myList = [];
            for (let argument of this.list) {
              if (argument['checked'] === undefined) {
                this.$set(argument, 'checked', false);
              } else {
                //默认选中的
                if (argument['checked']) this.selects.push(argument);
              }
              this.myList.push(argument);
            }
            this.isSelectAll = this.isAllSelect();
          }
        },
        immediate: true
      }
    },
    mounted() {
    }
  };
</script>


<style scoped>
  .checkbox-main {
    display: inline-flex;
    align-items: center;
  }

  .checkbox-option {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.6rem;
    position: relative;
    cursor: pointer;
  }

  .checkbox-input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
  }

  .checkbox-icon {
    width: 1.5rem;
    height: 1.5rem;
    border: 0.083rem solid #879baa;
    background: #ffffff;
    margin-right: 0.3125rem;
    position: relative;
  }

  .checkbox-icon-active:after {
    content: '';
    pointer-events: none;
    top: 25%;
    left: 13%;
    width: 76%;
    height: 40%;
    border: 0.166rem solid #005578;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    position: absolute;
  }

  .checkbox-icon-checked {
    background-color: #005578;
    background-clip: content-box;
  }
</style>
