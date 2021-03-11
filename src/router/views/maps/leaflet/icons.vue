<script>
import { LMap, LTileLayer, LMarker, LIcon, LCircleMarker } from "vue2-leaflet";
import { latLng } from "leaflet";
export default {
  name: "Icon",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LCircleMarker,
  },
  data() {
    return {
      zoom: 10,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      staticAnchor: [16, 37],
      circle: {
        center: [47.41322, -1.0482],
        radius: 6,
        color: "red",
      },
    };
  },
};
</script>

<template>
  <l-map :zoom="zoom" :center="center" style="height: 400px; width: 100%">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-circle-marker
      :lat-lng="circle.center"
      :radius="circle.radius"
      :color="circle.color"
    />
    <l-marker :lat-lng="circle.center"></l-marker>
    <l-marker :lat-lng="[47.41322, -1.189482]">
      <l-icon :icon-anchor="staticAnchor">
        <img src="@/assets/images/logo-dark.png" height="25" />
        <img src="@/assets/images/leaflet/marker-icon.png" />
      </l-icon>
    </l-marker>
  </l-map>
</template>

