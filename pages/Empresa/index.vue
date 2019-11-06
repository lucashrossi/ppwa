<template>
  <v-container>
    <v-flex row justify-center style="margin-top: 5%;">
      <h1 style="font-family: 'Times New Roman'; font-size: 2vw;">
        Un sitio con historia en logro de semillas
      </h1>
      <h1 style="font-family: 'Times New Roman'; font-size: 1.1vw; margin-top: 2%;">
        &nbsp;&nbsp;En el partido de Necochea, sobre la ruta 86, se encuentra el Criadero de Semillas Buck, una empresa de punta con sede en el casco de la estancia familiar. Entre una frondosa arboleda, el laboratorio, las oficinas, los galpones y los silos se mezclan con las casas de familia, la pileta y la capilla, idéntica a la del valle de Schoenstatt y los diecisiete santuarios que hay en el país.
        <br>
        <br>
        &nbsp;&nbsp;José Buck nació en 1900, en el seno de una familia de agricultores, en Alemania. A los 23 años partió rumbo a la Argentina, alentado por la promoción que realizaba el gobierno nacional en Europa e impulsado por las escasas posibilidades que brindaba su país, devastado tras la Primera Guerra Mundial y con la ley de mayorazgo en vigencia.
        La llegada no fue fácil. Lejos de sospechar que Buck se convertiría en el apellido de la semilla -tal como reza el slogan de la empresa- el joven inmigrante trabajó en el desmonte de la selva misionera y en un campo de La Pampa.
      </h1>
    </v-flex>
    <v-flex class="container">
      <parallax-container style="margin-left: -6%; margin-right: -6%; margin-top: 5%;">
        <v-parallax src="/campoexp2.jpg" />
      </parallax-container>
      <v-flex class="overlay" style="margin-top: -5%;">
        <v-img
          src="/elAdlS.png"
          max-width="100%"
        />
      </v-flex>
    </v-flex>
  </v-container>
</template>

<script>

export default {
}
</script>

<style>

.container { position:relative;}
.overlay {
    position:absolute;
    top:40%;
    left:0%;
    z-index:1;
}

</style>
