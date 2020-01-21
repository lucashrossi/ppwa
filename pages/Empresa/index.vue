<template>
  <v-container>
    <v-flex row justify-center style="margin-top: 70px; margin-left: 0%">
      <h2 class="fss" style="font-family: 'Times New Roman'; font-size: 1.6vw; color: rgba(180, 0, 0, 1);">
        UN SITIO CON HISTORIA
      </h2>
      <h2 class="fs" style="font-family: 'Times New Roman'; font-size: 1.1vw; margin-top: 30px;">
        &nbsp;&nbsp;En el partido de Necochea, sobre la ruta 86, se encuentra el Criadero de Semillas Buck, una empresa de punta con sede en el casco de la estancia familiar. Entre una frondosa arboleda, el laboratorio, las oficinas, los galpones y los silos se mezclan con las casas de familia, la pileta y la capilla, idéntica a la del valle de Schoenstatt y los diecisiete santuarios que hay en el país.
        <br>
        <br>
        &nbsp;&nbsp;José Buck nació en 1900, en el seno de una familia de agricultores, en Alemania. A los 23 años partió rumbo a la Argentina, alentado por la promoción que realizaba el gobierno nacional en Europa e impulsado por las escasas posibilidades que brindaba su país, devastado tras la Primera Guerra Mundial y con la ley de mayorazgo en vigencia.
        La llegada no fue fácil. Lejos de sospechar que Buck se convertiría en el apellido de la semilla -tal como reza el slogan de la empresa- el joven inmigrante trabajó en el desmonte de la selva misionera y en un campo de La Pampa.
      </h2>
    </v-flex>
    <v-flex class="container">
      <!-- <parallax-container class="prlg" style="margin-left: -6%; margin-right: -6%; margin-top: 3%;"> -->
      <v-parallax class="prlg" style="margin-left: -6%; margin-right: -6%; margin-top: 3%; margin-bottom: 4%;" src="/campoexp.jpg" />
      <!-- </parallax-container> -->
      <v-flex class="overlay" style="margin-top: 2%;">
        <v-img
          src="/elAdlS.png"
          max-width="100%"
        />
      </v-flex>
    </v-flex>
    <v-flex row justify-center style="margin-left: 0%">
      <v-flex lg6>
        <h2 class="fs" style="font-family: 'Times New Roman'; font-size: 1.1vw; margin-top: 10%; margin-bottom: 10%;">
          &nbsp;&nbsp;Seguro de un porvenir próspero, José Buck viajó a Alemania para casarse con María Ana Hummler y a poco de regresar arrendó trescientas hectáreas de campo en Defferrari (Necochea), para desarrollar su propio programa de mejoramiento.
          <br>
          <br>
          &nbsp;&nbsp;Pasaron doce años -el tiempo que necesita un cruzamiento para ser variedad- y el Criadero de Semillas Buck lanzó al mercado su primer trigo, Buck Araucano.
          <br>
          <br>
          &nbsp;&nbsp;La empresa creció de la mano de Don José y su hijo Carlos, y con ella, la estancia. Los ingenieros y encargados se instalaron junto con sus familias y llegaron a vivir tantos chicos allí que en los años 60 se construyó una escuela, al otro lado de la ruta.
        </h2>
      </v-flex>
      <v-flex>
        <v-img
          src="/historia_1.png"
          max-width="80%"
          style="margin-left: 10%;"
        />
      </v-flex>
    </v-flex>
    <v-flex>
      <!-- <parallax-container style="margin-left: -6%; margin-right: -6%; margin-top: 4%;"> -->
      <v-parallax class="prlg" style="margin-left: -6%; margin-right: -6%; margin-top: 4%;" src="/historia.png" />
      <!-- </parallax-container> -->
    </v-flex>
  </v-container>
</template>

<script>

export default {
  head () {
    return {
      // title: `Page 1 (${this.name}-side)`,
      title: `Empresa`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Page 1 description' }
      // ]
    }
  }
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
@media (max-width: 599px) {
  .fs {
    font-size: 3vw !important;
    /* font-size:14px; */
  }
  .fss {
    font-size: 4vw !important;
    /* font-size:14px; */
  }
  .prln {
    display: none !important;
  }
  .prlg {
    margin-bottom: -5% !important;
    /* display: none !important; */
    height: 200px !important;
  }
  /* .prlgg {
    height: 00px !important;
  } */
  /* .prlggg {
    margin-bottom: 0% !important;
    display: block !important;
  } */
}
</style>
