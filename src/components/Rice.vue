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
    data () {
      return {
        school_name: '',
        school_rice: [],
        time: year + '-' + month + '-' + day,
      }
    },
    methods: {
      async getSchool () {
        console.log(`Getting ${this.school_name}'s value`)

        const _res = (await axios.get(`/rice/${this.school_name}`)).data
        console.log(_res)
        let _res_ = _res.DDISH_NM.split('<br/>')
        for (let i = 0; i < _res_.length; i++) {
          _res_[i] = _res_[i].replace('^', '');
          _res_[i] = _res_[i].replace('^', '');
          _res_[i] = _res_[i].replace('*', '');
          _res_[i] = _res_[i].replace('(', '');
          _res_[i] = _res_[i].replace(')', '');
          _res_[i] = _res_[i].replace('(', '');
          _res_[i] = _res_[i].replace(')', '');
          _res_[i] = _res_[i].replace('(', '');
          _res_[i] = _res_[i].replace(')', '');
          _res_[i] = _res_[i].replace('<br/>', '');
          _res_[i] = _res_[i].replace('1', '');
          _res_[i] = _res_[i].replace('2', '');
          _res_[i] = _res_[i].replace('3', '');
          _res_[i] = _res_[i].replace('4', '');
          _res_[i] = _res_[i].replace('5', '');
          _res_[i] = _res_[i].replace('6', '');
          _res_[i] = _res_[i].replace('7', '');
          _res_[i] = _res_[i].replace('8', '');
          _res_[i] = _res_[i].replace('9', '');
          _res_[i] = _res_[i].replace('0', '');
          _res_[i] = _res_[i].replace('1', '');
          _res_[i] = _res_[i].replace('2', '');
          _res_[i] = _res_[i].replace('3', '');
          _res_[i] = _res_[i].replace('4', '');
          _res_[i] = _res_[i].replace('5', '');
          _res_[i] = _res_[i].replace('6', '');
          _res_[i] = _res_[i].replace('7', '');
          _res_[i] = _res_[i].replace('8', '');
          _res_[i] = _res_[i].replace('9', '');
          _res_[i] = _res_[i].replace('0', '');
          _res_[i] = _res_[i].replace('1', '');
          _res_[i] = _res_[i].replace('2', '');
          _res_[i] = _res_[i].replace('3', '');
          _res_[i] = _res_[i].replace('4', '');
          _res_[i] = _res_[i].replace('5', '');
          _res_[i] = _res_[i].replace('6', '');
          _res_[i] = _res_[i].replace('7', '');
          _res_[i] = _res_[i].replace('8', '');
          _res_[i] = _res_[i].replace('9', '');
          _res_[i] = _res_[i].replace('0', '');
          _res_[i] = _res_[i].replace('.', '');
          _res_[i] = _res_[i].replace('.', '');
          _res_[i] = _res_[i].replace('.', '');
          _res_[i] = _res_[i].replace('.', '');
          _res_[i] = _res_[i].replace('.', '');
          _res_[i] = _res_[i].replace('.', '');
          _res_[i] = _res_[i].replace('.', '');
        }

        console.log(_res_)

        this.school_rice = _res_
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

  <!-- Rice Card -->
  <div class="rounded-2xl shadow-slate-800 bg-[#23232B] w-80 mt-20 ml-40 text-zinc-300">
    <div class="time font-bold text-xl p-5">{{ time }}</div>
    <RiceCard v-for="item in school_rice.length" :rice="school_rice[item-1]" />
  </div>
</template>

<style scoped>
</style>
