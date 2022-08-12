<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Search',
    data () {
      return {
        school_name: '',
      }
    },
    methods: {
      async getSchool () {
        console.log(`Getting ${this.school_name}'s value`)

        const info = (await axios.get(`/info/${this.school_name}`));
        console.log(info.data)
        this.school_info.name = info.data.SCHUL_NM
        this.school_info.eng = info.data.ENG_SCHUL_NM
        this.school_info.gender = info.data.COEDU_SC_NM
        this.school_info.location = info.data.ORG_RDNMA
        this.school_info.website = info.data.HMPG_ADRES
        this.school_info.lib = info.data.FOND_SC_NM
        this.school_info.tel = info.data.ORG_TELNO
        this.school_info.no = info.data.ORG_RDNZC
        this.school_info.ymd = info.data.FOND_YMD
      }
    }
})

</script>

<template>
    <!-- Search bar -->
    <div class="search">
        <input v-model="school_name" type="text" class="bg-[#31313C] text-slate-200/75 text-lg rounded-full w-1/4 p-3 mt-10" placeholder="학교명" outline="none"/>
        <button v-on:click="getSchool()" class="bg-[#31313C] ml-6 text-zinc-400 hover:text-zinc-200 text-lg rounded-lg w-20 h-12">Search</button>
    </div>
</template>

<style scoped>
</style>
