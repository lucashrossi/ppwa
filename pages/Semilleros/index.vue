<template>
  <v-container fluid style="margin-top: 70px;">
    <v-layout flex align-center justify-center>
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
            :sort-by="['PROVINCIA', 'LOCALIDAD', 'SEMILLERO', 'VARIEDAD', 'CONTACTO']"
            :sort-desc="[false, true, true, true, true]"
            multi-sort
          >
            <template slot="items" slot-scope="props">
              <td>
                {{ props.item.name }}
              </td>
              <td>
                {{ props.item.prov }}
              </td>
              <td>
                {{ props.item.ingeniero }}
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
  data: () => {
    return {
      search: '',
      headers: [
        { text: 'PROVINCIA', value: 'prov', align: 'left' },
        { text: 'SEMILLERO', value: 'name', align: 'center' },
        { text: 'LOCALIDAD', value: 'ingeniero', align: 'center' },
        { text: 'CONTACO', value: 'localidad', align: 'center' },
        { text: 'VARIEDAD', value: 'distib', align: 'center' }
      ],
      desserts: [
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'BERTIN y CIA S.C.A.',
          'ingeniero': '17 DE AGOSTO',
          'localidad': '02924-494231/494232',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAIO BIBILONI Y CIA SRL',
          'ingeniero': '9 DE JULIO',
          'localidad': '02317-426224',
          'distib': 'CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'JORGE CASAL AGRONOMIA S.A.',
          'ingeniero': '9 DE JULIO',
          'localidad': '02317-423108',
          'distib': 'SY 120 -SY 330 - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CONEXA SA',
          'ingeniero': 'ARRECIFES',
          'localidad': '02478-451500',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.ASCENSION LTDA.',
          'ingeniero': 'ASCENSION',
          'localidad': '02353-496026/496792',
          'distib': 'AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROTECNOS S.A.',
          'ingeniero': 'AZUL',
          'localidad': '02281-423267  15584224',
          'distib': 'SY 120 - SY 211 -SY330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'H.J. NAVAS Y CIA S.A',
          'ingeniero': 'AZUL',
          'localidad': '02281-431210',
          'distib': 'BELLACO -METEORO - MANA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SAN DIEGO SEMILLAS S.A.',
          'ingeniero': 'AZUL',
          'localidad': '02281-426568',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SEMILLERA JAUREGUI S.R.L.',
          'ingeniero': 'AZUL',
          'localidad': '02281-424440/432202',
          'distib': 'CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'VERDEOS E INSUMOS AGROP.SRL',
          'ingeniero': 'BAHIA BLANCA',
          'localidad': '0291-4885620',
          'distib': 'DESTELLO - METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ACOPIO BALCARCE S.A.',
          'ingeniero': 'BALCARCE',
          'localidad': '02266-420141/421673  15675015',
          'distib': 'SY 200 -SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'P.A.I.S. S.A.',
          'ingeniero': 'BALCARCE',
          'localidad': '02266-423381-431081',
          'distib': 'SY 120 - METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SCORZIELLO & GALELLA S.C.',
          'ingeniero': 'BALCARCE',
          'localidad': '02266-423904/430854 /15442807',
          'distib': 'METEORO - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAMPOAMOR HNOS S.A.',
          'ingeniero': 'BENITO JUAREZ',
          'localidad': '02292-451342FAX451342/451112',
          'distib': 'BELLACO -SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LA BRAGADENSE S.A.',
          'ingeniero': 'BRAGADO',
          'localidad': '02342-430560',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'RAUL H.PEREZ',
          'ingeniero': 'C.DORREGO',
          'localidad': '02921-454001',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'PEUMAYEN AGROP.SRL',
          'ingeniero': 'C.SUAREZ',
          'localidad': '02926-423647',
          'distib': 'DESTELLO - METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MOLINOS RIO DE LA PLATA S.A.',
          'ingeniero': 'CAPITAL FEDERAL',
          'localidad': '01143401100/01143401454/1279',
          'distib': 'ESMERADA - ZAFIRO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROPECUARIA MILLAGRO SA',
          'ingeniero': 'CARHUE',
          'localidad': '02923-15563202 02936-430457',
          'distib': 'DESTELLO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROTECNICA CARHUE',
          'ingeniero': 'CARHUE',
          'localidad': '02936-430676',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'TOMAS HNOS & CIA S.A.',
          'ingeniero': 'CARLOS CASARES',
          'localidad': '02395-451011  FAX 50873',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LOS GROBO AGROPECUARIA SA.',
          'ingeniero': 'CARLOS CASARES',
          'localidad': '02395-459000',
          'distib': 'SY 211 - METEORO - SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.PATAGONES Y VIEDMA',
          'ingeniero': 'CARMEN DE PATAGONES',
          'localidad': '02920-15321126',
          'distib': 'BELLACO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SANTARELLI EDUARDO LUIS',
          'ingeniero': 'CASBAS',
          'localidad': '02929-480425 02923-15648431',
          'distib': 'DESTELLO - SAETA - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAMPIAR SA.',
          'ingeniero': 'CHACABUCO',
          'localidad': '011-1549718928 0236154410971',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CAUDA SANTIAGO A.',
          'ingeniero': 'CHACABUCO',
          'localidad': '02352-15495364',
          'distib': 'SY 330 - CLARAZ - MANA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'FASAN MARCELO ORESTES',
          'ingeniero': 'CHASCOMUS',
          'localidad': '02241-15576697',
          'distib': 'SY 120- SY 200 -SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ABRA PAMPA SRL.',
          'ingeniero': 'CHIVILCOY',
          'localidad': '02346-430055//02346-308483',
          'distib': 'AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ADURIZ ASOCIADOS SRL',
          'ingeniero': 'CORONEL PRINGLES',
          'localidad': '02922-465350',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'BERTOLAMI CEREALES S.A.',
          'ingeniero': 'CORONEL SUAREZ',
          'localidad': '02926-422297/422032  FAX424198',
          'distib': 'SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'PRODUCTORES DE GRL LAMADRID SA',
          'ingeniero': 'GENERAL LAMADRID',
          'localidad': '02286-420116/420427',
          'distib': 'BELLACO - METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SIGRA VILLEGAS S.A.',
          'ingeniero': 'GENERAL VILLEGAS',
          'localidad': '03388-421584',
          'distib': 'SY 120 - SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'BARCELLANDI JAVIER',
          'ingeniero': 'GONZALEZ CHAVEZ',
          'localidad': '02983-484162',
          'distib': 'DESTELLO - METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MARCOS RUBEN',
          'ingeniero': 'GONZALEZ MORENO',
          'localidad': '02302-496066',
          'distib': '55 CL 2'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.GUAMINI LTDA',
          'ingeniero': 'GUAMINI',
          'localidad': '02929-432245',
          'distib': 'DESTELLO - SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.EL PROGRESO LTDA',
          'ingeniero': 'HENDERSON',
          'localidad': '02314-452053',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGRONOMIA ALVAREZ',
          'ingeniero': 'HUANGUELEN',
          'localidad': '02933-432800',
          'distib': 'SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROTECNICA JUAN N. FERNANDEZ',
          'ingeniero': 'JUAN N FERNANDEZ',
          'localidad': '02264-498150/630',
          'distib': 'DESTELLO - SY 211 - SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'CEREAGRO S.R.L.',
          'ingeniero': 'JUNIN',
          'localidad': '0236-4422305/4433030/4445652',
          'distib': 'CALEN - MANA - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.LA VIOLETA LTDA.',
          'ingeniero': 'LA VIOLETA',
          'localidad': '03329-495017/495067/495068',
          'distib': 'SY 120 - CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'FORNER Y CIA SA',
          'ingeniero': 'LOBERIA',
          'localidad': '02261-442115',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.GRAL.NECOCHEA LTDA.',
          'ingeniero': 'NECOCHEA',
          'localidad': '432895/98FAX 432900',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'DORREGO LOPEZ & NOVES S.A.',
          'ingeniero': 'NECOCHEA',
          'localidad': '432573-432589-450608',
          'distib': 'SY 211 - SY 330 - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'JUAN LEONCIO IRIBERRI SCA',
          'ingeniero': 'NECOCHEA',
          'localidad': '02262-433491',
          'distib': 'AIKEN - MANA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.OLAVARRIA LTDA.',
          'ingeniero': 'OLAVARRIA',
          'localidad': '02284-444557/44556 PTA.444455',
          'distib': 'METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'DIETRICH HNOS S.C.A.',
          'ingeniero': 'OLAVARRIA',
          'localidad': '02284-426502  FAX 424269',
          'distib': 'CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGRONEGOCIOS PERGAMINO SRL',
          'ingeniero': 'PERGAMINO',
          'localidad': '02477-440477 / 15569963',
          'distib': 'SY 120 - SY 330 - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'PGG WRISTSON SEEDS',
          'ingeniero': 'PERGAMINO',
          'localidad': 'S/N',
          'distib': 'CALEN - MANA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LA ALIANZA COOP.AGR.G.LTDA.',
          'ingeniero': 'PIGUE',
          'localidad': '02923-476003/472230 15422223',
          'distib': 'BELLACO - METEORO'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.RAUCH LTDA.',
          'ingeniero': 'RAUCH',
          'localidad': '02297-442699/442251/440030',
          'distib': 'BELLACO - MANA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.IND. RAUCH LTDA.',
          'ingeniero': 'RAUCH',
          'localidad': '02297-442511/440060/442147',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SEMILLERA MORENO S.R.L.',
          'ingeniero': 'RIVADAVIA',
          'localidad': '02337-452874',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'GEAR S.A.',
          'ingeniero': 'ROJAS',
          'localidad': '02475-465513  462422',
          'distib': 'SY 120 - SY 211 -SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'GANADERA SALLIQUELO S.A.',
          'ingeniero': 'SALLIQUELO',
          'localidad': '02394-480137/481048',
          'distib': 'SY 120 - CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'FERIAS G.DE SAN MANUEL',
          'ingeniero': 'SAN MANUEL',
          'localidad': '02261-498012',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.SAN MIGUEL',
          'ingeniero': 'SAN MIGUEL ARCANGEL',
          'localidad': '02924-497015',
          'distib': 'DESTELLO - SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'RAMON ROSA Y CIA. S.A.',
          'ingeniero': 'SAN PEDRO',
          'localidad': '03329-425304/426169',
          'distib': 'SY 120 - SY 300'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'AGROPACK INSUMOS SRL.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-154464975  4434514/5',
          'distib': 'SY 120 -SY 330'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AG.G.TANDIL Y VELA LTDA.',
          'ingeniero': 'TANDIL',
          'localidad': '02494423137/4424297 FAX425891',
          'distib': 'SY 120 - METEORO - SAETA - CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGROP.TANDIL LTDA.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-4453160/61/62',
          'distib': 'BELLACO - SY 120 -SY 211 - CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'DOS CACIQUES SRL.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-4422058/4425279',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MAS AGRONOMIA',
          'ingeniero': 'TANDIL',
          'localidad': '0249-154552003/4436982',
          'distib': 'SY 330 - CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'P.A.M.REDOLATTI E HIJOS S.A.',
          'ingeniero': 'TANDIL',
          'localidad': '0249-4425341/4421092',
          'distib': 'BELL - SY120 -SY 211 -SY330 - SAETA'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'COOP.AGRARIA TS.AS.',
          'ingeniero': 'TRES ARROYOS',
          'localidad': '02983-431340',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'LOS TRIANGULOS DE CASCALLARES',
          'ingeniero': 'TRES ARROYOS',
          'localidad': '02266-15631385  02983427252',
          'distib': 'SY 211'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'SEMILLAS Y CEREALES TS.AS.SRL.',
          'ingeniero': 'TRES ARROYOS',
          'localidad': '02983-432510/432530',
          'distib': 'CALEN'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'MORERO SEMILLAS Y CEREALES',
          'ingeniero': 'TRES LOMAS',
          'localidad': '02394-430292',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Buenos Aires',
          'name': 'ANDREOLI SA.',
          'ingeniero': 'VILLA MOQUEHUA',
          'localidad': '02346-491500  15600427',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COMPAÑIA ARGENTINA DE GRANOS S',
          'ingeniero': 'ADELIA MARIA',
          'localidad': '03585-420272',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AGRO SUR ARIAS SA',
          'ingeniero': 'ARIAS',
          'localidad': '03468/449839',
          'distib': 'sy 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'PAREDES CEREALES S.A.',
          'ingeniero': 'BALLESTEROS',
          'localidad': '0353-4930209/4930157',
          'distib': 'DESTELLO - SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'CEREALES DEC SA',
          'ingeniero': 'CORRAL DE BUSTOS',
          'localidad': '0358-4671680',
          'distib': 'sy 211 -sy330'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COOP.AG.G.C.ALTA',
          'ingeniero': 'CRUZ ALTA',
          'localidad': '03467-401250',
          'distib': 'DESTELLO - SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'GASTALDI HNOS S.A.',
          'ingeniero': 'GENERAL DEHEZA',
          'localidad': '03584057100/105',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'CAPELONI SEMILLAS S.A.',
          'ingeniero': 'GUATIMOZIN',
          'localidad': '03468-495150  03468-15641884',
          'distib': 'DESTELLO - SY120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'ORTEGA HERMANOS S.A.',
          'ingeniero': 'IDIAZABAL',
          'localidad': '03534-496004/496082',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COOP.AG.G.J.POSSE LTDA.',
          'ingeniero': 'JUSTINIANO POSSE',
          'localidad': '03537-431126/431459/431654',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'CAVERZASI ORTIN y CIA S.R.L.',
          'ingeniero': 'LAS VARILLAS',
          'localidad': '03533-420966/420605',
          'distib': 'CALEN - MANA'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'A.F.A. MARCOS JUAREZ',
          'ingeniero': 'MARCOS JUAREZ',
          'localidad': '03472-426786/424063',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'COOP.AG.G.DE MORTEROS LTDA.',
          'ingeniero': 'MORTEROS',
          'localidad': '03562-422127/422628 FX 422127',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'AGROEMPRESA SEMILLAS S.A.',
          'ingeniero': 'SINSACATE',
          'localidad': '03525-429400/6',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'OSCAR PEMAN Y ASOCIADOS S.A.',
          'ingeniero': 'SINSACATE',
          'localidad': '03525-402410',
          'distib': 'CALEN - MANA'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'ZANOY AGRO Y SERVICIOS  S.A.',
          'ingeniero': 'TRANSITO',
          'localidad': '03576-15520025  492723',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'BOIERO SEMILLAS SA',
          'ingeniero': 'VILLA MARIA',
          'localidad': '0353-4911679',
          'distib': 'MANA -AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Córdoba',
          'name': 'HECTOR A BERTONE S.A.',
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
          'distib': 'CALEN'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'LA AGRICOLA REGIONAL COOP. LTD',
          'ingeniero': 'CRESPO',
          'localidad': '0343-4958000',
          'distib': 'SY 330 - SAETA - CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'SERVICIO AGROPECUARIO de PAUL',
          'ingeniero': 'CRESPO',
          'localidad': '0343-4951698 156200121',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'COOP.AG.MIXTA LA PROTECTORA LT',
          'ingeniero': 'GENERAL GALARZA',
          'localidad': '03444-481160',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'COOP.LA GANADERA G.RAMIREZ LTD',
          'ingeniero': 'GENERAL RAMIREZ',
          'localidad': '0343-4901084',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'EDUARDO STERTZ E HIJOS SRL.',
          'ingeniero': 'VIALE',
          'localidad': '0343-4920056/979',
          'distib': 'SY 330 -SAETA'
        },
        {
          'value': 'false',
          'prov': 'Entre Ríos',
          'name': 'CEREALES BOLZAN S.R.L.',
          'ingeniero': 'VILLA FONTANA',
          'localidad': '0343-4864000/4864027',
          'distib': 'SAETA - MANA'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'LANZ PAULO',
          'ingeniero': 'C.BARON',
          'localidad': 'S/N',
          'distib': '55 CL 2'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'COOP.AGROP.E.MARTINI LTDA',
          'ingeniero': 'EMBAJADOR MARTINI',
          'localidad': '02335-495092',
          'distib': 'AIKEN'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'BRANDEMANN Y CIA',
          'ingeniero': 'EDUARDO CASTEX',
          'localidad': '02334-453512',
          'distib': 'BELLACO. METEORO. MANA'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'PELAYO AGRONOMIA S.A.',
          'ingeniero': 'GENERAL PICO',
          'localidad': '02302-423815/421255',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'CEREALES QUEMU S.A.',
          'ingeniero': 'QUEMU QUEMU',
          'localidad': '02333-440121-440061-440072',
          'distib': 'SY 200. MANA'
        },
        {
          'value': 'false',
          'prov': 'La Pampa',
          'name': 'COPPO FERNANDO FABIO',
          'ingeniero': 'SANTA ROSA',
          'localidad': '02954-15692302',
          'distib': 'DESTELLO'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'ACOPIO AREQUITO S.A.',
          'ingeniero': 'AREQUITO',
          'localidad': '03464-471111/471475',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. BIGAND SOC.COOP.LTDA.',
          'ingeniero': 'BIGAND',
          'localidad': '03464-461284/461900',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'PERASSI HORACIO GUILLERMO',
          'ingeniero': 'CAÑADA DE GOMEZ',
          'localidad': '03471-425218  15525444',
          'distib': 'SY 120 - SY 330'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'LA CONSTANCIA AGRO SA.',
          'ingeniero': 'CARLOS PELLEGRINI',
          'localidad': '03401-48118015645905',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. CASILDA SOC.COOP.LTDA.',
          'ingeniero': 'CASILDA',
          'localidad': '03464-423242/422424',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'MOLINO MATILDE S.A.',
          'ingeniero': 'COLONIA MATILDE',
          'localidad': '0342-4993022/4993070 FAX3073',
          'distib': 'CAMBA - SAETA - CLARAZ - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'UNION AGRICOLA AVELLANEDA',
          'ingeniero': 'EL CARMEN DE AVELLANEDA',
          'localidad': '03482-481002',
          'distib': 'SAETA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'FIORDAMI RENZI CEREALES SA.',
          'ingeniero': 'GODEKEN',
          'localidad': '03465-498120',
          'distib': 'SY 120 -SAETA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.GODOY LTDA.',
          'ingeniero': 'GODOY',
          'localidad': '03460-497001/015',
          'distib': 'SY 330'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'ALBERTO L. MARCHIONNI S.A.',
          'ingeniero': 'HUGHES',
          'localidad': '02473-491220/491206',
          'distib': 'SY 200'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'CENTRO AGROP.MODELO',
          'ingeniero': 'HUGHES',
          'localidad': '02473-491094',
          'distib': 'SY 120 - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. HUMBOLDT SOC.COOP.LTDA.',
          'ingeniero': 'HUMBOLDT',
          'localidad': '03496-480128/480555',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'AGROSERVICIOS HUMBOLDT S.A.',
          'ingeniero': 'HUMBOLDT',
          'localidad': '03496-480380',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'PERASSI ADOLFO ALFREDO',
          'ingeniero': 'LAS PAREJAS',
          'localidad': '03471-15674329',
          'distib': 'SY 120 - SY 330'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'MELICA HNOS',
          'ingeniero': 'LOPEZ',
          'localidad': '03404-498151',
          'distib': 'SAETA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.LOS MOLINOS',
          'ingeniero': 'LOS MOLINOS',
          'localidad': '03464-495116',
          'distib': 'SY 120'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. MACIEL SOC.COOP.LTDA.',
          'ingeniero': 'MACIEL',
          'localidad': '03476-470308',
          'distib': 'SY 120 - AIKEN'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. MARIA JUANA',
          'ingeniero': 'MARIA JUANA',
          'localidad': '',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'COOP.AG.G.G.LEHMANN LTDA.',
          'ingeniero': 'PILAR',
          'localidad': '03404-470051/70027',
          'distib': 'CONSULTAR'
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
          'distib': 'SY 120 - CAMBA'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'RIBOLDI SA',
          'ingeniero': 'SAN JUSTO',
          'localidad': '03498 427472 / 15448640',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. SAN MARTIN DE LAS ESCOB',
          'ingeniero': 'SAN MARTIN DE LAS ESCOBAS',
          'localidad': '03406-498343/498243',
          'distib': 'CONSULTAR'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'AGRONOMIA LA ESQUINA',
          'ingeniero': 'SANTO TOME',
          'localidad': '0342-4744195',
          'distib': 'SY 120 -CAMBA -SAETA -PLENO'
        },
        {
          'value': 'false',
          'prov': 'Santa Fé',
          'name': 'A.F.A. TOTORAS',
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
          'distib': 'DESTELLO - SY 120 -SY 211'
        },
        {
          'value': 'false',
          'prov': 'Tucumán',
          'name': 'COMPLEJO ALIMENTICIO S.SALVADOR SA',
          'ingeniero': 'COLOMBRES',
          'localidad': '0381-154164033  4842800',
          'distib': 'ZAFIRO - ESMERALDA'
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

</style>
