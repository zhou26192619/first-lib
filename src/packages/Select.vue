<template>
  <div class="select-main" @click="onClick">
    <div class="select-view">
      <div v-if="select">{{select.name}}</div>
      <div v-else class="select-placeholder">{{placeholder}}</div>
    </div>
    <i class="select-icon" :class="{'select-icon-expanded':isExpanded}"></i>
    <div class="select-options" :class="{'select-options-up':showUp,'select-options-down':!showUp}"
         v-if="isExpanded">
      <div :value="item.value" v-for="item of list" class="select-option" @click.stop.prevent="onItemClick(item)">
        <slot>
          <div class="select-option-text">{{item[label]}}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    model: {
      prop: 'val',
      event: 'input'
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      val: null,
      label: {
        type: String,
        default: 'name'
      },
      keyVal: {
        type: String,
        default: 'value'
      },
      placeholder: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        myVal: this.val,
        select: null,
        isExpanded: false,
        showUp: false
      }
    },
    methods: {
      onClick() {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
          this.$nextTick(function () {
            let top = this.$el.offsetTop;
            let height = this.$el.offsetHeight;
            let offsetHeight = this.$el.lastChild.offsetHeight;
            this.showUp = top + height + offsetHeight > document.documentElement.clientHeight;
          });
        }
      },
      onItemClick(item) {
        this.isExpanded = false;
        this.myVal = item[this.keyVal];
        this.select = item;
        this.$emit('input', this.myVal);
      },
      resetStatus() {
        this.isExpanded = false;
      }
    },
    watch: {
      list: {
        handler(val, old) {
          if (this.val) {
            for (let valElement of this.list) {
              if (valElement.value == this.val) {
                this.select = valElement;
                break
              }
            }
          }
        },
        immediate: true
      },
      isExpanded: {
        handler(val, old) {
          if (val) {
            document.body.addEventListener('click', this.resetStatus);
          } else {
            document.body.removeEventListener('click', this.resetStatus);
          }
        },
        immediate: true
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .select-main {
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    border: 0.09rem solid #cdd9e1;
    outline: none;
    color: #666;
    border-radius: 0.4rem;
    resize: none;
    font-size: 1rem;
  }

  .select-view {
    padding: 0.6rem 0.6rem 0.6rem 0.8rem;
    min-height: 2.2rem;
    flex-grow: 1;
  }

  .select-placeholder {
    color: #cbccf5;
    font-size: 1rem;
  }

  .select-main:hover {
    border: 0.09rem solid #abb7bf;
  }

  .select-main:focus {
    border: 0.09rem solid #50bed7;
  }

  .select-icon {
    right: 0;
    top: calc(50% - 0.27rem);
    z-index: 1;
    margin: 0 0.8rem 0 0;
    border-width: 0.35rem 0 0.35rem 0.54rem;
    border-top-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(90deg);
    transition-duration: 300ms;
    border-style: solid;
    color: #005578;
    pointer-events: none;
  }

  .select-icon-expanded {
    transform: rotate(-90deg);
    transition-duration: 300ms;
  }

  .select-options {
    position: absolute;
    min-width: 100%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, .1);
    border: 0.1rem solid #e4e7ed;
    border-radius: 0.25rem;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 20rem;
    transition: all 200ms ease;
    opacity: 0;
    z-index: 300;
  }

  .select-options-down {
    top: 100%;
    transition: all 200ms ease;
    opacity: 1;
  }

  .select-options-up {
    bottom: 100%;
    transition: all 200ms ease;
    opacity: 1;
  }

  .select-option {
    cursor: pointer;
  }

  .select-option-text:hover {
    background: #0290c1;
    color: white;
  }

  .select-option-text {
    padding: 0.4rem 0.6rem;
    background: white;
  }

</style>
