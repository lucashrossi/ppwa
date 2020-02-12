<template>
  <v-container fluid>
    <v-flex row justify-center style="margin-top: 70px; margin-left: 0%">
      <h2 class="fss" style="font-family: 'Times New Roman'; font-size: 1.6vw; color: rgba(180, 0, 0, 1);">
        SEMILLEROS FISCALIZADORES
      </h2>
    </v-flex>
    <v-layout flex align-center justify-center style="margin-top: 2%;">
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <v-spacer />
            <v-text-field v-model="search" append-icon="search" label="Busque su variedad" single-line hide-details />
            <v-spacer />
          </v-card-title>
          <v-data-table
            dense
            style="width: 100%"
            :headers="headers"
            :items="desserts"
            :search="search"
            :items-per-page="150"
            :sort-by="['prov', 'ingeniero', 'name']"
            :sort-desc="[false, false, false]"
            multi-sort
            hide-default-footer
          >
            <template slot="items" slot-scope="props">
              <td>
                {{ props.item.name }}
              </td>
              <td>
                {{ props.item.ingeniero }}
              </td>
              <td>
                {{ props.item.prov }}
              </td>
              <td>
                {{ props.item.localidad }}
              </td>
              <td>
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
  head () {
    return {
      // title: `Page 1 (${this.name}-side)`,
      title: `Semilleros`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Page 1 description' }
      // ]
    }
  },
  data: () => {
    return {
      search: '',
      headers: [
        { text: 'PROVINCIA', value: 'prov', align: 'left' },
        { text: 'LOCALIDAD', value: 'ingeniero', align: 'center' },
        { text: 'SEMILLERO', value: 'name', align: 'center' },
        { text: 'CONTACTO', value: 'localidad', align: 'center' },
        { text: 'VARIEDAD', value: 'distib', align: 'center' }
      ],
      desserts: [
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'BERTIN y CIA S.C.A.',
          'ingeniero': '17 DE AGOSTO',
          'localidad': '02924-494231/494232',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAIO BIBILONI Y CIA SRL',
          'ingeniero': '9 DE JULIO',
          'localidad': '02317-426224',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'JORGE CASAL AGRONOMIA S.A.',
          'ingeniero': '9 DE JULIO',
          'localidad': '02317-423108',
          'distib': 'SAETA-SY 120 '
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.ASCENSION LTDA.',
          'ingeniero': 'ASCENSION',
          'localidad': '02353-496026/496792',
          'distib': 'AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROTECNOS S.A.',
          'ingeniero': 'AZUL',
          'localidad': '02281-423267  15584224',
          'distib': 'SY 211-SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'H.J. NAVAS Y CIA S.A',
          'ingeniero': 'AZUL',
          'localidad': '02281-431210',
          'distib': 'BELLACO-METEORO-CAMBA-SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SAN DIEGO SEMILLAS S.A.',
          'ingeniero': 'AZUL',
          'localidad': '02281-426568',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ACOPIO BALCARCE S.A.',
          'ingeniero': 'BALCARCE',
          'localidad': '02266-420141/421673  15675015',
          'distib': 'SY 200-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'P.A.I.S. S.A.',
          'ingeniero': 'BALCARCE',
          'localidad': '02266-423381-431081',
          'distib': 'SY 120-METEORO-SY 330-DESTELLO-AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SCORZIELLO & GALELLA S.C.',
          'ingeniero': 'BALCARCE',
          'localidad': '02266-423904/430854 /15442807',
          'distib': 'SAETA-RESPLANDOR-ESMERALDA-PERLA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAMPOAMOR HNOS S.A.',
          'ingeniero': 'BENITO JUAREZ',
          'localidad': '02292-451342FAX451342/451112',
          'distib': 'CUMELEN-RESPLANDOR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CARRETERO CLAUDIO',
          'ingeniero': 'BOLIVAR',
          'localidad': '02262-944162',
          'distib': 'DESTELLO-RESPLANDOR-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LA BRAGADENSE S.A.',
          'ingeniero': 'BRAGADO',
          'localidad': '02342-430560',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'PEUMAYEN AGROP.SRL',
          'ingeniero': 'C.SUAREZ',
          'localidad': '02926-423647',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MOLINOS RIO DE LA PLATA S.A.',
          'ingeniero': 'CAPITAL FEDERAL',
          'localidad': '01143401100/01143401454/1279',
          'distib': 'ESMERADA-ZAFIRO-PERLA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROPECUARIA MILLAGRO SA',
          'ingeniero': 'CARHUE',
          'localidad': '02923-15563202 02936-430457',
          'distib': 'RESPLANDOR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LOS GROBO AGROPECUARIA SA.',
          'ingeniero': 'CARLOS CASARES',
          'localidad': '02395-459000',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.PATAGONES Y VIEDMA',
          'ingeniero': 'CARMEN DE PATAGONES',
          'localidad': '02920-15321126',
          'distib': 'DESTELLO-BELLACO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SANTARELLI EDUARDO LUIS',
          'ingeniero': 'CASBAS',
          'localidad': '02929-480425 02923-15648431',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAMPIAR SA.',
          'ingeniero': 'CHACABUCO',
          'localidad': '011-1549718928 0236154410971',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAUDA SANTIAGO A.',
          'ingeniero': 'CHACABUCO',
          'localidad': '02352-15495364',
          'distib': 'SY 330-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'FASAN MARCELO ORESTES',
          'ingeniero': 'CHASCOMUS',
          'localidad': '02241-15576697',
          'distib': 'SY 211-SY 200'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ABRA PAMPA SRL.',
          'ingeniero': 'CHIVILCOY',
          'localidad': '02346-430055//02346-308483',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ADURIZ ASOCIADOS SRL',
          'ingeniero': 'CORONEL PRINGLES',
          'localidad': '02922-465350',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'TEODORO TORRE SA',
          'ingeniero': 'DARREGUEIRA',
          'localidad': '02924-420036',
          'distib': 'RESPLANDOR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.ROJO',
          'ingeniero': 'GENERAL ROJO',
          'localidad': '03461-491029',
          'distib': 'SY 120-SY 330   '
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'PRODUCTORES DE GRL LAMADRID SA',
          'ingeniero': 'GENERAL LAMADRID',
          'localidad': '02286-420116/420427',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SIGRA VILLEGAS S.A.',
          'ingeniero': 'GENERAL VILLEGAS',
          'localidad': '03388-421584',
          'distib': 'SY 120-CUMELEN   '
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'BARCELLANDI JAVIER',
          'ingeniero': 'GONZALEZ CHAVEZ',
          'localidad': '02983-484162',
          'distib': 'RESPLANDOR-SAETA-ZAFIRO-DESTELLO-PERLA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LUCEA JORGE',
          'ingeniero': 'GONZALEZ CHAVEZ',
          'localidad': '02983-15570970',
          'distib': 'CAMBA-DESTELLO-CUMELEN-SY 120-AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.GUAMINI LTDA',
          'ingeniero': 'GUAMINI',
          'localidad': '02929-432245',
          'distib': 'DESTELLO-METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.EL PROGRESO LTDA',
          'ingeniero': 'HENDERSON',
          'localidad': '02314-452053',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROTECNICA JUAN N. FERNANDEZ',
          'ingeniero': 'JUAN N FERNANDEZ',
          'localidad': '02264-498150/630',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CEREAGRO S.R.L.',
          'ingeniero': 'JUNIN',
          'localidad': '0236-4422305/4433030/4445652',
          'distib': 'CALEN-MANA-AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.LA VIOLETA LTDA.',
          'ingeniero': 'LA VIOLETA',
          'localidad': '03329-495017/495067/495068',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'FORNER Y CIA SA',
          'ingeniero': 'LOBERIA',
          'localidad': '02261-442115',
          'distib': 'RESPLANDOR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.GRAL.NECOCHEA LTDA.',
          'ingeniero': 'NECOCHEA',
          'localidad': '432895/98FAX 432900',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'DORREGO LOPEZ & NOVES S.A.',
          'ingeniero': 'NECOCHEA',
          'localidad': '432573-432589-450608',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'JUAN LEONCIO IRIBERRI SCA',
          'ingeniero': 'NECOCHEA',
          'localidad': '02262-433491',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.OLAVARRIA LTDA.',
          'ingeniero': 'OLAVARRIA',
          'localidad': '02284-444557/44556 PTA.444455',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGRONEGOCIOS PERGAMINO SRL',
          'ingeniero': 'PERGAMINO',
          'localidad': '02477-440477 / 15569963',
          'distib': 'SY 120-SY 330-SY 211-AIKEN '
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'GESAGRO SA',
          'ingeniero': 'PERGAMINO',
          'localidad': '02477-443800',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LA ALIANZA COOP.AGR.G.LTDA.',
          'ingeniero': 'PIGUE',
          'localidad': '02923-476003/472230 15422223',
          'distib': 'BELLACO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.RAUCH LTDA.',
          'ingeniero': 'RAUCH',
          'localidad': '02297-442699/442251/440030',
          'distib': 'BELLACO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.IND. RAUCH LTDA.',
          'ingeniero': 'RAUCH',
          'localidad': '02297-442511/440060/442147',
          'distib': 'SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SEMILLERA MORENO S.R.L.',
          'ingeniero': 'RIVADAVIA',
          'localidad': '02337-452874',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'GEAR S.A.',
          'ingeniero': 'ROJAS',
          'localidad': '02475-465513  462422',
          'distib': 'SY 120-SY 211-SAETA-CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'GANADERA SALLIQUELO S.A.',
          'ingeniero': 'SALLIQUELO',
          'localidad': '02394-480137/481048',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'FERIAS G.DE SAN MANUEL',
          'ingeniero': 'SAN MANUEL',
          'localidad': '02261-498012',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.SAN MIGUEL',
          'ingeniero': 'SAN MIGUEL ARCANGEL',
          'localidad': '02924-497015',
          'distib': 'DESTELLO-RESPLANDOR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'RAMON ROSA Y CIA. S.A.',
          'ingeniero': 'SAN PEDRO',
          'localidad': '03329-425304/426169',
          'distib': 'SY 120-SAETA-METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROPACK INSUMOS SRL.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-154464975  4434514/5',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.TANDIL Y VELA LTDA.',
          'ingeniero': 'TANDIL',
          'localidad': '02494423137/4424297 FAX425891',
          'distib': 'SY 120-SY 330-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.TANDIL LTDA.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-4453160/61/62',
          'distib': 'SY 211-RESPLANDOR-CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'DOS CACIQUES SRL.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-4422058/4425279',
          'distib': 'SY 120 SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MAS AGRONOMIA',
          'ingeniero': 'TANDIL',
          'localidad': '0249-154552003/4436982',
          'distib': 'CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'P.A.M.REDOLATTI E HIJOS S.A.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-4425341/4421092',
          'distib': 'BELLACO-SY120-SY 211-SY330-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ACOPIO Y SERVICIOS VITTORI SA',
          'ingeniero': 'TORQUINST',
          'localidad': '',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGRARIA TS.AS.',
          'ingeniero': 'TRES ARROYOS',
          'localidad': '02983-431340',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LOS TRIANGULOS DE CASCALLARES',
          'ingeniero': 'TRES ARROYOS',
          'localidad': '02266-15631385  02983427252',
          'distib': 'CUMELEN -ESMERALDA-ZAFIRO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MORERO SEMILLAS Y CEREALES',
          'ingeniero': 'TRES LOMAS',
          'localidad': '02394-430292',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ANDREOLI SA.',
          'ingeniero': 'VILLA MOQUEHUA',
          'localidad': '02346-491500  15600427',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AGRO SUR ARIAS SA',
          'ingeniero': 'ARIAS',
          'localidad': '03468/449839',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'PAREDES CEREALES S.A.',
          'ingeniero': 'BALLESTEROS',
          'localidad': '0353-4930209/4930157',
          'distib': 'SY 120-CUMELEN-CAMBA-SAETA-RESPLANDOR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'CEREALES DEC SA',
          'ingeniero': 'CORRAL DE BUSTOS',
          'localidad': '0358-4671680',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COOP.AG.G.C.ALTA',
          'ingeniero': 'CRUZ ALTA',
          'localidad': '03467-401250',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AMBITO DAS SA',
          'ingeniero': 'ETRURIA',
          'localidad': '03385-480555',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'GASTALDI HNOS S.A.',
          'ingeniero': 'GENERAL DEHEZA',
          'localidad': '03584057100/105',
          'distib': 'METEORO-SY 200'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'CAPELONI SEMILLAS S.A.',
          'ingeniero': 'GUATIMOZIN',
          'localidad': '03468-495150  03468-15641884',
          'distib': 'SAETA-RESPLANDOR-DESTELLO-CUMELEN-SY 211-SY 330-SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'ORTEGA HERMANOS S.A.',
          'ingeniero': 'IDIAZABAL',
          'localidad': '03534-496004/496082',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'DESARROLLOS AGROINDUSTRIALES DEL SUR SA',
          'ingeniero': 'JESUS MARIA',
          'localidad': '03525-608609',
          'distib': 'SY 120-CAMBA-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COOP.AG.G.J.POSSE LTDA.',
          'ingeniero': 'JUSTINIANO POSSE',
          'localidad': '03537-431126/431459/431654',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'CAVERZASI ORTIN y CIA S.R.L.',
          'ingeniero': 'LAS VARILLAS',
          'localidad': '03533-420966/420605',
          'distib': 'MANA   '
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'GALEAZZI SA',
          'ingeniero': 'LUQUE',
          'localidad': '03573- 480339/15692908',
          'distib': 'SY 211'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'A.F.A. MARCOS JUAREZ',
          'ingeniero': 'MARCOS JUAREZ',
          'localidad': '03472-426786/424063',
          'distib': 'SY 211-CUMELEN'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'MOREL VULLIEZ SA',
          'ingeniero': 'MONTE MAIZ',
          'localidad': '03468-471222',
          'distib': 'SY 120-SY 330'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COOP.AG.G.DE MORTEROS LTDA.',
          'ingeniero': 'MORTEROS',
          'localidad': '03562-422127/422628 FX 422127',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'MANCOSEM',
          'ingeniero': 'ONCATIVO',
          'localidad': '03572-403046',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'SEMAGRO SRL',
          'ingeniero': 'PORTEÑA',
          'localidad': '03562-15453876',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AIASSA NATALIA',
          'ingeniero': 'RIO CUARTO',
          'localidad': '0358-4622508',
          'distib': 'CALEN'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AGROEMPRESA SEMILLAS S.A.',
          'ingeniero': 'SINSACATE',
          'localidad': '03525-429400/6',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'OSCAR PEMAN Y ASOCIADOS S.A.',
          'ingeniero': 'SINSACATE',
          'localidad': '03525-402410',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'ZANOY AGRO Y SERVICIOS  S.A.',
          'ingeniero': 'TRANSITO',
          'localidad': '03576-15520025  492723',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'BIOTEC SA',
          'ingeniero': 'VILLA MARIA',
          'localidad': '0353-156564062',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'BOIERO SEMILLAS SA',
          'ingeniero': 'VILLA MARIA',
          'localidad': '0353-4911679',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'HECTOR A BERTONE S.A.',
          'ingeniero': 'VILLA MARIA',
          'localidad': '0353-4534094',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AGRO SEMILLERA VILLA NUEVA SRL',
          'ingeniero': 'VILLA NUEVA',
          'localidad': '0353-4910817',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'HECTOR A BOLZAN Y CIA SRA',
          'ingeniero': 'ALDEA MARIA LUISA',
          'localidad': '0343-4996025',
          'distib': 'CAMBA-SAETA   '
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'LA AGRICOLA REGIONAL COOP. LTD',
          'ingeniero': 'CRESPO',
          'localidad': '0343-4958000',
          'distib': 'SAETA-CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'SERVICIO AGROPECUARIO de PAUL',
          'ingeniero': 'CRESPO',
          'localidad': '0343-4951698 156200121',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'COOP.AG.MIXTA LA PROTECTORA LT',
          'ingeniero': 'GENERAL GALARZA',
          'localidad': '03444-481160',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'COOP.LA GANADERA G.RAMIREZ LTD',
          'ingeniero': 'GENERAL RAMIREZ',
          'localidad': '0343-4901084',
          'distib': 'CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'EDUARDO STERTZ E HIJOS SRL.',
          'ingeniero': 'VIALE',
          'localidad': '0343-4920056/979',
          'distib': 'SY 330-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'CEREALES BOLZAN S.R.L.',
          'ingeniero': 'VILLA FONTANA',
          'localidad': '0343-4864000/4864027',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'BRANDEMANN Y CIA',
          'ingeniero': 'EDUARDO CASTEX',
          'localidad': '02334-453512',
          'distib': 'BELLACO-SAETA-METEORO'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'COOP.AGROP.E.MARTINI LTDA',
          'ingeniero': 'EMBAJADOR MARTINI',
          'localidad': '02335-495092',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'CASA ALARCIA SA',
          'ingeniero': 'MACACHIN',
          'localidad': '02953-452298/452351',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'CEREALES QUEMU S.A.',
          'ingeniero': 'QUEMU QUEMU',
          'localidad': '02333-440121-440061-440072',
          'distib': 'MANA'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'COPPO FERNANDO FABIO',
          'ingeniero': 'SANTA ROSA',
          'localidad': '02954-15692302',
          'distib': 'DESTELLO'
        },
        {
          'value': 'false',
          'prov': 'Salta',
          'name': 'ESTANCIA LOS MIRKOS SA',
          'ingeniero': 'SALTA',
          'localidad': '0387-4228999/9933',
          'distib': 'SAETA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'ACOPIO AREQUITO S.A.',
          'ingeniero': 'AREQUITO',
          'localidad': '03464-471111/471475',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. BIGAND SOC.COOP.LTDA.',
          'ingeniero': 'BIGAND',
          'localidad': '03464-461284/461900',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'PERASSI HORACIO GUILLERMO',
          'ingeniero': 'CAÑADA DE GOMEZ',
          'localidad': '03471-425218  15525444',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'CEREALES DON VICTORIO SRL',
          'ingeniero': 'CARLOS PELLEGRINI',
          'localidad': '03401-485113',
          'distib': 'SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'LA CONSTANCIA AGRO SA.',
          'ingeniero': 'CARLOS PELLEGRINI',
          'localidad': '03401-48118015645905',
          'distib': 'CAMBA-SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. CASILDA SOC.COOP.LTDA.',
          'ingeniero': 'CASILDA',
          'localidad': '03464-423242/422424',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'MOLINO MATILDE S.A.',
          'ingeniero': 'COLONIA MATILDE',
          'localidad': '0342-4993022/4993070 FAX3073',
          'distib': 'CAMBA-SAETA-CLARAZ-RESPLANDOR-YAPA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.EL TREBOL LTDA',
          'ingeniero': 'EL TREBOL',
          'localidad': '03401-422161',
          'distib': 'SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'MANANTIALES AGROPECUARIA SA',
          'ingeniero': 'FRANCK - LAS COLONIAS',
          'localidad': '0342-4930382/125',
          'distib': 'AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'FIORDAMI RENZI CEREALES SA.',
          'ingeniero': 'GODEKEN',
          'localidad': '03465-498120',
          'distib': 'SY 120-SAETA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.GODOY LTDA.',
          'ingeniero': 'GODOY',
          'localidad': '03460-497001/015',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'CENTRO AGROP.MODELO',
          'ingeniero': 'HUGHES',
          'localidad': '02473-491094',
          'distib': 'SY 120 '
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. HUMBOLDT SOC.COOP.LTDA.',
          'ingeniero': 'HUMBOLDT',
          'localidad': '03496-480128/480555',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'AGROSERVICIOS HUMBOLDT S.A.',
          'ingeniero': 'HUMBOLDT',
          'localidad': '03496-480380',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'PERASSI ADOLFO ALFREDO',
          'ingeniero': 'LAS PAREJAS',
          'localidad': '03471-15674329',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AGROP.DE LOPEZ LTDA',
          'ingeniero': 'LOPEZ',
          'localidad': '03404-498170 ',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'MELICA HNOS',
          'ingeniero': 'LOPEZ',
          'localidad': '03404-498151',
          'distib': 'CAMBA   '
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.LOS MOLINOS',
          'ingeniero': 'LOS MOLINOS',
          'localidad': '03464-495116',
          'distib': 'SY 120-SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. MACIEL SOC.COOP.LTDA.',
          'ingeniero': 'MACIEL',
          'localidad': '03476-470308',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.G.LEHMANN LTDA.',
          'ingeniero': 'PILAR',
          'localidad': '03404-470051/70027',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'LA CLEMENTINA SA',
          'ingeniero': 'SAN JORGE',
          'localidad': '03406-15462261',
          'distib': 'SY 211'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.G.CRESPO',
          'ingeniero': 'SAN JUSTO',
          'localidad': '03498-480256',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. SAN MARTIN ESCOBAS',
          'ingeniero': 'SAN MARTIN DE LAS ESCOBAS',
          'localidad': '03406-498343',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'RIBOLDI SA',
          'ingeniero': 'SAN JUSTO',
          'localidad': '03498 427472 / 15448640',
          'distib': 'MANA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. SAN MARTIN DE LAS ESCOB',
          'ingeniero': 'SAN MARTIN DE LAS ESCOBAS',
          'localidad': '03406-498343/498243',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'AGRONOMIA LA ESQUINA',
          'ingeniero': 'SANTO TOME',
          'localidad': '0342-4744195',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. TOTORAS',
          'ingeniero': 'TOTORAS',
          'localidad': '03476-460189/460402',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.FED.DE VILLA CAÑAS LTDA',
          'ingeniero': 'VILLA CAÑAS',
          'localidad': '03468-451313',
          'distib': 'SY 120 '
        },
        {
          'value': 'false',
          'prov': 'Tucumán',
          'name': 'COMPLEJO ALIMENTICIO S.SALVADOR SA',
          'ingeniero': 'COLOMBRES',
          'localidad': '0381-154164033  4842800',
          'distib': 'ZAFIRO-PERLA'
        }
      ]
    }
  }
}
</script>

<style>

.v-data-table td {
    font-size: .8vw;
    height: 15px;
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
}
</style>
