<template>
  <div class="q-pa-lg">

    <q-timeline :layout="layout" :side="side" color="secondary">
      <q-timeline-entry heading>Timeline</q-timeline-entry>

    <!-- passo1 -->
    <ul>
      <li v-for="passo1 in passo1" key="passo1">
        {{passo1}}
        <q-timeline-entry
          :title="title"
          :subtitle="subtitle"
          :color="color"
          :icon="icon"
          :body="body"
        >
        </q-timeline-entry>
      </li>
    </ul>

    <!-- passo2 -->
      <q-timeline-entry
        :title="title"
        :subtitle="subtitle"
        :color="color"
        :icon="icon"
        :body="body"
      >
      </q-timeline-entry>

    <!-- passo3 -->
      <q-timeline-entry
        :title="title"
        :subtitle="subtitle"
        :color="color"
        :icon="icon"
        :body="body"
      >
      </q-timeline-entry>

    <!-- passo4 -->
      <q-timeline-entry
        :title="title"
        :subtitle="subtitle"
        :color="color"
        :icon="icon"
        :body="body"
      >
      </q-timeline-entry>

    <!-- passo5 -->
      <q-timeline-entry
        :title="title"
        :subtitle="subtitle"
        :color="color"
        :icon="icon"
        :body="body"
      >
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>

<script>
export default {
  setup () {
    return {

      passo1: {
        title:"Cotação de preço Aprovada",
        subtitle:"13/06/2022",
        color:"green",
        icon:"price_check",
        body: 'Cotação aberta por Mario Frias e Aprovada por João Martins de Oliveira as 10:02 do dia 13 de Junho de 2022'
      },

      passo2: {
        title:"Nota Fiscal Emitida",
        subtitle:"14/06/2022",
        color:"green",
        icon:"request_quote",
        text: "Fornecedor Cirurgica Al-Styn emitir nota fiscal numero 12312321",
        fotos: [
          { text: 'Nota Fiscal', src: 'https://assets.b9.com.br/wp-content/uploads/2018/02/Google-Imagens.png' }
        ],
        links: [
          { text: 'Nota Fiscal', href: 'www.google.com.br' }
        ]
      },

      passo3: {
        title: "Produto enviado",
        subtitle: "15/06/2022",
        color: "green",
        icon: "request_quote",
        text: "Fornecedor Cirurgica Al-Styn Enviou seu produto e esta disponivel para rastreamento no link abaixo",
        links: [
          { text: 'Rastreio', href: 'www.google.com.br' }
        ]
      },

      passo4: {
        title:"Produto entregue",
        subtitle:"25/06/2022",
        color:"green",
        icon:"request_quote",
        text: "Fornecedor informou que o produto já foi entregue",
        fotos: [
          { text: 'Canhoto da nota fiscal', src: 'https://assets.b9.com.br/wp-content/uploads/2018/02/Google-Imagens.png' }
        ],
        links: [
          { text: 'Canhoto da nota fiscal', href: 'www.google.com.br' }
        ]
      },

      passo5: {
        title:"Aguardando Conferencia do Cliente",
        subtitle:"--/--/----",
        color:"grey",
        icon:"request_quote",
        text: ""
      }

    }
  }
}
</script>
