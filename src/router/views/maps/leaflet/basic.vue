<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "vue2-leaflet";

export default {
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: latLng(47.41422, -1.250482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
  },
  methods: {
    innerClick() {
      alert("Click!");
    },
  },
};
</script>

<template>
  <l-map
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="height: 400px; width: 100%"
  >
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker :lat-lng="withTooltip">
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <div @click="innerClick">
          I am a tooltip
          <p v-show="showParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec
            finibus semper metus id malesuada.
          </p>
        </div>
      </l-tooltip>
      <l-icon>
        <img src="@/assets/images/leaflet/marker-icon.png" />
      </l-icon>
    </l-marker>
  </l-map>
</template>