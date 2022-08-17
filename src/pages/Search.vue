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
      async getSearch () {
        console.log(`Search ${this.school_name}`)

        window.sessionStorage.setItem('search', this.school_name)

        // const info = (await axios.get(`/info/${this.school_name}`));
        // console.log(info.data)
        // this.school_info.name = info.data.SCHUL_NM
        // this.school_info.eng = info.data.ENG_SCHUL_NM
        // this.school_info.gender = info.data.COEDU_SC_NM
        // this.school_info.location = info.data.ORG_RDNMA
        // this.school_info.website = info.data.HMPG_ADRES
        // this.school_info.lib = info.data.FOND_SC_NM
        // this.school_info.tel = info.data.ORG_TELNO
        // this.school_info.no = info.data.ORG_RDNZC
        // this.school_info.ymd = info.data.FOND_YMD

        // console.log(window.sessionStorage.getItem('search'))

      }
    }
})

</script>

<template>
    <!-- Search bar -->
    <div class="search relative mt-80">
        <input v-model="school_name" type="text" id="under" class="bg-[#e0e0e0] text-slate-600 text-2xl rounded-2xl shadow-xl w-1/3 h-16 p-3" placeholder="학교명" outline="none"/>
        <!-- <button v-on:click="getSearch()" class="bg-[#31313C] ml-6 text-zinc-400 hover:text-zinc-200 text-xl rounded-2xl shadow-xl w-32 h-16">Search</button> -->
        <RouterLink class="bg-zinc-200 ml-6 text-zinc-400 hover:text-zinc-500 text-xl rounded-2xl shadow-xl p-5" v-on:click="getSearch()" id="entry" to="/school">Search</RouterLink>
    </div>
</template>

<style scoped>

#entry {
  background: #e0e0e0;
  box-shadow:  10px 10px 20px #bebebe,
              -10px -10px 20px #ffffff;
}

#under {
  background: #e0e0e0;
  box-shadow: inset 5px 5px 10px #bebebe,
              inset -5px -5px 10px #ffffff;
}

</style>
