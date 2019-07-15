<template>
  <!-- app propを追加することでコンテンツが横に並んでnavigationと被らなくなる -->
  <v-navigation-drawer app>
    <DrawerList />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DrawerList from '../components/DrawerList.vue';
@Component({
  components: {
    DrawerList,
  },
})
export default class Navigation extends Vue {}
</script>

<style>

</style>
