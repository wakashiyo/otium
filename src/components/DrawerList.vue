<template>
  <v-list dense class="pt-0">
    <!-- :toでrouter-linkなどの内部でのリンクに飛ばせる -->
    <v-list-tile
      v-for="(item, i) in listItems"
      :key="i"
      :to="item.path"
      >
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class DrawerList extends Vue {
  private listItems = [
    {
      path: '/',
      icon: 'fas fa-list',
      title: 'dashboard',
    },
    {
      path: '/setting',
      icon: 'fas fa-cog',
      title: 'setting',
    },
    {
      path: '/edit',
      icon: 'fas fa-edit',
      title: 'edit',
    },
  ];
}
</script>

<style lang="scss">
// scopedを外す
</style>
