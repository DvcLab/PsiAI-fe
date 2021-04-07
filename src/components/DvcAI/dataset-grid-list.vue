<script>
import DatasetGridItem from './dataset-grid-item';

export default {
    components: {
        DatasetGridItem
    },
    props: {
        datasets: {
            type: Array,
            default: function () {
                return [];
            },
        }
    },
}
</script>
<template>
    <div v-if="datasets && datasets.length > 0">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-3" v-for="item in datasets" :key="item.id">
                <DatasetGridItem :dataset="item"/>
            </div>
        </div>
    </div>
</template>
