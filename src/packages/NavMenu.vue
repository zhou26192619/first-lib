<template>
  <div class="nav-menu-main">
    <div v-for="(item,index) of myList" class="nav-menu-item-out">
      <div class="nav-menu-item" :class="{'nav-menu-item-top':index==0}" @click.stop.prevent="onShow($event,item)">
        <i>{{item.icon}}</i>
        <div v-if="!isCollapse" class="nav-menu-item-text">{{item.name}}</div>
      </div>
      <slot scopt="item" :index="index" name="ext">
        <div class="nav-menu-item-ext" v-show="item.isShowExt">
          <NavMenu :list="item.children" @onHideExt="onHideExt" @onItemClick="onItemClick"
                   v-if="item.children"></NavMenu>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      isCollapse: {
        type: Boolean,
        default: false
      },
      needShowExt: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        myList: [],
        stateShow: false
      }
    },
    computed: {},
    watch: {
      list: {
        handler(val, old) {
          if (val instanceof Array) {
            this.myList = [];
            for (let argument of this.list) {
              this.$set(argument, 'isShowExt', false);
              this.myList.push(argument);
            }
          }
        },
        immediate: true
      }
    },
    methods: {
      onItemClick(item) {
        this.$emit("onItemClick", item);
        this.resetStatus();
      },
      onShow(event,item) {
        console.log(event);
        if (item.children && item.children.length > 0) {
          this.resetStatus();
          item.isShowExt = true;
          if (item.children instanceof Array) {
            for (let it of item.children) {
              it.isShowExt = false;
            }
          }
          //设置状态为显示
          this.stateShow = true;
          //添加关闭显示监听
          this.addMoveListener();
        } else {
          this.onItemClick(item);
        }
      },
      onHide(item) {
        // this.$emit("onHideExt",item);
      },
      onHideExt(item) {
        item.isShowExt = false;
      },
      resetStatus() {
        //重置所有显示状态
        for (let argument of this.myList) {
          argument.isShowExt = false;
        }
        this.stateShow = false;
        document.body.removeEventListener('click', this.resetStatus);
      },
      addMoveListener() {
        document.body.addEventListener('click', this.resetStatus);
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .nav-menu-main {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-menu-item-out {
    position: relative;
    z-index: 1000;
  }

  .nav-menu-item-top {
    border-top: 0.09rem solid #ddd9d9;
  }

  .nav-menu-item {
    background: #ebf0f5;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0.8rem 1rem;
    border-bottom: 0.09rem solid #ddd9d9;
    /*border-left: 0.09rem solid #ddd9d9;*/
    /*border-right: 0.09rem solid #ddd9d9;*/
    color: #2d373c;
    pointer-events: all;
    cursor: pointer;
  }

  .nav-menu-item * {
    pointer-events: none;
  }

  .nav-menu-item:hover {
    background: #41aaaa;
    color: white;
  }

  .nav-menu-item-text {
    white-space: nowrap;
    font-size: 1.2rem;
  }

  .nav-menu-item-ext {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
  }
</style>
