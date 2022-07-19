<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'KakaoMap',
  data() {
    return {
      map: null,
      markers: [],
      latitude: 37.2753347661,
      longitude: 127.0576903541
    }
  },
  mounted() {
    if (!("geolocation" in navigator)) {
      return;
    }

    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      if (window.kakao && window.kakao.maps) {

        this.initMap();

      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=02252adb4a34db1dab8d732d7d33cf6e";
        document.head.appendChild(script);
      }

    }, err => {
      alert(err.message);
    })
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.564343, 126.947613),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      this.displayMarker([[37.2753347661, 127.0576903541]]);
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
          (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
            (position) =>
                new kakao.maps.Marker({
                  map: this.map,
                  position,
                })
        );

        const bounds = positions.reduce(
            (bounds, latlng) => bounds.extend(latlng),
            new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    }
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
  width: 1000px;
  height: 800px;
  border: 1px #a8a8a8 solid;
}
</style>
