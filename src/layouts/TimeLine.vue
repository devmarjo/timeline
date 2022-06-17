<template>
  <div class="q-pa-lg">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <timeline-titulo :compra="compra" />
      </q-timeline-entry>
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
import { useRoute, useRouter } from "vue-router";
import timelineTitulo from "components/Titulo.vue";
export default {
  name: "TimeLine",
  components: { timelineTitulo },
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    console.log(router);
    const compra = route.params.id;
    const passos = ref(null);
    const init = () => {
      axios
        .post("https://www.sistemagtf.com.br/gfs2.1/api.php", {
          compra: compra,
        })
        .then((res) => {
          console.log(res.data);
          passos.value = res.data;
        });
    };
    init();
    return {
      passos,
      compra,
    };
  },
};
</script>
