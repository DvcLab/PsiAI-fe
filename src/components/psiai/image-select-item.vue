<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {}
        },
    },
    computed:{
        tags() {
            if (!this.image.tags) return [];
            let tagList = this.image.tags;
            if (tagList.length > 3) {
                let temp = tagList.slice(0,3);
                temp.push('...');
                return temp;
            }
            return tagList;
        },
    }
}
</script>

<template>
    <div>
        <div class="image-item-con row align-items-center">

            <div class="col-10 col-md-8">
                <h5 class="d-block text-truncate mb-0 list-item-name">
                    {{ image.name }}
                </h5>
                <p class="text-truncate mb-0">{{ image.desc }}</p>
                <p class="text-muted text-truncate mb-0">

                    <span v-if="image.types && image.types.length > 0">
                        <span v-for="item in image.types"
                            class="badge bg-primary me-1"
                            :key="item"
                            >
                            {{ item }}
                        </span>
                    </span>
                    
                    <span v-if="image.tags && image.tags.length > 0">
                        <span v-for="item in tags"
                            class="badge bg-success me-1"
                            :key="item"
                            >
                            {{ item }}
                        </span>
                    </span>
                    
                </p>
            </div>

            <div class="col-2 col-md-2">
                <span v-if="image.types.length > 0" class="badge bg-primary me-2"
                    :class="{
                        'bg-info': `${image.types[0]}` === 'GPU'
                    }"
                >
                    {{ image.types[0] }}
                </span>
            </div>

            <div class="col-md-2 text-end d-none d-md-block">
                <i class="bx bx-calendar me-1"></i>
                <span>{{ image.update_time | moment("from", "now") }} 更新</span>
            </div>

        </div>
    </div>
</template>

<style scoped>
.image-item-con {
    padding: 0.5rem;
}
h5 {
    color: inherit;
}
</style>