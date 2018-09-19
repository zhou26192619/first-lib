import Message from './src/main.vue'

Message.install = function (Vue, options) {
  if (options === undefined || options === null) {
    options = {
      message: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  }
  // 4. 添加实例方法
  Vue.prototype.$message = function (tips) {
    let message = Vue.extend(Message);
    let component = new message({
      data: tips,
    }).$mount().$el;
    document.body.appendChild(component);
    setTimeout(function () {
      if (component.parentNode) {
        document.body.removeChild(component);
      }
    }, tips.duration ? tips.duration : 3000);
  };
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$message[type] = (tips) => {
      return Vue.prototype.$message(tips, type)
    }
  })
};

export default Message
