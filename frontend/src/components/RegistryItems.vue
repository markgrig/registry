<template>
  <div
    class ="reg-name">
    Cлужители:
  </div>

  <div class = "registry-cols">
    <div
      v-for="el, i in nameCols" :key="i"
      class = "table-el">
        {{  el  }}
    </div>
  </div>


  <div
    v-for="el, i in items" :key="i">
    <div class = "registry-rows">
      <div
      v-for="value, i in nameCols" :key="i">

        <div
          class = "table-el">
          {{ el[value] }}
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
    width: 25vw;
    padding: 10px;
    height: 100%;
    border: 1px solid black;
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
