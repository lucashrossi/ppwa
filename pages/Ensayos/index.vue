<template>
  <v-container style="margin-top: 60px;">
    <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 1.6vw; color: rgba(180, 0, 0, 1);">
      RET
    </h2>
    <v-flex style="margin-left: -50px;">
      <embed src="https://public.tableau.com/views/RET_2/Dashboard2?:showVizHome=no&:embed=true" width="1900" height="800">
    </v-flex>
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
