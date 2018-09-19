<template>
  <div class="main" @click="click">
    <slot>
      <div class="flex content">
        <div class="energy-value">
          {{info.value}}
        </div>
        <div class="energy" :style="{height:ratio}"></div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "EnergyColumn",
  props: {
    info: {
      type: Object,
      default: function() {
        return {};
      }
    },
    total: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      myValue: {}
    };
  },
  computed: {
    ratio() {
      return Math.round(this.info.value / this.total * 100) + "%";
    }
  },
  methods: {
    click() {
      this.$emit("onClick", this.myText);
      this.myText = "你点击了我";
    }
  },
  mounted() {}
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  color: white;
  cursor: pointer;
  border-radius: 0.2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  user-select: none;
  height: 2.7rem;
  width: 1.85rem;
  padding: 0;
  margin: 0.3rem 0.5rem;
}

.content {
  background: #020036;
  background-image: linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
  position: relative;
  height: 100%;
  width: 100%;
  /*margin: 0.3rem 0.5rem;*/
}

.energy {
  background: rgb(0,153,153);
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}

.energy-value {
  color: white;
  z-index: 1;
}
</style>
