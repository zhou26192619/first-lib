<template>
  <div class="pagination-main">
    <select class="pagination-nonstop" v-model.number="myPageSize" @change="onPageSizeChange" v-if="needSize"
            style="margin-right: 1rem">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
    <div class="pagination-pre" @click="index--" v-if="index>1"><</div>
    <div v-for="item of realPage" class="pagination-tab" @click="onPageClick(item)"
         :class="{'pagination-tab-active':item===index}">
      <slot :scopt="item">
        <span>{{item}}</span>
      </slot>
    </div>
    <div class="pagination-pre" @click="index++" v-if="index<totalPage">></div>
    <div style="margin-left: 1rem">
      Go to
      <input type="number" v-model.number="toIndex" @keyup.13="onToIndex" class="pagination-nonstop">
      page
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      pageSize: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      },
      pagerCount: {//显示几个tab标签
        type: Number,
        default: 6
      },
      needSize: {
        type: Boolean,
        default: false
      },
      needNonstop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        index: 1,//下标从1开始
        myPageSize: this.pageSize,
        toIndex: 1,
        totalPage: 0
      };
    },
    computed: {
      realPage() {
        this.toIndex = this.index;//同步当前页数
        if (this.index > this.totalPage) {
          this.index = this.toIndex = this.totalPage;
        } else if (this.index < 1) {
          this.index = this.toIndex = 1;
        }
        let start, end;
        if (this.totalPage > this.pagerCount) {
          start = this.index - this.pagerCount / 2;
          end = this.index + this.pagerCount / 2;
          if (start < 1) {
            end = end + Math.abs(start) + 1;
            start = 1;
          }
          if (end > this.totalPage) {
            start = start - Math.abs(end - this.totalPage);
            end = this.totalPage;
          }
        } else {
          start = 1;
          end = this.totalPage;
        }

        let result = [];
        for (let i = start; i <= end; i++) {
          result.push(i)
        }
        return result;
      }
    },
    watch: {
      total: {
        handler(val, old) {
          this.totalPage = Math.ceil(val / this.myPageSize);
        },
        immediate: true
      },
      myPageSize: {
        handler(val, old) {
          this.totalPage = Math.ceil(this.total / val);
        },
        immediate: true
      },
      pageSize: {
        handler(val, old) {
          this.myPageSize = val;
        },
        immediate: true
      }
    },
    methods: {
      onPageSizeChange() {
        this.$emit("onPageSizeChange", this.myPageSize);
      },
      onPageClick(item) {
        this.index = item;
        this.$emit("onPageChange", this.index);
      },
      onToIndex() {
        this.onPageClick(this.toIndex);
      },
    },
    mounted() {
    }
  };
</script>


<style scoped>
  .pagination-main {
    display: inline-flex;
    align-items: center;
  }

  .pagination-tab {
    padding: 0.4rem;
    margin: 0 0.416rem;
    color: #606266;
    min-width: 2rem;
    height: 2rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .pagination-tab:hover {
    background-color: #0e6c81;
    color: #fff;
  }

  .pagination-tab-active {
    background-color: #0c5d81 !important;
    color: #fff;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .pagination-nonstop {
    background: #fff none;
    border-radius: 10%;
    border: 0.0625rem solid #dcdfe6;
    color: #606266;
    display: inline-block;
    outline: none;
    padding: 0.4rem 0.4rem;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 4rem;
    text-align: center;
  }

  .pagination-pre {
    font-weight: bold;
    color: #666;
    cursor: pointer;
    user-select: none;
  }

  .pagination-pre:hover {
    color: #0e6c81;
  }
</style>
