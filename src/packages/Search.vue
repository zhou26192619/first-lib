<template>
  <div class="search-main">
    <input type="text" :value="myText" :placeholder="placeholder" @search="handleInput" class="search-text">
  </div>
</template>

<script>
  export default {
    name: 'Search',
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
  .search-main {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
  }

  .search-text {
    border: 0.083rem solid #cdd9e1;
    outline: none;
    padding: 0.6rem 0.8rem;
    color: #666;
    border-radius: 0.5rem;
    resize: none;
  }

  .search-text:focus {
    border: 0.083rem solid #50bed7;
  }

  .search-err-msg {
    color: red;
    margin-left: 0.3125rem;
  }
</style>
