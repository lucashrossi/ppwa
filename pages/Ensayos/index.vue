<template>
  <v-container style="margin-top: 70px;">
    <h2 class="fss" style="text-align: center; font-family: 'Times New Roman'; font-size: 1.6vw; color: rgba(180, 0, 0, 1);">
      RET
    </h2>
    <!-- <v-flex class="mit" style="margin-left: -50px;">
      <embed src="https://public.tableau.com/views/RET_2/Dashboard2?:showVizHome=no&:embed=true" width="1900" height="800">
    </v-flex> -->
    <!-- <div class="iframe-container">
      <iframe src="https://public.tableau.com/views/RET_2/Dashboard2?:showVizHome=no&:embed=true" style="width: 1900px; height: 1000px;" />
    </div> -->
    <v-container fluid text-xs-center>
      <v-layout align-center justify-center row>
        <v-flex xs12 class="embed-container5">
          <embed class="embed-container-iframe5" src="https://public.tableau.com/views/RET_2/Dashboard2?:showVizHome=no&:embed=true" width="1920" height="800">
          <!-- <iframe class="embed-container-iframe5" frameborder="0" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Catalogo%20Buck%202018.pdf?alt=media&token=cf795851-99aa-4803-b82c-d03f0f65ae4b#page=3&zoom=100&view=fitH" ></iframe> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>

export default {
  head () {
    return {
      // title: `Page 1 (${this.name}-side)`,
      title: `Ensayos`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Page 1 description' }
      // ]
    }
  }
}
</script>

<style>
/* .iframe-container {
  overflow: hidden;
  padding-top: 70%;
  position: relative;
}
.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
} */
.embed-container5 {
    position: relative;
    padding-bottom: 800px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe5 {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* border: 5px solid green */
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
  .mit {
    margin-left: 0% !important;
  }
}
@media (min-width: 1904px) {
  .container {
      max-width: 1920px !important;
  }
}
@media (min-width: 1264px) {
  .container {
      max-width: 1920px !important;
  }
}
@media (min-width: 960px) {
  .container {
      max-width: 1920px !important;
  }
}
</style>
