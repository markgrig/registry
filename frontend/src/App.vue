<template>
  <SideBar :info="infoApps"/>
  <RegistryItems :items="items"/>
  <div v-if="!items">
     Загрузка..
  </div>
</template>

<script>
import RegistryItems from './components/RegistryItems.vue'
import SideBar from './components/SideBar.vue'
import getItemsXLSX from './helper/getItems/XLSX'

export default {
  name: 'App',
  components: {
    RegistryItems,
    SideBar
  },
  async mounted() {
    const items = await getItemsXLSX('./registry/registry.xlsx')
    this.items = items
  },
  data() {
    return {
      items: [],
      infoApps: {
        organization: "Централизованная религиозная организация евангильских христиан",
        name: "Ассациация Свободных Библейских Евангельских Церквей",
        data: {
          adress: "Юридический адрес: 4200133 г.Казань, ул. Академика Лавреньтева д. 17",
          email: "E-mail: voldemarip@mail.ru",
          phone: "тел/факс: (843) 515-39-29, т. 89534874149",
          ogrn: "ОГРН 1121699000026",
          EGRUL: "дата внесения в УГРЮЛ записи 20.11.2012г.",
          INN: "ИНН 1657145854",
          KPP: "КПП 165701001",
          regostarion: "Решение орегистрации было приянто органом Минюста Росии №2432-р от 08.11.2012г",
        }
    }
    }
  },
  methods: {
    async getItems() {
          this.items =  await getItemsXLSX('./registry/registry.xlsx')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  font-size: 24px;
}

body {
  background-color: #b9def8;
}


</style>
