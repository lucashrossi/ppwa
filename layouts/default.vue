<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="190" fixed>
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Buck Semillas
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider /> -->

      <v-list dense>
        <v-list-group
          v-for="item in itemssss"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          link
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title style="font-size: 12px; font-family: 'Times New Roman';">
              {{ item.title }}
            </v-list-item-title>
          </template>
          <v-list-item
            v-for="(itemm, index) in itemsd"
            :key="index"
            :to="itemm.link"
          >
            <v-list-item-title style="font-size: 12px; font-family: 'Times New Roman'; margin-left: 20px">
              {{ itemm.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-divider />
        <!-- <v-list-item
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
        </v-list-item> -->
        <!-- <v-divider /> -->
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          link
        >
          <v-list-item-content>
            <v-list-item-title style="font-size: 12px; font-family: 'Times New Roman';">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          link
          target="_blank"
          href="https://twitter.com/buck_semillas"
        >
          <v-list-item-content>
            <v-list-item-title style="font-size: 12px; font-family: 'Times New Roman';">
              Twitter
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item
          link
          target="_blank"
          href="http://190.105.237.177/webmail"
        >
          <v-list-item-content>
            <v-list-item-title style="font-family: 'Times New Roman';">
              Webmail
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item
          link
          to="/Contacto"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title style="font-size: 12px; font-family: 'Times New Roman';">
              Contacto
            </v-list-item-title>
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

    <v-app-bar
      height="64"
      flat
      style="font-family: 'Times New Roman'; background-color: rgb(230, 230, 230);"
      fixed
    >
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer" />
      <v-spacer class="hidden-lg-and-up" />
      <v-toolbar-title>
        <!-- <v-btn href="/" text>
          Buck Semillas
        </v-btn> -->
        <!-- <a href="/"> -->
        <nuxt-link to="/">
          <v-flex row justify-center align-center style="width: 100%">
            <v-img
              id="home"
              src="/Logot.png"
              contain
              max-width="50%"
              width="650px"
              style="margin-top: 6%; margin-left: -18%"
            />
          </v-flex>
          <!-- <v-img
            class="hidden-lg-and-up"
            src="/Logo.webp"
            contain
            max-width="30%"
            style="margin-left: 10%; margin-top: 0%;"
          /> -->
          <!-- <v-img
            src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Logowebp?alt=media&token=842454f6-4ee3-4214-913c-899bb15d3f75"
          /> -->
        </nuxt-link>
        <!-- </a> -->
      </v-toolbar-title>
      <v-spacer style="margin-right: -18%" />
      <div class="text-center, hidden-md-and-down">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              height="60"
              to="/Productos"
              style="width: 110px; font-size: 13px; font-family: 'Times New Roman';"
              v-on="on"
            >
              Productos
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in itemsd"
              :key="index"
              :to="item.link"
            >
              <v-list-item-title style="font-size: 13px; font-family: 'Times New Roman'; color: rgba(0, 0, 0, 1);">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-toolbar-items class="hidden-md-and-down">
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
      </v-toolbar-items> -->
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :href="item.ref"
          :target="item.tar"
          text
          style="width: 110px; font-size: 13px; font-family: 'Times New Roman'; color: rgba(0, 0, 0, 1);"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          target="_blank"
          href="https://twitter.com/buck_semillas"
          text
          style="font-size: 11px; font-family: 'Times New Roman'; width: 100px;"
        >
          Twitter
        </v-btn>
        <!-- <v-btn
          target="_blank"
          href="http://190.105.237.177/webmail"
          text
          style="font-size: .750rem;"
        >
          Webmail
        </v-btn> -->
        <v-btn
          to="/Contacto"
          text
          style="font-size: 11px; font-family: 'Times New Roman'; width: 100px;"
          nuxt
        >
          Contacto
        </v-btn>
      </v-toolbar-items>
      <!-- <v-spacer class="hidden-sm-and-down" /> -->
    </v-app-bar>
    <v-content v-if="this.$route.path === '/'" style="background: #fff; background-size: 100% 1200px; background-repeat: no-repeat; background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/fondo.png');">
      <!-- <v-img v-if="this.$route.path === '/'" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/BUCK%202019_062.jpg?alt=media&token=85e84014-724b-474e-adc3-a605e50b3060" /> -->
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-content v-else style="background: #fff">
      <!-- <v-img v-if="this.$route.path === '/'" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/BUCK%202019_062.jpg?alt=media&token=85e84014-724b-474e-adc3-a605e50b3060" /> -->
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <p style="padding: 5px 0px 0px 5px; font-size: 1.2vw; margin-bottom: 0px;">
        &copy;
      </p>
      <span style="padding: 0px 0px 0px 5px; font-size: 0.9vw; margin-top: 4px;">2020</span>
      <v-spacer />
      <v-flex>
        <p style="padding: 2px 0px 0px 0px; font-size: 0.8vw; margin-bottom: 0px;">
          Tel.: 02262 43-4061 | Ruta 86 KM 36, 7637 | Necochea, Buenos Aires |
          <a href="mailto:bucksem@bucksemillas.com.ar">bucksem@bucksemillas.com.ar</a>
        </p>
      </v-flex>
      <!-- <v-spacer /> -->
      <v-btn
        target="_blank"
        href="http://190.105.237.177/webmail"
        text
        style="font-size: 12px; font-family: 'Times New Roman';"
        x-small
      >
        Webmail
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      // itemsss: [
      //   // { title: 'Home', icon: '', link: '/', tool: '', ref: '' },
      //   // { title: 'Productos', icon: '', link: '/Productos' },
      //   { title: 'Empresa', icon: '', link: '/Empresa' }
      // ],
      itemssss: [
        { title: 'Productos', icon: '', link: '/Productos' }
      ],
      items: [
        { title: 'Empresa', icon: '', link: '/Empresa' },
        { title: 'Semilleros', icon: '', link: '/Semilleros' },
        { title: 'Regalias', icon: '', link: '/CC' },
        { title: 'Ensayos', icon: '', link: '/Ensayos' }
        // { title: 'Enlaces de Interes', icon: '', link: '/Enlaces de Interes' }
      ],
      itemsd: [
        { title: 'Trigo Pan', link: '/Productos' },
        { title: 'Candeal', link: '/Candeal' },
        { title: 'Avena', link: '/Avena' },
        { title: 'Girasol', link: '/Girasol' }
      ]
    }
  }
}
</script>

<style>
/* .v-content__wrap {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/BUCK%202019_062.jpg?alt=media&token=85e84014-724b-474e-adc3-a605e50b3060');
} */
</style>
