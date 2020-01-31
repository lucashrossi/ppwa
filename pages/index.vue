<template>
  <!-- <v-container>
    <v-layout>
      <v-flex>
        <div>I'm a flexbox container!</div>
      </v-flex>
    </v-layout>
  </v-container> -->
  <!-- <v-container style="background-color: rgb(230, 230, 230);"> -->
  <v-container>
    <!-- <div style="background-size: 100% 95%; background-repeat: no-repeat; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/btarmt.png');"> -->
    <v-layout class="loh" style="margin-top: 110px; margin-bottom: -1.5%;">
      <v-flex
        align-end
        row
        class="hidden-md-and-down"
        lg2
        xl2
        style="margin-left: 0%"
      >
        <div>
          <!-- <v-img
            src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/WheatCC.png?alt=media&token=a1d032b0-53eb-4008-b688-3022269b4497"
            contain
            max-width="50%"
            style="margin-left: 10%"
          /> -->
          <!-- <picture>
            <source srcset="/WheatCC.webp" type="image/webp">
            <source srcset="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/WheatCC.png?alt=media&token=6ab4d497-24b6-4b4d-acde-9589d29ed539" type="image/png">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/WheatCC.png?alt=media&token=6ab4d497-24b6-4b4d-acde-9589d29ed539"
              style="max-width: 50%; height: 192px; margin-left: 10%"
            >
          </picture> -->
          <v-img
            src="/WheatCC.png"
            contain
            max-width="50%"
            height="192px"
            style="margin-left: 10%"
            title="Figura trigo"
            alt="Firura trigo"
          />
        </div>
      </v-flex>
      <v-flex row justify-center align-end style="margin-left: 0%">
        <v-spacer class="hidden-md-and-down" />
        <v-layout row justify-center style="margin-left: 0%">
          <v-flex class="mbm" xs12 sm6 md6 lg3>
            <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
              <v-layout class="vnlf" row justify-center align-center style="margin-left: 0%;">
                <v-flex class="bdn" xs2 sm2 lg2>
                  <v-img
                    src="/b1.png"
                    contain
                    title="Bolsa Buck"
                    alt="Bolsa Buck"
                    width="100px"
                    height="150px"
                  />
                </v-flex>
                <v-flex xs10 sm10 lg11>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 20px; color: rgba(180, 0, 0, 1);">
                      Buck
                    </h2> -->
                  <!-- <h2 style="margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                    Resplandor&nbsp;
                    <span style="color: rgba(255,180,50,1); font-size: 30px;">Nuevo!</span>
                  </h2> -->
                  <h2 class="fsss" style="color: rgba(255,200,50,1); text-align: center; font-family: 'Times New Roman'; font-size: 25px;">
                    Nuevo!
                  </h2>
                  <v-layout justify-center align-center>
                    <h2 class="fsnv" style="border-radius: 25px; border-width: 1px; border-color: black; border-style: solid; margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                      &nbsp;&nbsp;Buck&nbsp;<span class="fsnvs" style="color: rgba(100,100,100,1); font-size: 30px;">Resplandor</span>&nbsp;&nbsp;
                    </h2>
                  </v-layout>
                  <!-- <v-layout justify-center align-center>
                    <v-btn outlined rounded depressed class="fsnv tvr" style="font-weight: 900; text-align: center; border: double; margin-bottom: 3%; font-family: 'Times New Roman'; font-size: 20px; color: rgba(180, 0, 0, 1);">
                      Buck&nbsp;<span class="fsnv" style="color: rgba(100,100,100,1); font-size: 20px;">Resplandor</span>
                    </v-btn>
                  </v-layout> -->
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                      Estabilidad de Rto y Platicidad de Siembra ssssssss ss sss ss s s s ss s s s sss s ss sssssssssss ss sss ss ssssssssssss ss sssss s sssssss ssssssss sssssssss s sss ssss ssssss sssss ssss
                    </h2> -->
                  <!-- </v-flex>
                <v-flex xs10 sm10 lg9 style="margin-top: 3%;"> -->
                  <h3 class="fs" style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                    Estabilidad de Rto y Platicidad de Siembra
                  </h3>
                  <h4 class="fsssi" style="font-weight: 900; color: rgba(200,120,40,1); text-align: center; font-family: 'Times New Roman'; font-size: 16px;">
                    + Info
                  </h4>
                </v-flex>
                <!-- <v-flex xs10 sm10 lg9>
                  <v-card
                    class="mx-auto"
                    max-width="350"
                    hover
                  >
                    <v-img
                      class="white--text align-end"
                      src="/bolsas.jpg"
                      title="Bolsas Buck"
                      alt="Bolsas Buck"
                    >
                      <v-card-title style="color: #ffff00">
                        Buck Resplandor
                      </v-card-title>
                    </v-img>
                    <v-card-subtitle class="pb-0">
                      Grupo 1
                    </v-card-subtitle>
                    <v-card-text class="text--primary">
                      <div>Ciclo Largo</div>
                    </v-card-text>
                  </v-card>
                </v-flex> -->
              </v-layout>
            </nuxt-link>
          </v-flex>
          <v-spacer class="hidden-md-and-down" />
          <v-flex class="mbm" xs12 sm6 md6 lg3>
            <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
              <v-layout class="vnlf" row justify-center align-center style="margin-left: 0%">
                <v-flex class="bdn" xs2 sm2 lg2>
                  <v-img
                    src="/b1.png"
                    contain
                    title="Bolsa Buck"
                    alt="Bolsa Buck"
                    width="100px"
                    height="150px"
                  />
                </v-flex>
                <v-flex xs10 sm10 lg11>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 20px; color: rgba(180, 0, 0, 1);">
                      Buck
                    </h2> -->
                  <!-- <h2 style="margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                    Resplandor&nbsp;
                    <span style="color: rgba(255,180,50,1); font-size: 30px;">Nuevo!</span>
                  </h2> -->
                  <h2 class="fsss" style="color: rgba(255,200,50,1); text-align: center; font-family: 'Times New Roman'; font-size: 25px;">
                    Nuevo!
                  </h2>
                  <v-layout justify-center align-center>
                    <h2 class="fsnv" style="border-radius: 25px; border-width: 1px; border-color: black; border-style: solid; margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                      &nbsp;&nbsp;Buck&nbsp;<span class="fsnvs" style="color: rgba(100,100,100,1); font-size: 30px;">Resplandor</span>&nbsp;&nbsp;
                    </h2>
                  </v-layout>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                      Estabilidad de Rto y Platicidad de Siembra ssssssss ss sss ss s s s ss s s s sss s ss sssssssssss ss sss ss ssssssssssss ss sssss s sssssss ssssssss sssssssss s sss ssss ssssss sssss ssss
                    </h2> -->
                  <!-- </v-flex>
                <v-flex xs10 sm10 lg9 style="margin-top: 3%;"> -->
                  <h3 class="fs" style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                    Estabilidad de Rto y Platicidad de Siembra
                  </h3>
                  <h4 class="fsssi" style="font-weight: 900; color: rgba(200,120,40,1); text-align: center; font-family: 'Times New Roman'; font-size: 16px;">
                    + Info
                  </h4>
                </v-flex>
              </v-layout>
            </nuxt-link>
          </v-flex>
          <v-spacer class="hidden-md-and-down" />
          <v-flex class="mbm" xs12 sm6 md6 lg3>
            <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
              <v-layout class="vnlf" row justify-center align-center style="margin-left: 0%">
                <v-flex class="bdn" xs2 sm2 lg2>
                  <v-img
                    src="/b1.png"
                    contain
                    title="Bolsa Buck"
                    alt="Bolsa Buck"
                    width="100px"
                    height="150px"
                  />
                </v-flex>
                <v-flex xs10 sm10 lg11>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 20px; color: rgba(180, 0, 0, 1);">
                      Buck
                    </h2> -->
                  <!-- <h2 style="margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                    Resplandor&nbsp;
                    <span style="color: rgba(255,180,50,1); font-size: 30px;">Nuevo!</span>
                  </h2> -->
                  <h2 class="fsss" style="color: rgba(255,200,50,1); text-align: center; font-family: 'Times New Roman'; font-size: 25px;">
                    Nuevo!
                  </h2>
                  <v-layout justify-center align-center>
                    <h2 class="fsnv" style="border-radius: 25px; border-width: 1px; border-color: black; border-style: solid; margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                      &nbsp;&nbsp;Buck&nbsp;<span class="fsnvs" style="color: rgba(100,100,100,1); font-size: 30px;">Resplandor</span>&nbsp;&nbsp;
                    </h2>
                  </v-layout>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                      Estabilidad de Rto y Platicidad de Siembra ssssssss ss sss ss s s s ss s s s sss s ss sssssssssss ss sss ss ssssssssssss ss sssss s sssssss ssssssss sssssssss s sss ssss ssssss sssss ssss
                    </h2> -->
                  <!-- </v-flex>
                <v-flex xs10 sm10 lg9 style="margin-top: 3%;"> -->
                  <h3 class="fs" style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                    Estabilidad de Rto y Platicidad de Siembra
                  </h3>
                  <h4 class="fsssi" style="font-weight: 900; color: rgba(200,120,40,1); text-align: center; font-family: 'Times New Roman'; font-size: 16px;">
                    + Info
                  </h4>
                </v-flex>
              </v-layout>
            </nuxt-link>
          </v-flex>
          <v-spacer class="hidden-md-and-down" />
          <v-flex class="mbm" xs12 sm6 md6 lg3>
            <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
              <v-layout class="vnlf" row justify-center align-center style="margin-left: 0%">
                <v-flex class="bdn" xs2 sm2 lg2>
                  <v-img
                    src="/b1.png"
                    contain
                    title="Bolsa Buck"
                    alt="Bolsa Buck"
                    width="100px"
                    height="150px"
                  />
                </v-flex>
                <v-flex xs10 sm10 lg11>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 20px; color: rgba(180, 0, 0, 1);">
                      Buck
                    </h2> -->
                  <!-- <h2 style="margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                    Resplandor&nbsp;
                    <span style="color: rgba(255,180,50,1); font-size: 30px;">Nuevo!</span>
                  </h2> -->
                  <h2 class="fsss" style="color: rgba(255,200,50,1); text-align: center; font-family: 'Times New Roman'; font-size: 25px;">
                    Nuevo!
                  </h2>
                  <v-layout justify-center align-center>
                    <h2 class="fsnv" style="border-radius: 25px; border-width: 1px; border-color: black; border-style: solid; margin-bottom: 3%; text-align: center; font-family: 'Times New Roman'; font-size: 25px; color: rgba(180, 0, 0, 1);">
                      &nbsp;&nbsp;Buck&nbsp;<span class="fsnvs" style="color: rgba(100,100,100,1); font-size: 30px;">Resplandor</span>&nbsp;&nbsp;
                    </h2>
                  </v-layout>
                  <!-- <h2 style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                      Estabilidad de Rto y Platicidad de Siembra ssssssss ss sss ss s s s ss s s s sss s ss sssssssssss ss sss ss ssssssssssss ss sssss s sssssss ssssssss sssssssss s sss ssss ssssss sssss ssss
                    </h2> -->
                  <!-- </v-flex>
                <v-flex xs10 sm10 lg9 style="margin-top: 3%;"> -->
                  <h3 class="fs" style="text-align: center; font-family: 'Times New Roman'; font-size: 14px;">
                    Estabilidad de Rto y Platicidad de Siembra
                  </h3>
                  <h4 class="fsssi" style="font-weight: 900; color: rgba(200,120,40,1); text-align: center; font-family: 'Times New Roman'; font-size: 16px;">
                    + Info
                  </h4>
                </v-flex>
              </v-layout>
            </nuxt-link>
          </v-flex>
        </v-layout>
        <v-spacer class="hidden-md-and-down" />
      </v-flex>
    </v-layout>
    <div
      style="height: 40px; border-bottom: 2px solid green; border-left: 2px solid green;"
      class="sbv"
    />
    <v-layout style="margin-top: 8%;" justify-center>
      <v-flex row style="margin-left: 0%">
        <v-flex>
          <v-flex row justify-center style="margin-left: 0%">
            <v-layout style="margin-top: 1%; margin-bottom: -3%;">
              <v-flex
                align-end
                row
                class="hidden-md-and-down"
                lg2
                xl2
                style="margin-left: 0%"
              >
                <div>
                  <!-- <v-img
                    src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/GirasolC.png?alt=media&token=94d8832b-5b1a-4a39-9652-34a727f6cb00"
                    contain
                    max-width="90%"
                    style="margin-left: 18%"
                  /> -->
                  <v-img
                    src="/GirasolC.png"
                    contain
                    max-width="90%"
                    style="margin-left: 18%"
                    title="Figura girasol"
                    alt="Figura girasol"
                    width="100px"
                    height="100px"
                  />
                </div>
              </v-flex>
              <v-flex row justify-center xs12 style="margin-left: 0%">
                <div>
                  <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/GirasolC.png?alt=media&token=e734b661-9d1d-4d0a-9220-c35dfd7f0c0a"
                      contain
                      max-width="90%"
                      title="Bolsa girasol"
                      alt="Bolsa girasol"
                      width="100px"
                      height="100px"
                    />
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/GirasolC.png?alt=media&token=e734b661-9d1d-4d0a-9220-c35dfd7f0c0a"
                      contain
                      max-width="90%"
                      title="Bolsa girasol"
                      alt="Bolsa girasol"
                      width="100px"
                      height="100px"
                    />
                  </nuxt-link>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex row justify-left style="margin-left: 0%">
            <div
              style="width: 95%; height: 40px; border-bottom: 2px solid green;  border-left: 2px solid green; margin-left: -1%;"
              class="sbv sbvg"
            />
          </v-flex>
        </v-flex>
        <v-flex>
          <v-flex row justify-center style="margin-left: 0%">
            <v-layout style="margin-top: 1%; margin-bottom: -3%;">
              <v-flex
                align-end
                row
                class="hidden-md-and-down"
                lg2
                xl2
                style="margin-left: 0%"
              >
                <div>
                  <!-- <v-img
                    src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/AvenaCCC.png?alt=media&token=8425f225-c036-43b0-855a-f4135d8d8716"
                    contain
                    max-width="90%"
                    style="margin-left: 15%"
                  /> -->
                  <v-img
                    src="/AvenaCCC.png"
                    contain
                    max-width="90%"
                    style="margin-left: 15%"
                    title="Figura avena"
                    alt="Figura avena"
                    width="100px"
                    height="100px"
                  />
                </div>
              </v-flex>
              <v-flex row justify-center style="margin-left: 0%">
                <div>
                  <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/AvenaCCC.png?alt=media&token=837a5a97-b2a0-4904-b988-febf0794d814"
                      contain
                      max-width="90%"
                      title="Bolsa avena"
                      alt="Bolsa avena"
                      width="100px"
                      height="100px"
                    />
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link to="/Resplandor" style="text-decoration: none; color: #000000;">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/AvenaCCC.png?alt=media&token=837a5a97-b2a0-4904-b988-febf0794d814"
                      contain
                      max-width="90%"
                      title="Bolsa avena"
                      alt="Bolsa avena"
                      width="100px"
                      height="100px"
                    />
                  </nuxt-link>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex row justify-left style="margin-left: 0%">
            <div
              style="width: 100%; height: 40px; border-bottom: 2px solid green;  border-left: 2px solid green;"
              class="sbv sbvg"
            />
          </v-flex>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-flex class="container vnm">
      <!-- <video style="width: 115%; height: auto; margin-left: -8%; margin-top: 8%;" loop autoplay muted> -->
      <video style="width: 112%; height: auto; margin-left: -6%; margin-top: 4%;" loop autoplay muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/demodron3.mp4?alt=media&token=710a0cf6-66a2-42b2-9d5a-e225fcd635d2">
      </video>
      <v-flex class="overlay">
        <v-img
          src="/elAdlS.png"
          max-width="100%"
          title="El Apellido de la Semilla"
          alt="El Apellido de la Semilla"
        />
      </v-flex>
    </v-flex>
    <!-- </div> -->
    <v-flex row justify-center style="margin-top: 6%; margin-left: 0%">
      <h1 class="fss" style="font-family: 'Times New Roman'; font-size: 2.5vw; text-shadow: 1px 1px rgba(180, 100, 50, 1);">
        Campaña Trigo&nbsp;
        <span class="fsss" style="color:red; font-size: 3vw;">2019-2020</span>
        &nbsp;Buck Semillas
      </h1>
    </v-flex>
    <v-flex row justify-center style="margin-top: 4%; margin-left: 0%">
      <p class="fs" style="font-family: 'Times New Roman'; font-size: 1.1vw;">
        &nbsp;&nbsp;Este año ofrecemos once variedades de Trigo Pan, entre las que destacamos el lanzamiento de dos nuevas variedades de ciclo largo y alto potencial de rendimiento: BUCK RESPLANDOR de Grupo 1 de Calidad y BUCK CUMELÉN de Grupo 2 de Calidad.
        <br>
        &nbsp;&nbsp;La Calidad del Trigo ha sido desde siempre uno de nuestros principales objetivos, muestra de ello es que de las once variedades ofrecidas cinco pertenecen al Grupo 1 de Calidad con muy buenas cualidades agronómicas. Tal es el caso del ya mencionado BUCK RESPLANDOR y los ya conocidos BUCK DESTELLO (ciclo largo), BUCK METEORO y BUCK CAMBÁ (ciclo intermedio) y BUCK SAETA (ciclo corto).
      </p>
    </v-flex>
    <v-layout row justify-space-between style="margin-left: 0%">
      <v-flex
        xs12
        lg4
        row
        style="margin-top: 4%; margin-left: 0%"
      >
        <p class="fs" style="font-family: 'Times New Roman'; font-size: 1.1vw;">
          &nbsp;&nbsp;La campaña de Trigo 2018 fue la de mayor volumen de producción de nuestro país. Los resultados obtenidos en la RET y otros ensayos, además de la información de productores, nos permiten destacar el comportamiento de nuestras variedades BUCK DESTELLO, BUCK METEORO, BUCK SAETA, BUCK® SY120, BUCK® SY211 y BUCK® SY330.
          <br>
          &nbsp;&nbsp;Respecto a los Trigos Candeales vale destacar el nuevo cultivar BUCK PERLA, de ciclo corto y muy alto potencial de rendimiento, que se suma a los ya conocidos BUCK ZAFIRO y BUCK ESMERALDA, de excelente comportamiento agronómico y con una calidad industrial acorde a las necesidades de la industria fideera nacional.
        </p>
      </v-flex>
      <v-flex
        xs12
        lg3
        row
        align-center
        justify-center
        style="margin-left: 0%"
      >
        <a id="Catalogo" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Catalogo%20Buck%202019.pdf?alt=media&token=d6769b58-3fb3-4e41-8b8b-69a1104f534c">
          <parallax-container>
            <parallax-element :parallax-strength="15" :type="'depth'">
              <!-- <v-layout> -->
              <v-flex row style="margin-left: 0%">
                <v-img
                  class="cat"
                  style="width: 320px; margin-top: 5%; box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
                  src="/Cat.png"
                  max-width="100%"
                  title="Catalogo Buck"
                  alt="Catalogo Buck"
                />
              </v-flex>
              <!-- </v-layout> -->
            </parallax-element>
          </parallax-container>
        </a>
      </v-flex>
      <v-flex xs12 lg4 row justify-center style="margin-top: 4%; margin-left: 0%">
        <p class="fs" style="font-family: 'Times New Roman'; font-size: 1.1vw;">
          &nbsp;&nbsp;A través de nuestro Convenio con la Chacra Experimental Integrada de Barrow ofrecemos, bajo licencia, las variedades de Avena: BONAERENSE INTA MANÁ, BONAERENSE INTA AIKÉN y la nueva variedad
          BONAERENSE INTA YAPA, todas ellas de excelente rendimiento potencial y adaptación a los diferentes requerimientos forrajeros. Desde hace más de 30 años nuestra empresa incursiona en el mejoramiento y comercialización de Híbridos de Girasol.
          <br>
          &nbsp;&nbsp;En este año 2019 estamos presentando el ya conocido BUCK 355CL y el nuevo híbrido BUCK 363CL. Ambos híbridos son obtenciones de nuestro programa de mejoramiento con destacado comportamiento en los diferentes sitios de evaluación del cultivo de girasol.
        </p>
      </v-flex>
    </v-layout>
    <v-flex row justify-center style="margin-top: 4%; margin-left: 0%">
      <h2 style="font-family: 'Times New Roman'; font-size: 2vw;" class="tat">
        <a href="mailto:bucksem@bucksemillas.com.ar" class="ca" style="text-decoration: none;">
          Consulte Beneficios Pre-Campaña!
        </a>
      </h2>
    </v-flex>
    <!-- <v-flex class="container">
      <v-parallax src="/paralaxD.webp" style="margin-left: -2%; margin-right: -2%; margin-top: 2%;" />
    </v-flex> -->
    <!-- <v-flex class="container">
      <img class="responsive" src="/paralaxD.webp">
    </v-flex> -->
    <!-- <img class="responsive" src="/paralaxD.webp"> -->
    <!-- <v-parallax src="/paralaxD.webp" style="margin-left: -6%; margin-right: -6%; margin-top: 2%;" /> -->
    <!-- <v-parallax src="/paralaxD.webp" style="margin-left: -4.8%; margin-right: -4.8%; margin-top: 2%;" /> -->
    <v-parallax
      class="prl"
      lazy-src="/paralaxhomelazy.jpg"
      src="/paralaxhome.jpg"
      title="Parallax ensayos Buck"
      alt="Parallax ensayos Buck"
      style="margin-left: -4.8%; margin-right: -4.8%; margin-top: 2%;"
    />
    <!-- <v-flex row justify-center style="margin-top: 4%;">
      <h2 style="font-family: 'Times New Roman'; font-size: 2vw;">
        Comience a trabajar con nuestros productos, sea parte de Buck Semillas.
      </h2>
    </v-flex> -->
    <v-flex row justify-center style="margin-left: 0%">
      <!-- <picture>
        <source srcset="/logo_footer.webp" type="image/webp">
        <source srcset="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/logo_footer.png?alt=media&token=6f792ac5-454b-48c1-abe6-89f7297c7456" type="image/png">
        <img class="responsivef" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/logo_footer.png?alt=media&token=6f792ac5-454b-48c1-abe6-89f7297c7456">
      </picture> -->
      <img class="responsivef" src="/logo_footer.png" title="Logo Buck footer" alt="Logo Buck footer">
    </v-flex>
  </v-container>
</template>

<script>

export default {
  head () {
    return {
      // title: `Page 1 (${this.name}-side)`,
      title: `Home`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Page 1 description' }
      // ]
    }
  }
}
</script>

<style>

.container { position:relative;}
.container video {
    position:relative;
    z-index:0;
}
.overlay {
    position:absolute;
    top:40%;
    left:0%;
    z-index:1;
    /* margin-top: 20px; */
}
.responsivef {
  width: 100%;
  height: auto;
  max-width: 160px;
  margin-top: 2%;
}
.tat {
  transition: all 0.8s;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name: ef;

}
.tat:hover {
  text-shadow: 1px 1px rgba(180, 0, 0, 1);
  transition: all 0.2s;
  letter-spacing: 2px;
}
.ca {
  color: rgb(180, 2, 2) !important;
}
.ca:hover {
  color: rgb(255, 0, 0) !important;
}

@keyframes ef {
   0%{ transform: scale(1,1); }
   10%{ transform: scale(1.2,1.1); }
   /* 30%{ transform: scale(1.2,1.3); } */
   100%{ transform: scale(1,1); }
}
/* .fsnv {
  font-size: 2vw !important;
} */
@media (max-width: 599px) {
  .fs {
    font-size: 3vw !important;
    /* font-size:14px; */
  }
  .fss {
    font-size: 4vw !important;
    /* font-size:14px; */
  }
  .fsss {
    font-size: 4.5vw !important;
    /* font-size:14px; */
  }
  .fsssi {
    font-size: 3vw !important;
    /* font-size:14px; */
  }
  .fsnv {
    font-size: 5vw !important;
  }
  .fsnvs {
    font-size: 6vw !important;
  }
  .tat {
    font-size: 4vw !important;
    margin-bottom: 5% !important;
    margin-top: 5% !important;
  }
  .tat:hover {
  letter-spacing: 1.5px !important;
  }
  .prl {
    height: 200px !important;
  }
  .imb {
    max-width: 70% !important;
  }
  .mbm {
    margin-bottom: 5% !important;
  }
  .loh {
    margin-top: 80px !important;
  }
  .vnm {
    display: none
  }
  .tvr {
    /* text-shadow: 1px 1px 1px rgba(180, 100, 50, 1), 0 0 0em rgb(1, 1, 255), 0 0 0.9em rgb(131, 131, 131); */
    /* text-shadow: 0 0 0em rgb(1, 1, 255), 0 0 0.9em rgb(131, 131, 131); */
    /* text-shadow: 1px 1px rgba(180, 100, 50, 1); */
    text-decoration: underline;
    text-decoration-color: black;
  }
}
@media (max-width: 1263px) {
  .cat {
    max-width: 70% !important;
    margin-top: 5% !important;
    margin-left: 13% !important;
    margin-bottom: 5% !important;
  }
  .sbv {
    border-left: none !important;
  }
  .sbvg {
    margin-left: -2% !important;
    width: 100% !important;
  }
}
@media (min-width: 1263px) {
  .bdn {
    display: none !important;
  }
  .vnlf:hover {
  text-shadow: 1px 1px rgba(180, 100, 50, 1);
  /* box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12) */
  }
}

</style>
