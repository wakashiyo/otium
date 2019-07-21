<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <FormCard />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FormCard from '../components/FormCard.vue';
@Component({
  components: {
    FormCard,
  },
})
export default class Login extends Vue {}
</script>
