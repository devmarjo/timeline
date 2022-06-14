<template>
  <q-page class="flex flex-center q-px-lg q-pb-md">

    <q-timeline color="secondary">
      <q-timeline-entry heading text="Timeline heading" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="text"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
        :text="text"
      />

      <q-timeline-entry heading text="November, 2017" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :text="text"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :text="text"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
        :text="text"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :text="text"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :text="text"
      />
    </q-timeline>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});

// --- array de passos

[
  {
    title:"Cotação de preço Aprovada",
    subtitle:"13/06/2022",
    color:"green",
    icon:"price_check",
    text: "Cotação aberta por Mario Frias e Aprovada por João Martins de Oliveira as 10:02 do dia 13 de Junho de 2022"
  },
  {
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
  {
    title:"Produto enviado",
    subtitle:"15/06/2022",
    color:"green",
    icon:"request_quote",
    text: "Fornecedor Cirurgica Al-Styn Enviou seu produto e esta disponivel para rastreamento no link abaixo",
    links: [
      { text: 'Rastreio', href: 'www.google.com.br' }
    ]
  },
  {
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
  {
    title:"Aguardando Conferencia do Cliente",
    subtitle:"--/--/----",
    color:"grey",
    icon:"request_quote",
    text: ""
  }
]

</script>
