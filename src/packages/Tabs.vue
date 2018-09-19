<template>
  <div class="tabs-main">
    <div class="tabs-head">
      <div v-for="(item,i) of list" class="tabs-tab" @click="onTabClick(i,item)"
           :class="{'tabs-tab-active':i===realIndex,'tabs-tab-left':i<realIndex,'tabs-tab-right':i>realIndex }">
        <slot :scopt="item" name="tab">
          <span>{{item.name}}</span>
        </slot>
        <i @click="onCloseTab(i,item)" class="tabs-head-close">x</i>
      </div>
      <div class="tabs-head-border"></div>
    </div>
    <slot v-if="list.length>0">

    </slot>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      needIndex: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        index: 0,
        needBorder: true,
        currentComponent: 0
      };
    },
    computed: {
      realIndex() {
        return this.index;
      }
    },
    watch: {
      list: function (val, old) {
        if (this.index >= val.length) {
          this.index = val.length - 1;
        }
        if (this.index >= 0) {
          this.onTabClick(this.index, this.list[this.index]);
        }
      }
    },
    methods: {
      onTabClick(i, item) {
        this.index = i;
        this.$emit("onTabClick", item);
      },
      onCloseTab(i, item) {
        this.$emit("onCloseTab", i, item);
      },

    },
    mounted() {
      if (this.list.length !== 0) {
        this.onTabClick(this.index, this.list[this.index]);
      }
    }
  };
</script>


<style scoped>
  .tabs-main {
    display: flex;
    flex-direction: column;
  }

  .tabs-head {
    color: #666;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
  }

  .tabs-head-close {
    margin-left: 0.3125rem;
    color: #c3cfd6;
  }

  .tabs-head-border {
    border-bottom: 0.08rem solid #c3cfd6;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  .tabs-tab {
    cursor: pointer;
    padding: 0.4rem 0.6rem;
    background: white;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: #606266;
  }

  .tabs-tab-left {
    border-top: 0.09rem solid #c3cfd6;
    border-left: 0.09rem solid #c3cfd6;
    border-bottom: 0.09rem solid #c3cfd6;
    border-right: 0;
  }

  .tabs-tab-right {
    border-top: 0.09rem solid #c3cfd6;
    border-bottom: 0.09rem solid #c3cfd6;
    border-right: 0.09rem solid #c3cfd6;
    border-left: 0;
  }

  .tabs-tab-active {
    border: 0.09rem solid #c3cfd6 !important;
    border-bottom: 0.09rem solid transparent !important;
    color: #409eff;
  }
</style>
