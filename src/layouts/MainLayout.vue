<template>
  <div class="q-pa-lg">
    <q-timeline color="secondary">
      <q-timeline-entry heading>Timeline</q-timeline-entry>
      <q-timeline-entry
        v-for="(passo, index) in passos"
        :key="'passo' + index"
        :title="passo.title"
        :subtitle="passo.subtitle"
        :color="passo.color"
        :icon="passo.icon"
        :body="passo.body"
      >
      {{ passo.text }}
        <!-- <pre>{{ passo }}</pre> -->
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const passos = ref(null);
    const init = () => {
      axios.get("https://www.sistemagtf.com.br/gfs2.1/api.php").then((res) => {
        console.log(res.data);
        passos.value = res.data;
      });
    };
    init();
    return {
      passos,
    };
  },
};
</script>
