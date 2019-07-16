<template>
  <v-app>
    <Navigation />
    <Contents />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navigation from './views/Navigation.vue';
import Contents from './views/Contents.vue';
@Component({
  components: {
    Navigation,
    Contents,
  },
})
export default class App extends Vue {}
</script>
