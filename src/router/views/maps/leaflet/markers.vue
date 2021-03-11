<script>
import { LMap, LMarker, LTileLayer, LIcon } from "vue2-leaflet";
import { latLng } from "leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      zoom: 6,
      center: latLng(51.505, -0.09),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      staticAnchor: [16, 37],
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [
        {
          id: "m1",
          position: { lat: 51.505, lng: -0.09 },
          draggable: true,
          visible: true
        },
        {
          id: "m2",
          position: { lat: 51.8905, lng: -0.09 },
          draggable: true,
          visible: true
        },
        {
          id: "m3",
          position: { lat: 51.005, lng: -0.09 },
          draggable: true,
          visible: true
        },
        {
          id: "m4",
          position: { lat: 50.7605, lng: -0.09 },
          draggable: true,
          visible: true
        }
      ]
    };
  }
};
</script>

 <template>
  <l-map style="height: 400px; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :visible="marker.visible"
      :draggable="marker.draggable"
      :lat-lng="marker.position"
    >
      <l-icon :icon-anchor="staticAnchor">
        <img src="@/assets/images/leaflet/marker-icon.png" />
      </l-icon>
    </l-marker>
  </l-map>
</template> 