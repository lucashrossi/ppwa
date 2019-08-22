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

    <v-toolbar max-height="45" flat>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
      <v-spacer class="hidden-sm-and-up" />
      <v-toolbar-title style="margin-right: -12%;">
        <!-- <v-btn href="/" text>
          Buck Semillas
        </v-btn> -->
        <a href="/">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Logo.png?alt=media&token=842454f6-4ee3-4214-913c-899bb15d3f75"
            contain
            max-width="70%"
            style="margin-left: 20px; margin-top: 5%;"
          />
          <!-- <v-img
            src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Logos-1.png?alt=media&token=4634e3e1-1086-4122-b726-d20fbf22721e"
          /> -->
        </a>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-up" />
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-sm-and-down">
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
    </v-toolbar>
    <v-content style="background: #fff">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-footer
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        // { title: 'Home', icon: '', link: '/', tool: '', ref: '' },
        { title: 'Empresa', icon: '', link: '/Empresa' },
        { title: 'Productos', icon: '', link: '/Productos' },
        { title: 'Semilleros', icon: '', link: '/Semilleros' },
        { title: 'Condiciones Comerciales', icon: '', link: '/Condiciones Comerciales' },
        { title: 'Noticias y Ensayos', icon: '', link: '/Noticias y Ensayos' },
        { title: 'Enlaces de Interes', icon: '', link: '/Enlaces de Interes' },
        { title: 'Contacto', icon: '', link: '/Contacto' },
        { title: 'WebMail', icon: '', link: '/WebMail' },
        { title: 'Twitter', icon: '', link: '/Twitter' }
      ]
    }
  }
}
</script>
