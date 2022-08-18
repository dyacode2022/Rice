<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'RiceCard',
  props: {
    rice: String
  }
})

</script>

<template>
  <div class="rice-card text-center font-semibold text-2xl m-10 text-gray-700">{{ rice }}</div>
</template>

<style scoped>
</style>
