<template>
  <v-content>
    <v-container fluid fill-height>
        <router-view></router-view>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Contents extends Vue {}
</script>
