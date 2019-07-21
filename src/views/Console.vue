<template>
  <v-content>
    <Navigation />
    <v-container fluid fill-height>
      <router-view></router-view>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navigation from '../components/Navigation.vue';
@Component({
  components: {
    Navigation,
  },
})
export default class Console extends Vue {}
</script>
