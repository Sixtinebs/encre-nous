<template>
  <div>
    <h1>Rechercher des bêta-lecteurs</h1>
    <component-list-beta-reader />
  </div>
</template>

<script>

import ComponentListBetaReader from '../components/ListeBetaReader.vue'

export default {
  name: 'ListeBetaReader',
  components: {
    ComponentListBetaReader
  }


}



</script>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
