<template>
  <v-container>
    <v-flex row justify-center style="margin-top: 70px; margin-left: 0%">
      <h2 class="fss" style="font-family: 'Times New Roman'; font-size: 1.6vw; color: rgba(180, 0, 0, 1);">
        BUCK RESPLANDOR
      </h2>
      <h2 class="fs" style="font-family: 'Times New Roman'; font-size: 1.1vw; margin-top: 30px;">
        &nbsp;&nbsp;Producto del cruzamiento entre una línea tradicional de nuestro programa, y material de origen europeo surge este nuevo cultivar de ciclo largo y Grupo 1 de calidad, con una excelente estabilidad de rendimiento. Buck Resplandor no posee requerimientos de vernalización y se caracteriza por ser muy sensible al fotoperíodo, característica que le confiere muy buena plasticidad en la fecha de siembra y una amplia adaptabilidad a distintas zonas agroecológicas.
        <br>
        <br>
        &nbsp;&nbsp;En condiciones de campo Buck Resplandor se mostró moderadamente resistente a Roya de Hoja y Roya Amarilla. Con una susceptibilidad moderada a Roya del Tallo y buena tolerancia a Fusarium de la Espiga.
        <br>
        <br>
        &nbsp;&nbsp;Los datos de calidad comercial e industrial disponible muestran a Buck Resplandor con excelentes valores de Peso Hectolítrico, Gluten Húmedo, W y Estabilidad Farinográfica. Información que ratifica sus cualidades como
        variedad de Grupo 1 de Calidad.
      </h2>
    </v-flex>
    <v-layout row justify-space-between style="margin-left: 0%">
      <v-flex xs12 md4 style="margin-top: 6%">
        <v-card
          class="mx-auto"
          max-width="400"
          elevation="1"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="bolsas.jpg"
            title="Bolsas Buck"
            alt="Bolsas Buck"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            Number10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <!-- <v-card-actions>
            <v-btn
                color="orange"
                text
            >
                Share
            </v-btn>

            <v-btn
                color="orange"
                text
            >
                Explore
            </v-btn>
            </v-card-actions> -->
        </v-card>
      </v-flex>
      <v-flex xs12 md4 row justify-center style="margin-left: 0%">
        <v-img
          src="/cresp.png"
          max-width="60%"
          style="margin-top: 5%;"
          contain
          title="Catalogo Resplandor"
          alt="Catalogo Resplandor"
        />
      </v-flex>
      <v-flex xs12 md4 row justify-center style="margin-left: 0%">
        <v-img
          src="/mapresp.png"
          max-width="90%"
          style="margin-top: 0%;"
          contain
          title="Fecha de siembra Resplandor"
          alt="Fecha de siembra Resplandor"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  head () {
    return {
      // title: `Page 1 (${this.name}-side)`,
      title: `Resplandor`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Page 1 description' }
      // ]
    }
  }
}
</script>

<style>

@media (max-width: 599px) {
  .fs {
    font-size: 3vw !important;
    /* font-size:14px; */
  }
  .fss {
    font-size: 4vw !important;
    /* font-size:14px; */
  }
}
</style>
