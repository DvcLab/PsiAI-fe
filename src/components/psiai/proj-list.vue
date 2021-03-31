<script>
import ProjItem from './proj-item';

export default {
    components: {
        ProjItem
    },
    props: {
        projects: {
            type: Array,
            default: function () {
                return [];
            },
        },
        updating: {
            type: Boolean,
        },
    },
}
</script>
<template>
    <div v-if="projects && projects.length > 0" class="row">
        <ProjItem v-for="item in projects" :key="item.id" :proj="item" class="col-12"/>
    </div>
</template>
