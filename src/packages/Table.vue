<script>
  import Checkbox from './Checkbox'
  import TableColumn from './TableColumn'

  export default {
    name: "Table",
    components: {Checkbox, TableColumn},
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
    },
    directives: {
      border: {
        // 指令的定义
        inserted: function (el) {
          this.needBorder = true;
        }
      }
    },
    data() {
      return {
        myList: [],//list数据对应的状态
        needBorder: true,
        isCheckedAll: false,
        selects: [],
        mySlots: [],
        headData: []
      };
    },
    computed: {},
    render(createElement) {
      let result = createElement('table', {
        'class': "table-main",
        attrs: {
          cellpadding: '0',
          cellspacing: '0'
        },
      }, [

        createElement('thead', [
          createElement('tr', {
              'class': 'table-head'
            }, this.mySlots.map(({head}, index) => {

              let views = [createElement('div',
                head.label
              )];
              if (head.type === 'selection') {
                views = [createElement(Checkbox, {
                  props: {
                    val: this.isCheckedAll,
                    keyVal: 'all'
                  },
                  on: {
                    onChange: this.selectAll
                  }
                })]
              }
              return createElement('td', {
                  'class': ['table-head-cell', index !== 0 ? 'table-head-cell-border' : ''],
                  style: {
                    width: head.width
                  },
                }, views
              );
            })
          )]),

        createElement('tbody', this.myList.map(({data, checked}, index) => {
          return createElement('tr',
            {
              'class': 'table-row'
            },
            this.mySlots.map(({head, content}) => {
              let props = {
                data: data,
                prop: head.prop,
                label: head.label
              };
              let scopedSlots = content.data.scopedSlots;
              if (head.type === 'index') {
                props.data = {index: index + 1};
                props.prop = 'index'
              } else if (head.type === 'selection') {
                scopedSlots = {
                  default: scope => {
                    return createElement(Checkbox, {
                      props: {
                        val: checked,
                        keyVal: index
                      },
                      on: {
                        onChange: this.selectOne
                      }
                    })
                  }
                };
              }
              let views = [createElement(TableColumn, {
                props: props,
                scopedSlots: scopedSlots,
              })];
              return createElement('td', {
                'class': ['table-cell', this.needBorder ? 'table-row-border' : '']
              }, views);
            }))
        }))
      ]);
      return result;
    },
    methods: {
      click() {
        this.$emit("onClick", this.myText);
        this.myText = "你点击了我";
      },
      selectAll(isChecked, value) {
        this.isCheckedAll = isChecked;
        this.selects = [];
        for (let i = 0; i < this.myList.length; i++) {
          this.myList[i].checked = isChecked;
          if (isChecked) {
            this.selects.push(i)
          }
        }
        this.$emit("onSelectAll", isChecked, this.selects);
      },
      selectOne(isChecked, value) {
        this.myList[value].checked = isChecked;
        if (isChecked) {
          this.selects.push(value);
        } else {
          let i = this.selects.indexOf(value);
          if (i > -1) {
            this.selects.splice(i, 1);
          }
        }
        this.isCheckedAll = this.selects.length === this.myList.length;
        this.$emit("onSelectOne", isChecked, value, this.selects);
      },
    },
    watch: {
      list: {
        handler(val, old) {
          if (val) {
            this.myList = [];
            for (let i = 0; i < val.length; i++) {
              this.myList.push({
                checked: false,
                id: i,
                data: val[i]
              })
            }
          }
        },
        immediate: true,
        deep: true
      }
    },
    created() {
      if (this.$slots.default) {
        for (let argument of this.$slots.default) {
          if (argument.tag) {
            this.mySlots.push({
              head: {
                prop: argument.componentOptions.propsData.prop,
                label: argument.componentOptions.propsData.label,
                type: argument.componentOptions.propsData.type,
                width: argument.componentOptions.propsData.width,
              },
              content: argument
            });

          }
        }
      }
    }
  };
</script>

<style scoped>
  .table-main {
    width: 100%;
    border: 0.09rem solid #c3cfd6;
    border-bottom: none;
    border-left: none;
  }

  .table-head {
    color: #666;
    font-weight: bold;
    font-size: 1.2rem;
    background: #b4bec8;
  }

  .table-head-cell {
    padding: 0.6rem 0.9rem;
    border-left: 0.09rem solid #c3cfd6;
  }

  .table-head-cell-border {
    border-left: 0.09rem solid white;
  }

  .table-row {
    color: #565353;
    font-size: 1rem;
  }

  .table-row-diff {
    background: #ebf0f5;
  }

  .table-row:hover {
    background: #dfe6ed;
  }

  .table-cell {
    border-left: 0.09rem solid #c3cfd6;
  }

  .table-row-border {
    border-bottom: 0.0625rem solid #c3cfd6;
  }

  .table-cell-select {
    width: 3%;
  }
</style>
