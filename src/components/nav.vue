<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Nav'
})

</script>

<template>
  <nav id="entry" class="nav fixed h-20 w-full bg-[#e0e0e0] relative divide-y divide-slate-200/25 font-mono shadow-xl">
    <div class="nav-brand font-bold text-3xl pb-0 p-5 text-zinc-600">Rice</div>
  </nav>
</template>

<style scoped>

#entry {
  background: #e0e0e0;
  box-shadow:  20px 20px 60px #bebebe,
              -20px -20px 60px #ffffff;
}

</style>
