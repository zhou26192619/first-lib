<template>
  <div class="checkbox-main">
    <label :for="keyVal" class="checkbox-option" :style="cssStyle">
      <input v-model="myVal" @change="onChange()" type="checkbox" :id="keyVal"
             class="checkbox-input">
      <slot :check="myVal">
        <i class="checkbox-icon" :class="{'checkbox-icon-active':myVal}"></i>
        <span class="checkbox-label">{{name}}</span>
      </slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    model: {
      prop: 'val',
      event: 'input'
    },
    props: {
      val: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      keyVal: {
        default: ''
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
        myVal: this.val
      };
    },
    methods: {
      onChange() {
        this.$emit("input", this.myVal);
        this.$emit("onChange", this.myVal, this.keyVal);
      }
    },
    watch: {
      val: function (val, old) {
        this.myVal = val;
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

  .checkbox-label {
    margin-left: 0.3125rem;
  }
</style>
