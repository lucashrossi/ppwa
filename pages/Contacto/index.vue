<template>
  <v-container style="margin-top: 60px;">
    <v-flex style="margin-top: 60px; margin-left: 0%" row justify-center>
      <v-flex xs10 md10 lg5 style="margin-left: 0%">
        <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
          Déjenos su consulta:
        </h2>
        <form style="margin-top: 10px; margin-bottom: 15%; margin-left: 0%" @submit.prevent="submit">
          <!-- <form style="margin-top: 100px;" action="https://formsubmit.co/8ee91f7738dc6d72642d558756927ba3" method="POST"> -->
          <v-text-field
            v-model="name"
            style="margin-top: 30px;"
            :error-messages="nameErrors"
            :counter="100"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />
          <v-text-field
            v-model="email"
            style="margin-top: 30px;"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          <v-textarea
            v-model="message"
            style="margin-top: 30px;"
            :error-messages="messageErrors"
            :counter="500"
            label="Message"
            required
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          />
          <!-- <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
            /> -->
          <!-- <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
            /> -->

          <!-- <v-btn class="mr-4" :disabled="!fv" @click="submit"> -->
          <v-layout justify-center>
            <v-btn style="margin-top: 50px;" class="mr-4" :disabled="!fv" type="submit">
              submit
            </v-btn>
            <v-btn style="margin-top: 50px;" @click="clear">
              clear
            </v-btn>
          </v-layout>
        </form>
      </v-flex>
      <v-spacer class="hidden-md-and-down" />
      <v-flex xs10 md10 lg5>
        <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
          Aquí estamos:
        </h2>
        <iframe
          width="100%"
          height="80%"
          frameborder="0"
          style="border:0; margin-top: 10px; margin-bottom: 5%;"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJr9gpWwPGj5URuV-7tQ3SgCs&key=AIzaSyBbjsWI9LfK6RwDey-Y-LSzCz0yGpla2K4"
          allowfullscreen
        />
      </v-flex>
    </v-flex>
    <v-flex row justify-center style="margin-left: 0%">
      <v-flex
        xs12
        md12
        lg4
        justify-center
        style="margin-left: 0%"
      >
        <v-list dense>
          <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
            ADMINISTRACIÓN
          </h2>
          <h2 style="font-family: 'Times New Roman'; font-size: 0.8vw; text-align: center;">
            Sr. Marcelo Bodega Tel: 02262-434061/2
          </h2>
          <div style="font-family: 'Times New Roman'; font-size: 1vw; min-height: 20px; text-align: center;">
            <a target="_blank" href="mailto:marcelo@bucksemillas.com.ar" style="font-family: 'Times New Roman'; font-size: 0.9vw; color: #7b0000;">marcelo@bucksemillas.com.ar</a>
          </div>
          <br>
          <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
            PROV. DE SANTA FE
          </h2>
          <h2 style="font-family: 'Times New Roman'; font-size: 0.8vw; text-align: center;">
            Sr. Juan José Loreto Tel: 02477-15567888
          </h2>
          <div style="font-family: 'Times New Roman'; font-size: 1vw; min-height: 20px; text-align: center;">
            <a target="_blank" href="mailto:jjloreto@bucksemillas.com.ar" style="font-family: 'Times New Roman'; font-size: 0.9vw; color: #7b0000;">jjloreto@bucksemillas.com.ar</a>
          </div>
        </v-list>
      </v-flex>
      <v-flex
        xs12
        md12
        lg4
        justify-center
        style="margin-left: 0%"
      >
        <v-list dense>
          <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
            SUR BS. AS. Y LA PAMPA
          </h2>
          <h2 style="font-family: 'Times New Roman'; font-size: 0.8vw; text-align: center;">
            Sr. Alejandro Dominé Tel: 0291-156426200
          </h2>
          <div style="font-family: 'Times New Roman'; font-size: 1vw; min-height: 20px; text-align: center;">
            <a target="_blank" href="mailto:adomine@bucksemillas.com.ar" style="font-family: 'Times New Roman'; font-size: 0.9vw; color: #7b0000;">adomine@bucksemillas.com.ar</a>
          </div>
          <br>
          <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
            PROV. DE ENTRE RIOS
          </h2>
          <h2 style="font-family: 'Times New Roman'; font-size: 0.8vw; text-align: center;">
            Ing. Miguel Paul Tel: 0343-156200121
          </h2>
          <div style="font-family: 'Times New Roman'; font-size: 1vw; min-height: 20px; text-align: center;">
            <a target="_blank" href="mailto:paulmiguel@ametbiz.com.ar" style="font-family: 'Times New Roman'; font-size: 0.9vw; color: #7b0000;">paulmiguel@ametbiz.com.ar</a>
          </div>
        </v-list>
      </v-flex>
      <v-flex
        xs12
        md12
        lg4
        justify-center
        style="margin-left: 0%"
      >
        <v-list dense>
          <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
            CENTRO Y NORTE BS. AS.
          </h2>
          <h2 style="font-family: 'Times New Roman'; font-size: 0.8vw; text-align: center;">
            Sr. Mauro Irazoqui Tel: 02474-15662170
          </h2>
          <div style="font-family: 'Times New Roman'; font-size: 1vw; min-height: 20px; text-align: center;">
            <a target="_blank" href="mailto:mauroirazoqui@yahoo.com.ar" style="font-family: 'Times New Roman'; font-size: 0.9vw; color: #7b0000;">mauroirazoqui@yahoo.com.ar</a>
          </div>
          <br>
          <h2 style="font-family: 'Times New Roman'; font-size: 1.1vw; color: rgba(180, 0, 0, 1); text-align: center;">
            PROV. DE CORDOBA
          </h2>
          <h2 style="font-family: 'Times New Roman'; font-size: 0.8vw; text-align: center;">
            Sr. Domingo Capeloni Tel: 03468-15588721
          </h2>
          <div style="font-family: 'Times New Roman'; font-size: 1vw; min-height: 20px; text-align: center;">
            <a target="_blank" href="mailto:domingo@capelonisemillas.com" style="font-family: 'Times New Roman'; font-size: 0.9vw; color: #7b0000;">domingo@capelonisemillas.com</a>
          </div>
        </v-list>
      </v-flex>
    </v-flex>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import { axios } from 'axios'

export default {
  head () {
    return {
      // title: `Page 1 (${this.name}-side)`,
      title: `Productos`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Page 1 description' }
      // ]
    }
  },

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(100) },
    email: { required, email },
    message: { required, maxLength: maxLength(500) }
    // select: { required },
    // checkbox: {
    //   checked (val) {
    //     return val
    //   }
  },
  data: () => ({
    name: '',
    email: '',
    message: ''
    // select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4'
    // ],
    // checkbox: false
  }),

  computed: {
    // checkboxErrors () {
    //   const errors = []
    //   if (!this.$v.checkbox.$dirty) { return errors }
    //   !this.$v.checkbox.checked && errors.push('You must agree to continue!')
    //   return errors
    // },
    // selectErrors () {
    //   const errors = []
    //   if (!this.$v.select.$dirty) { return errors }
    //   !this.$v.select.required && errors.push('Item is required')
    //   return errors
    // },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) { return errors }
      !this.$v.message.maxLength && errors.push('message must be at most 100 characters long')
      !this.$v.message.required && errors.push('message is required.')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) { return errors }
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) { return errors }
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    fv () {
      let fvval = false
      if (this.$v.email.email && this.$v.email.required && this.$v.name.maxLength && this.$v.name.required && this.$v.message.maxLength && this.$v.message.required) { fvval = true }
      return fvval
    }
  },

  methods: {
    submit () {
    //   this.$v.$touch()
      console.log(this.name, this.email, this.message)
      axios.post('hgonzalez@bucksemillas.com.ar', this.name, this.email, this.message)
        .then(result => console.log(result))
        .catch(e => console.log(e))
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
    //   this.select = null
    //   this.checkbox = false
    }
  }
}
</script>
