<template>
  <v-container fluid style="margin-top: 70px;">
    <v-layout flex align-center justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3>Buenos Aires:</h3>
            <v-spacer />
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details />
          </v-card-title>
          <v-data-table
            dense
            style="width: 100%"
            :headers="headers"
            :items="desserts"
            :search="search"
            :rows-per-page="50"
            :items-per-page-options="[50, 200]"
          >
            <template slot="items" slot-scope="props">
              <td style="height: 20px; font-size: 11px">
                {{ props.item.name }}
              </td>
              <td style="height: 20px; font-size: 11px" class="text-xs-right">
                {{ props.item.ingeniero }}
              </td>
              <td style="height: 20px; font-size: 11px" class="text-xs-right">
                {{ props.item.localidad }}
              </td>
              <td style="height: 20px; font-size: 11px" class="text-xs-right">
                {{ props.item.distib }}
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for '{{ search }}' found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      search: '',
      headers: [
        { text: 'SEMILLERO', value: 'name', align: 'left', width: '200' },
        { text: 'LOCALIDAD', value: 'ingeniero', align: 'right', width: '200' },
        { text: 'CONTACO', value: 'localidad', align: 'right', width: '1' },
        { text: 'VARIEDAD', value: 'distib', align: 'right', width: '1' }
      ],
      desserts: [
        {
          'value': 'false',
          'name': 'BERTIN y CIA S.C.A.',
          'ingeniero': '17 DE AGOSTO ',
          'localidad': '02924-494231/494232',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'name': 'ALONSO DAMIAN',
          'ingeniero': 'PREMIO DIA CAMPO',
          'localidad': 'TRES ARROYOS',
          'distib': 'METEORO'
        }
      ]
    }
  }
}
</script>
