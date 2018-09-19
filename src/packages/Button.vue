<template>
  <div class="button-main" @click="onClick">
    <slot>
      <div class="button-icon" :class="'button-'+type" v-if="needIcon"></div>
      <div>{{myText}}</div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: 'plus'
      },
      needIcon: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        myText: this.text
      }
    },
    methods: {
      onClick() {
        this.$emit("onClick", this.myText);
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .button-main {
    color: #fff;
    border: 0.09rem solid #50bed7;
    background: #50bed7;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 0.6rem 0.8rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    user-select: none;
  }

  .button-main:active {
    color: white;
    background: #40b3d7;
  }

  .button-icon {
    width: 1rem;
    height: 1rem;
    position: relative;
    margin-right: 0.5rem;
  }

  .button-search {

  }

  .button-search::before {
    content: '';
    border: 0.1rem solid white;
    border-radius: 50%;
    display: block;
    width: 80%;
    height: 80%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }

  .button-search::after {
    content: '';
    border-right: 0.1rem solid white;
    display: block;
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(-45deg);
    transform-origin: 100% 100%;
  }

  .button-plus {

  }

  .button-plus::after {
    content: '';
    border-left: 0.1rem solid white;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(50% - 0.05rem);
    box-sizing: border-box;
    color: white;
  }

  .button-plus::before {
    display: block;
    content: '';
    border-bottom: 0.1rem solid white;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: calc(50% - 0.05rem);
    left: 0;
    box-sizing: border-box;
  }

  .button-main:hover > .button-search::after {
    border-color: white;
  }

  .button-main:hover > .button-search::before {
    border-color: white;
  }

  .button-main:hover > .button-plus::after {
    border-color: white;
  }

  .button-main:hover > .button-plus::before {
    border-color: white;
  }
</style>
