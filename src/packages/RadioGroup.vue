<template>
  <div class="radio-group-main" :class="{'radio-group-main-col':isVertical}">
    <label v-for="(item,index) of list.options" :for="keyVal+index" class="radio-group-option" :style="cssStyle">
      <input v-model="selectItem" :value="item.value" @change="onChange(item)" type="radio" :id="keyVal+index"
             name="list.key"
             class="radio-group-input">
      <i class="radio-group-icon " :class="{'radio-group-icon-checked':selectItem==item.value}"></i>
      <slot :item="item">
        <span>{{item.name}}</span>
      </slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: "RadioGroup",
    props: {
      list: {
        type: Object,
        default: function () {
          return {}
        }
      },
      keyVal: {
        type: String,
        default: 'RadioGroup'
      },
      defaultVal: null,
      cssStyle: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        selectItem: this.defaultVal,
        isVertical: false
      };
    },
    methods: {
      onChange(item) {
        this.$emit("onChange", item);
      },
    },
    directives: {
      vertical: {
        // 指令的定义
        bind: function (el) {
          console.log('vertical');
          this.isVertical = true
        }
      }
    },
    mounted() {
    }
  };
</script>


<style scoped>
  .radio-group-main {
    display: inline-flex;
    align-items: center;
  }

  .radio-group-main-col {
    align-items: flex-start;
    flex-direction: column;
  }

  .radio-group-option {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
  }

  .radio-group-input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
  }

  .radio-group-icon {
    content: "";
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.416rem;
    border-radius: 50%;
    border: 0.083rem solid #879baa;
    padding: 0.166rem;
    cursor: pointer;
  }

  .radio-group-icon-checked {
    background-color: #005578;
    background-clip: content-box;
  }
</style>
