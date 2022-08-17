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
  <div class="rice-card text-center text-current font-semibold p-3 m-10 text-zinc-700">{{ rice }}</div>
</template>

<style scoped>
</style>
