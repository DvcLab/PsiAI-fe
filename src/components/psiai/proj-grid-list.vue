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
            <div class="col-3" v-for="item in projects" :key="item.id">
                <ProjGridItem :proj="item"/>
            </div>
        </div>
    </div>
</template>
