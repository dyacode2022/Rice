<script>
  import { defineComponent } from 'vue'
  import RiceCard from './RiceCard.vue'
  import axios from 'axios'

  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  export default defineComponent({
    name: 'Rice',
    components: {
      RiceCard
    },
    data() {
      return {
        school_name: '',
        school_rice: [],
        school_info: {
          name: '',
          eng: '',
          gender: '',
          location: '',
          website: '',
          lib: '',
          tel: '',
          no: '',
          ymd: '',
        },
        time: year + '-' + month + '-' + day,
      }
    },
    async mounted() {
      this.school_name = window.sessionStorage.getItem('search')
      console.log(`session ${this.school_name}`)

      
      const info = (await axios.get(`/info/${this.school_name}`));
      this.school_info.name = info.data.SCHUL_NM
      this.school_info.eng = info.data.ENG_SCHUL_NM
      this.school_info.gender = info.data.COEDU_SC_NM
      this.school_info.location = info.data.ORG_RDNMA
      this.school_info.website = info.data.HMPG_ADRES
      this.school_info.lib = info.data.FOND_SC_NM
      this.school_info.tel = info.data.ORG_TELNO
      this.school_info.no = info.data.ORG_RDNZC
      this.school_info.ymd = info.data.FOND_YMD

      const _res = (await axios.get(`/rice/${this.school_name}`)).data
        
      if (_res == 'no') {
        this.school_rice[0] = '급식 정보 없음'
      } else {
        this.school_rice = _res.DDISH_NM.split('<br/>')
        console.log('***********************\n' + this.school_rice + '\n************************')          
      }

    },
    methods: {
      async getSchool () {
        console.log(`Getting ${this.school_name}'s value`)
        window.sessionStorage.setItem('search', this.school_name)

        const _res = (await axios.get(`/rice/${this.school_name}`)).data
        
        if (_res == 'no') {
          this.school_rice[0] = '급식 정보 없음'
        } else {
          this.school_rice = _res.DDISH_NM.split('<br/>')
          console.log('***********************\n' + this.school_rice + '\n************************')          
        }


        const info = (await axios.get(`/info/${this.school_name}`));
        this.school_info.name = info.data.SCHUL_NM
        this.school_info.eng = info.data.ENG_SCHUL_NM
        this.school_info.gender = info.data.COEDU_SC_NM
        this.school_info.location = info.data.ORG_RDNMA
        this.school_info.website = info.data.HMPG_ADRES
        this.school_info.lib = info.data.FOND_SC_NM
        this.school_info.tel = info.data.ORG_TELNO
        this.school_info.no = info.data.ORG_RDNZC
        this.school_info.ymd = info.data.FOND_YMD
      },

      goWebsite () {
        window.open(`${this.school_info.website}`, "_blank");   
      },

      goWiki () {
        window.open(`https://namu.wiki/w/${this.school_info.name}`, "_blank");
      }
    }
  })

</script>

<template>

  <!-- Search bar -->
  <div class="search">
    <input v-model="school_name" id="under" type="text" class="bg-[#e0e0e0] text-slate-600 text-lg rounded-2xl shadow-xl md:w-1/4 h-14 p-3 mt-20" placeholder="학교명" outline="none"/>
    <button v-on:click="getSchool()" id="entry" class="bg-zinc-200 ml-6 text-zinc-400 hover:text-zinc-500 text-xl rounded-2xl shadow-xl h-14 w-24">Search</button>
    <!-- <RouterLink class="bg-zinc-200 ml-6 text-zinc-400 hover:text-zinc-500 text-xl rounded-2xl shadow-xl p-5" id="entry" to="/info/포항제철중학교">Search</RouterLink> -->
  </div>

  <!-- School Info -->

  <div class="mt-20 font-mono text-zinc-400 hover:text-zinc-500 text-2xl">About School</div>

  <div id="under" class="md:rounded-3xl shadow-slate-800 bg-[#e0e0e0] w-100 lg:ml-40 lg:mr-40 text-zinc-300 mt-3">

    <div class="name text-zinc-600 font-bold text-3xl pt-10 pl-10 pr-10 text-3xl"><a class="underline cursor-pointer hover:text-blue-400" @click="goWiki">{{ school_info.name }}</a></div>
    <div class="name text-zinc-500 font-semibold text-2xl pb-10">{{ school_info.eng }}</div>

    <div class="align-left pb-10">
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">주소: </span>{{ school_info.location }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">성별: </span>{{ school_info.gender }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">설립구분: </span>{{ school_info.lib }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">설립일: </span>{{ school_info.ymd }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">우편번호: </span>{{ school_info.no }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">대표번호: </span>{{ school_info.tel }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">웹사이트: </span><a class="text-blue-400 underline cursor-pointer" @click="goWebsite()">바로가기</a></div>
    </div>
  </div>

  <!-- Rice Card -->

  <div class="mt-20 font-mono text-zinc-400 hover:text-zinc-500 text-2xl">About Meal</div>

  <div id="under" class="md:rounded-2xl shadow-slate-800 bg-[#e0e0e0] mt-3 md:ml-40 md:mr-40 text-zinc-300 mb-2">
    <div class="time name text-zinc-600 font-bold text-3xl pt-10 pl-10 pr-10 text-3xl">{{ time }}</div>
    <div class="flex align-center justify-center flex-wrap">
      <RiceCard class="pb-10" v-for="item in school_rice.length" :rice="school_rice[item-1]" />
    </div>
  </div>
  <div class="allergy text-zinc-500 text-xl mb-72">1.난류 2.우유 3.메밀 4.땅콩 5.대두 6.밀 7.고등어 8.게 9.새우 10.돼지고기 11.복숭아 12.토마토 13.아황산염 14.호두 15.닭고기 16.쇠고기 17.오징어 18.조개류 19.잣</div>

</template>

<style scoped>

#entry {
  background: #e0e0e0;
  box-shadow:  9px 9px 18px #bebebe,
              -9px -9px 18px #ffffff;
}

#under {
background: #e0e0e0;
box-shadow: inset 5px 5px 10px #bebebe,
            inset -5px -5px 10px #ffffff;
}

</style>
