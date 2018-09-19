<template>
  <div class="dialog-mask" v-if="visible" :style="maskStyle">
    <div class="dialog-bg" :style="dialogStyle">
      <slot name="title">
        <div class="dialog-title">
          <div class="dialog-title-text">{{title}}</div>
          <div class="dialog-close" @click="onClose">X</div>
        </div>
      </slot>
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dialog',
    model: {
      prop: 'visible',
      event: 'input'
    },
    props: {
      visible: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      title: {
        type: String,
        default: 'null'
      },
      maskStyle: {
        type: Object,
        default: function () {
          return {}
        }
      },
      dialogStyle: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    data() {
      return {}
    },
    methods: {
      onClose() {
        this.$emit('input', false);
      }
    }
  }
</script>
<style scoped>
  .dialog-bg {
    box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, .1);
    background: white;
    border-radius: 0.5rem;
  }

  .dialog-mask {
    position: fixed;
    z-index: 2000;
    height: 100%;
    width: 100%;
    /*background: rgba(0, 0, 0, 0.5);*/
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .dialog-title {
    background: #41aaaa;
    padding: 0.8rem 1rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    color: white;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  .dialog-title-text {
    font-size: 1.2rem;
  }

  .dialog-close {
    color: white;
    margin-left: 1rem;
    cursor: pointer;
  }
</style>
