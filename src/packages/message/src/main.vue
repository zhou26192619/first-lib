<template>
  <div class="message-base">
    <div class="message-main" @click="onClick">
      <div class="message-menu" :style="{background:type=='error'?'#ff3e19':'#307bff'}">
        <div class="message-title"><b>{{title}}</b></div>
        <i @click="onClose" alt="" class="message-close"
           v-if="showClose">X</i>
      </div>
      <div v-if="type=='error'" class="message-error">
        <div class="message-content-error-exp" v-html="message" v-if="errExp"></div>
        <div class="message-content-error" v-html="message" v-else></div>
        <div class="message-bt-detail" @click="errExp=false" v-show="errExp">收起</div>
        <div class="message-bt-detail" @click="errExp=true" v-show="(!errExp) && (message.length>48)">详细信息</div>
      </div>
      <div v-else class="message-default">
        <div class="message-content" v-html="message"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'message',
    data() {
      return {
        title: '提示',
        message: '',
        duration: 3000,
        showClose: true,
        type: '',
        errExp: false
      }
    },
    mounted() {
    },
    methods: {
      onClick(event) {
      },
      onClose() {
        document.body.removeChild(this.$el);
      }
    }
  }
</script>
<style scoped>
  .message-close {
    height: 1rem;
    width: 1rem;
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    margin-top: 0.6rem;
    margin-right: 0.8rem;
    cursor: pointer;
  }

  .message-menu {
    width: 100%;
    padding: 0.6rem 0.8rem;
    position: relative;
  }

  .message-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    color: white;
  }

  .message-content {
    width: 100%;
    color: #7189a2;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }

  .message-main {
    width: 40rem;
    background: white;
    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    transition: opacity 1s, transform 1s, left 1s, right 1s, top 1s, bottom 1s;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    pointer-events: all;
  }

  .message-base {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    z-index: 20000;
    pointer-events: none;
  }

  .message-default {
    padding: 1.375rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .message-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .message-bt-detail {
    border: 1px solid #1ca8eb;
    color: #1ca8eb;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem;
    cursor: pointer;
  }

  .message-content-error {
    text-align: left;
    margin-bottom: 1.25rem;
    word-break: break-all;
    color: #7189a2;
    text-overflow: ellipsis;
    display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden; /** 隐藏超出的内容 **/
    margin-top: 1.375rem;
  }

  .message-content-error-exp {
    text-align: left;
    margin-bottom: 1.25rem;
    color: #7189a2;
    margin-top: 1.375rem;
  }
</style>
