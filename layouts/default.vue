<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed width="170">
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Buck Semillas
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider /> -->

      <v-list dense>
        <v-list-item
          v-for="item in itemsss"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="item in itemss"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-layout row>
      <v-flex class="hidden-sm-and-up">
        <div>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <div>
            <p>Buck Semillas</p>
          </div>
        </div>
      </v-flex>
    </v-layout> -->

    <v-toolbar max-height="64" flat style="font-family: 'Times New Roman';">
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer" />
      <v-spacer class="hidden-lg-and-up" />
      <v-toolbar-title style="margin-right: -10%;">
        <!-- <v-btn href="/" text>
          Buck Semillas
        </v-btn> -->
        <a href="/">
          <v-img
            src="/Logo.png"
            contain
            max-width="50%"
            style="margin-left: 15%; margin-top: 2%;"
          />
          <!-- <v-img
            src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Logo.png?alt=media&token=842454f6-4ee3-4214-913c-899bb15d3f75"
          /> -->
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="item in itemsss"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          text
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          text
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="item in itemss"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          text
          style="font-size: .750rem;"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <!-- <v-spacer class="hidden-sm-and-down" /> -->
    </v-toolbar>
    <v-content style="background: #fff">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <p style="padding: 5px 0px 0px 5px; font-size: 1.2vw; margin-bottom: 0px;">
        &copy; &nbsp;
      </p>
      <span style="padding: 0px 0px 0px 5px; font-size: 0.9vw; margin-top: 4px;">2019</span>
      <v-spacer />
      <v-flex>
        <p style="padding: 2px 0px 0px 0px; font-size: 0.8vw; margin-bottom: 0px;">
          Tel.: 02262 43-4061 | Ruta 86 KM 36, 7637 | Necochea, Buenos Aires |
          <a href="mailto:bucksem@bucksemillas.com.ar">bucksem@bucksemillas.com.ar</a>
        </p>
      </v-flex>
      <!-- <v-spacer /> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      itemsss: [
        // { title: 'Home', icon: '', link: '/', tool: '', ref: '' },
        { title: 'Empresa', icon: '', link: '/Empresa' }
      ],
      items: [
        { title: 'Productos', icon: '', link: '/Productos' },
        { title: 'Semilleros', icon: '', link: '/Semilleros' },
        { title: 'Noticias y Ensayos', icon: '', link: '/Noticias y Ensayos' },
        { title: 'Condiciones Comerciales', icon: '', link: '/Condiciones Comerciales' }
        // { title: 'Enlaces de Interes', icon: '', link: '/Enlaces de Interes' }
      ],
      itemss: [
        { title: 'Twitter', icon: '', link: '/Twitter' },
        { title: 'WebMail', icon: '', link: '/WebMail' },
        { title: 'Contacto', icon: '', link: '/Contacto' }
      ]
    }
  }
}
</script>
