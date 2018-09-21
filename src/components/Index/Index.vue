<template>
  <div style="height: 100%;width: 100%;">
    <z-button text="aaaa"></z-button>
    <z-button text="aaaa"></z-button>
  </div>
</template>

<script>

  export default {
    name: 'Index',
    components: {
    },
    data() {
      return {
        languages: [{name: '中文', value: 0}, {name: '英语', value: 1}],
        settings: [{name: '设置', value: 0}, {name: '帮助', value: 1}],
        menu: [
          {
            name: '首页',
            children: [
              {
                name: '子一',
                children: [
                  {
                    name: '子子1',
                  }
                ]
              },
              {
                name: '子2'
              }
            ]
          },
          {
            name: '组件监控',
            children: [
              {
                name: '子一',
                children: [
                  {
                    name: '子子1',
                  }
                ]
              }
            ]
          },
          {
            name: '设备监控',
            children: [
              {
                name: '电站结构',
                path: '/Monitor/StationStructure'
              },
            ]
          },
          {
            name: '告警管理'
          },
          {
            name: '实时IAD'
          },
          {
            name: '电站智巡'
          },
          {
            name: '运维管理'
          },
          {
            name: '资产管理'
          },
          {
            name: '系统报表'
          },
          {
            name: '设备管理',
            children: [
              {
                name: '设备厂家管理',
                path: '/Equipment/EquipmentManufacturers'
              },
              {
                name: '设备分类管理',
                path: '/Equipment/EquipmentClasses'
              },
              {
                name: '设备模板管理',
                path: '/Equipment/EquipmentModule'
              }
            ]
          },
        ],
        currentContent: '',
      }
    },
  }
</script>

<style scoped>
  .index-head {
    height: 4rem;
    border-bottom: 0.08rem solid #41aaaa;
    justify-content: space-between;
  }

  .index-logo {
    width: 20rem;
    height: 3rem;
    border: 0.1rem solid aqua;
  }

  .index-title {
    font-size: 2rem;
    font-weight: bold;
    color: #41aaaa;
  }

  .index-head-option {
    margin-right: 0.9375rem;
  }

  .index-head-sign-out {
    color: #879baa;
    cursor: pointer;
  }

  .index-main {
    height: calc(100% - 4rem);
    display: table;
    width: 100%;
  }

  .index-link {
    text-decoration: none;
    color: #2d373c;
  }

  .index-menu {
    width: 20rem;
    display: table-cell;
    border-right: 0.09rem solid #c3cfd6;
  }

  .index-content {
    display: table-cell;
  }

  .index-menu-item {
    overflow: hidden;
    outline: none;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    cursor: pointer;
    border-bottom: 0.0625rem solid #ddd9d9;
    background: #ebf0f5;
  }

  .index-menu-item:hover {
    background: #cbccf5;
  }

  .index-company-info {
    height: 5rem;
  }

  .index-component-border {

  }

  .index-router {
    padding: 0.8rem 1rem;
  }
</style>
