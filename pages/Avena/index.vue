<template>
  <v-container>
    <v-flex row justify-center style="margin-top: 60px; margin-left: 0%">
      <h2 style="font-family: 'Times New Roman'; font-size: 1.6vw; color: rgba(180, 0, 0, 1);">
        AVENA
      </h2>
    </v-flex>
    <v-flex row justify-center style="margin-left: 0%">
      <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; margin-top: 30px;">
        &nbsp;&nbsp;Además este año ofrecemos, la nueva variedad de avena BONAERENSE INTA YAPA.
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
                Bonaerense Inta Yapa
              </v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">
              &nbsp;
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Ciclo Intermedio</div>
              <br>
              <div>...</div>
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
            <v-card-title>Bonaerense Inta Aikén</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            &nbsp;
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Ciclo Intermedio</div>
            <br>
            <div>...</div>
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
      <v-flex lg4 style="margin-top: 5%;">
        <v-card
          class="mx-auto"
          max-width="400"
          elevation="1"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="/bolsas.webp"
          >
            <v-card-title>Bonaerense Inta Maná</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            &nbsp;
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Ciclo Intermedio a Corto</div>
            <br>
            <div>...</div>
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
