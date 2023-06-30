<template>
  <div
    class ="reg-name">
    Cлужители:
  </div>

  <div class = "registry-cols">
    <div
      v-for="el, i in nameCols" :key="i"
      class = "table-el"
      :style = "elStyle">
        {{  el  }}
    </div>
  </div>


  <div
    v-for="el, i in items" :key="i">
    <div class = "registry-rows">
      <div
      v-for="value, j in nameCols" :key="j">

        <div
          :class = "`table-el --el-${j}`"
          :style = "elStyle">
          <div
            class = "text-table-el">
            {{ el[value] }}
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'RegistryItems',
  props: {
    items: Array,
  },
  computed: {
    nameCols() {
      const items = this.items

      if (items[0]) {
        return Object.keys(items[0])
      } else {
        return []
      }
    },
    elStyle() {
      return {
        width : `${95/this.nameCols.length}vw`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .registry-cols, .registry-rows {
    display: flex;
    justify-content: center;
  }

  .table-el {
    background-color: white;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
    border: 1px solid black;
  }

  .--el-0 {
    font-size: 18px;
  }

  .--el-1 {
    font-size: 22px;
  }

  .--el-2 {
    font-size: 24px;
    font-style: italic;
  }

  .table-el:before {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }

  .text-table-el {
    display: inline-block;
    vertical-align: middle;
  }

  .registry-cols {
    height: 100px;
  }

  .reg-name {
    font-size: 28px;
    font-weight: bold;
    margin: 1rem;
  }

  @media (max-width: 700px) {
    .table-el {
      min-width: 200px;
    }
  }

</style>
