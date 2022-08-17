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
        _school_name: '',
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
      console.log(  )
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
    },
    methods: {
      async getSchool () {
        console.log(`Getting ${this.school_name}'s value`)

        // const _res = (await axios.get(`/rice/${this.school_name}`)).data
        // console.log(_res)
        // let _res_ = _res.DDISH_NM.split('<br/>')
        // for (let i = 0; i < _res_.length; i++) {
        //   _res_[i] = _res_[i].replace('^', '');
        //   _res_[i] = _res_[i].replace('^', '');
        //   _res_[i] = _res_[i].replace('*', '');
        //   _res_[i] = _res_[i].replace('(', '');
        //   _res_[i] = _res_[i].replace(')', '');
        //   _res_[i] = _res_[i].replace('(', '');
        //   _res_[i] = _res_[i].replace(')', '');
        //   _res_[i] = _res_[i].replace('(', '');
        //   _res_[i] = _res_[i].replace(')', '');
        //   _res_[i] = _res_[i].replace('<br/>', '');
        //   _res_[i] = _res_[i].replace('1', '');
        //   _res_[i] = _res_[i].replace('2', '');
        //   _res_[i] = _res_[i].replace('3', '');
        //   _res_[i] = _res_[i].replace('4', '');
        //   _res_[i] = _res_[i].replace('5', '');
        //   _res_[i] = _res_[i].replace('6', '');
        //   _res_[i] = _res_[i].replace('7', '');
        //   _res_[i] = _res_[i].replace('8', '');
        //   _res_[i] = _res_[i].replace('9', '');
        //   _res_[i] = _res_[i].replace('0', '');
        //   _res_[i] = _res_[i].replace('1', '');
        //   _res_[i] = _res_[i].replace('2', '');
        //   _res_[i] = _res_[i].replace('3', '');
        //   _res_[i] = _res_[i].replace('4', '');
        //   _res_[i] = _res_[i].replace('5', '');
        //   _res_[i] = _res_[i].replace('6', '');
        //   _res_[i] = _res_[i].replace('7', '');
        //   _res_[i] = _res_[i].replace('8', '');
        //   _res_[i] = _res_[i].replace('9', '');
        //   _res_[i] = _res_[i].replace('0', '');
        //   _res_[i] = _res_[i].replace('1', '');
        //   _res_[i] = _res_[i].replace('2', '');
        //   _res_[i] = _res_[i].replace('3', '');
        //   _res_[i] = _res_[i].replace('4', '');
        //   _res_[i] = _res_[i].replace('5', '');
        //   _res_[i] = _res_[i].replace('6', '');
        //   _res_[i] = _res_[i].replace('7', '');
        //   _res_[i] = _res_[i].replace('8', '');
        //   _res_[i] = _res_[i].replace('9', '');
        //   _res_[i] = _res_[i].replace('0', '');
        //   _res_[i] = _res_[i].replace('.', '');
        //   _res_[i] = _res_[i].replace('.', '');
        //   _res_[i] = _res_[i].replace('.', '');
        //   _res_[i] = _res_[i].replace('.', '');
        //   _res_[i] = _res_[i].replace('.', '');
        //   _res_[i] = _res_[i].replace('.', '');
        //   _res_[i] = _res_[i].replace('.', '');
        // }

        // console.log(_res_)

        // this.school_rice = _res_

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
    <input v-model="school_name" id="entry" type="text" class="bg-[#e0e0e0] text-slate-600 text-lg rounded-2xl shadow-xl w-1/4 h-14 p-3 mt-10" placeholder="학교명" outline="none"/>
    <button v-on:click="getSchool()" id="entry" class="bg-zinc-200 ml-6 text-zinc-400 hover:text-zinc-500 text-xl rounded-2xl shadow-xl h-14 w-24">Search</button>
    <!-- <RouterLink class="bg-zinc-200 ml-6 text-zinc-400 hover:text-zinc-500 text-xl rounded-2xl shadow-xl p-5" id="entry" to="/info/포항제철중학교">Search</RouterLink> -->
  </div>

  <!-- School Info -->
  <div id="entry" class="rounded-2xl shadow-slate-800 bg-[#e0e0e0] w-100 mt-20 lg:ml-40 lg:mr-40 text-zinc-300">

    <div class="name text-zinc-700 font-bold text-3xl pt-10 pl-10 pr-10 text-3xl"><a class="underline" href="https://namu.wiki/w/{{ school_info.name }}">{{ school_info.name }}</a></div>
    <div class="name text-zinc-500 font-semibold text-2xl pb-10">{{ school_info.eng }}</div>

    <div class="align-left pb-10">
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">주소: </span>{{ school_info.location }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">성별: </span>{{ school_info.gender }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">설립구분: </span>{{ school_info.lib }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">설립일: </span>{{ school_info.ymd }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">우편번호: </span>{{ school_info.no }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">대표번호: </span>{{ school_info.tel }}</div>
      <div class="name text-zinc-700 font-semibold text-2xl"><span class="text-zinc-500">웹사이트: </span><a class="text-blue-400 underline" href="{{ school_info.website }}">바로가기</a></div>
    </div>
  </div>

  <!-- Rice Card -->
  <div class="rounded-2xl shadow-slate-800 bg-[#e0e0e0] w-80 mt-20 ml-40 text-zinc-300">
    <div class="time font-bold text-xl p-5">{{ time }}</div>
    <RiceCard v-for="item in school_rice.length" :rice="school_rice[item-1]" />
  </div>
</template>

<style scoped>

#entry {
  background: #e0e0e0;
  box-shadow:  20px 20px 60px #bebebe,
              -20px -20px 60px #ffffff;
}

#under {
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: inset 20px 20px 60px #bebebe,
              inset -20px -20px 60px #ffffff;
}

</style>
