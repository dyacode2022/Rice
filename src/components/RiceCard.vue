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
  <div class="rice-card text-center text-current font-semibold p-3 text-zinc-400">{{ rice }}</div>
</template>

<style scoped>
</style>
