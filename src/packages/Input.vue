<template>
  <div class="input-main">
    <input type="text" :value="myText" :placeholder="placeholder" @input="handleInput" class="input-text"
           :readonly="readonly">
    <div v-if="errMsg" class="input-err-msg">{{errMsg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    model: {
      prop: 'myValue',
      event: 'input'
    },
    props: {
      myValue: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        myText: this.myValue,
        errMsg: null
      }
    },
    methods: {
      handleInput() {
        this.myText = event.target.value;
        this.$emit('input', this.myText);
        if (this.$listeners['onValidate']) {
          this.$emit('onValidate', this.myText, this.changeErrMsg);
        }
      },
      changeErrMsg(text) {
        this.errMsg = text;
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .input-main {
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  .input-text {
    border: 0.09rem solid #cdd9e1;
    outline: none;
    padding: 0.6rem 0.8rem;
    color: #666;
    border-radius: 0.4rem;
    resize: none;
    width: 100%;
    height: 100%;
    font-size: 1rem;
  }

  .input-text:hover {
    border: 0.09rem solid #b8c4cc;
  }

  .input-text:focus {
    border: 0.09rem solid #50bed7;
  }

  .input-err-msg {
    color: red;
    padding: 0 0.8rem;
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 0.8rem;
  }
</style>
