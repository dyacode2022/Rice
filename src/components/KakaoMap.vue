<script>
import {defineComponent} from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'KakaoMap',
  data() {
    return {
      schools: [],
    }
  },
  async mounted() {

    const res = ((await axios.get(`/shloc`)).data.response.body).items
    console.log(res)

    for (let i = 0; i < res.length; i++) {
      this.schools.push({ schoolnm: res[i].schoolNm, latitude: res[i].latitude, longitude: res[i].longitude })
    }

    // JSON.parse(JSON.stringify(this.schools))

    // get position
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=02252adb4a34db1dab8d732d7d33cf6e';
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      const marks = JSON.parse(JSON.stringify(this.schools))
      let jsons = [{}];

      for (let i = 0; i < marks.length; i++) {
        jsons.push({ schoolnm: marks[i].schoolnm, latlng: new kakao.maps.LatLng( Number(marks[i].latitude), Number(marks[i].longitude) )})
        // this.displayMarker([[Number(marks[i].latitude), Number(marks[i].longitude)]]);

      }
      console.log(jsons)

      let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"

      for (let j = 1; j < jsons.length; j++) {
        let imageSize = new kakao.maps.Size(24, 35)
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
        
        let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: jsons[j].latlng, // 마커를 표시할 위치
          title : jsons[j].schoolnm, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
        });
      }


    },
    // displayMarker(markerPositions) {
    //   if (this.markers.length > 0) {
    //     this.markers.forEach((marker) => marker.setMap(null));
    //   }

    //   const positions = markerPositions.map(
    //       (position) => new kakao.maps.LatLng(...position)
    //   );

    //   if (positions.length > 0) {
    //     this.markers = positions.map(
    //         (position) =>
    //             new kakao.maps.Marker({
    //               map: this.map,
    //               position,
    //             })
    //     );

    //     const bounds = positions.reduce(
    //         (bounds, latlng) => bounds.extend(latlng),
    //         new kakao.maps.LatLngBounds()
    //     );

    //     this.map.setBounds(bounds);
    //   }
    // },

    // async getSchool () {
    //   const res = (await axios.get(`/shloc`)).data
    //   console.log(res)
    // }
  }
})

</script>

<template>
  <section class="kakao-map">
    <div id="map"></div>
  </section>

</template>

<style scoped>
.kakao-map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#map {
  width: 1200px;
  height: 800px;
  border: 4px #2a2a31 solid;
}
</style>
