<template>
  <v-card class="elecation-12">
    <Toolbar />
    <v-card-text>
      <FormFields />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <FormActions />
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Toolbar from './Toolbar.vue';
import FormFields from './FormFields.vue';
import FormActions from './FormActions.vue';
@Component({
  components: {
    Toolbar,
    FormFields,
    FormActions,
  },
})
export default class FormCard extends Vue {}
</script>
