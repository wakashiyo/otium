<template>
  <v-form>
    <v-text-field prepend-icon="fas fa-envelope" name="mail" label="Mail" type="text"></v-text-field>
    <v-text-field id="password" prepend-icon="fas fa-lock" name="password" label="Password" type="password"></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class FormFields extends Vue {}
</script>
