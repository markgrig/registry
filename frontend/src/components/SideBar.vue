<template>
  <div
   class="org">
    {{ info.organization }}
  </div>
  <div
  class="org-name">
    {{ info.name }}
  </div>
  <div class = "sidebar-date">
    <div v-for="el, key in textInfo" :key="key">
      <div>
        {{ el  }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  props: {
    info: Object,
  },
  computed: {
    textInfo() {
      const data = this.info.data
      return [
          `${data.adress}`,
          `${data.email} ${data.phone} ${data.ogrn}`,
          `${data.EGRUL} ${data.INN} ${data.KPP}`,
          `${data.regostarion}`
          ]
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar-date{
    width: max-content;
    margin: 20px auto;
  }

  .sidebar-date div {
    margin: auto;
    text-align: left;
  }

  .org {
    width: 650px;
    margin: auto;
    font-size: 32px;
    font-weight: bold;
  }

  .org-name {
    width: 650px;
    margin: auto;
    font-style: italic;
    font-size: 40px;
    text-decoration: underline;

  }
</style>
