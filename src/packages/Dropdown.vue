<template>
  <div class="dropdown-main" @click="onClick">
    <div class="dropdown-view">
      {{val}}
    </div>
    <i class="dropdown-icon" :class="{'dropdown-icon-expanded':isExpanded}"></i>
    <div class="dropdown-options" :class="{'dropdown-options-up':showUp,'dropdown-options-down':!showUp}"
         :style="{display:isExpanded?'block':'none'}">
      <div :value="item.value" v-for="item of list" class="dropdown-option" @click.stop.prevent="onItemClick(item)">
        <slot>
          <div class="dropdown-option-text">{{item.name}}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      val: null,
      keyVal: {
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
        this.myVal = item.value;
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
  .dropdown-main {
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    outline: none;
    resize: none;
    font-size: 1rem;
  }

  .dropdown-view {
    color: #879baa;
  }

  .dropdown-icon {
    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;
    border-width: 0 0.09rem 0.09rem 0;
    transform: rotate(45deg);
    transition-duration: 300ms;
    border-style: solid;
    pointer-events: none;
    margin-left: 0.3125rem;
    border-color: #5e6d82;
    margin-bottom: 0.2rem;
    margin-top: 0;
  }

  .dropdown-icon-expanded {
    transform: rotate(-135deg);
    transition-duration: 300ms;
    margin-bottom: 0;
    margin-top: 0.2rem;
  }

  .dropdown-options {
    position: absolute;
    min-width: 100%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, .1);
    /*border: 0.1rem solid #e4e7ed;*/
    border-radius: 0.25rem;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 20rem;
    transition: all 200ms ease;
    z-index: 300;
  }

  .dropdown-options-down {
    top: 100%;
    transition: all 200ms ease;
  }

  .dropdown-options-up {
    bottom: 100%;
    transition: all 200ms ease;
  }

  .dropdown-option {
    cursor: pointer;
    background: white;
  }

  .dropdown-option-text:hover {
    background: #0290c1;
    color: white;
  }

  .dropdown-option-text {
    padding: 0.4rem 0.6rem;
    color: #7b868d;
    white-space: nowrap;
  }

</style>
