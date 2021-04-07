<script>
import ProjGridItem from './proj-grid-item';

export default {
    components: {
        ProjGridItem
    },
    props: {
        projects: {
            type: Array,
            default: function () {
                return [];
            },
        }
    },
}
</script>
<template>
    <div v-if="projects && projects.length > 0">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2" v-for="item in projects" :key="item.id">
                <ProjGridItem :proj="item"/>
            </div>
        </div>
    </div>
</template>
