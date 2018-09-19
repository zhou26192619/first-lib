<template>
  <div class="table-column-main">
    <slot :data="data">
      <div class="table-column-text">
        {{data[prop]}}
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "TableColumn",
    props: {
      data: {
        type: Object,
        default: function () {
          return {text: '默认'};
        }
      },
      type: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      },
    },
    data() {
      return {};
    },
    computed: {},
    methods: {
      click() {
        this.$emit("onClick", this.myText);
        this.myText = "你点击了我";
      },

    },
    mounted() {
    }
  };
</script>

<style scoped>
  .table-column-main {
    padding: 0.45rem 0.9rem;
  }

  .table-column-text {
  }
</style>
