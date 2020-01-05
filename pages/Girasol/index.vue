<template>
  <v-container>
    <v-flex row justify-center style="margin-top: 60px; margin-left: 0%">
      <h2 style="font-family: 'Times New Roman'; font-size: 2vw; color: rgba(180, 0, 0, 1);">
        GIRASOL
      </h2>
    </v-flex>
    <v-flex row justify-center style="margin-left: 0%">
      <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; margin-top: 30px;">
        &nbsp;&nbsp;En Buck Semillas S.A. trabajamos en el mejoramiento de esta especie desde hace más de 30 años obteniendo y comercializando híbridos con reconocido potencial de rendimiento y estabilidad del mismo. Para esta campaña estamos presentando como comerciales los Girasoles Híbridos Buck 363CL y Buck 355CL.
      </h2>
    </v-flex>
    <v-flex row justify-center style="padding-bottom: 30px; border-bottom: 4px solid green; margin-left: 0%">
      <v-flex lg4 style="margin-top: 5%;">
        <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
          <v-card
            class="mx-auto"
            max-width="350"
            hover
            shaped
          >
            <v-img
              class="white--text align-end"
              src="/bolsas.webp"
            >
              <v-card-title style="color: #ff0000">
                Buck 363CL
              </v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">
              &nbsp;
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Ciclo Intermedio a Corto</div>
              <br>
              <div>Excelente cuajado y llenado de grano. Muy buen porcentaje de aceite. Capitulo curvado</div>
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
        </nuxt-link>
      </v-flex>
      <v-flex lg4 style="margin-top: 5%;">
        <v-card
          class="mx-auto"
          max-width="400"
          hover
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="/bolsas.webp"
          >
            <v-card-title>Buck 355CL</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            &nbsp;
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Ciclo Intermedio</div>
            <br>
            <div>Estabilidad de rendimiento. Excelente cuajado y llenado de grano. Adecuado nivel de materia grasa</div>
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
    </v-flex>
  </v-container>
</template>

<script>

export default {
}
</script>
