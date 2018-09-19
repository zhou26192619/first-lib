<template>
  <div id="app">
    <router-view name="content"/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  html,
  body {
    height: 100%;
    overflow-x: hidden;
    width: 100%;
    font-size: 16px;
  }

  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }

  #app {
    height: 100%;
    width: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sm {
    width: 12rem;
  }

  .md {
    width: 16rem;
  }

  .gap-left {
    margin-left: 0.5rem;
  }

  .gap-right {
    margin-right: 0.5rem;
  }

  .redstar {
    color: red;
  }

  @media screen and (max-width: 1366px) {
    html,
    body {
      font-size: 12px;
    }
  }
</style>
