<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Nav'
})

</script>

<template>
  <ul class="nav fixed h-full w-22 bg-[#23232B] divide-y divide-slate-200/25 font-mono">
    <li class="p-7 block text-red-300 font-2xl">A</li>
    <li class="p-7 block text-green-300 font-2xl">B</li>
    <li class="p-7 block text-blue-300 font-2xl">C</li>
    <li class="p-7 block text-pink-300 font-2xl">D</li>
  </ul>
</template>

<style scoped>
</style>
