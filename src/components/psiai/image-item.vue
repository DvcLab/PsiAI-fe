<script>
// import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
    props: {
        image: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
    }
}
</script>

<template>
    <div>
        <div class="proj-item-con row align-items-center">

            <div class="col-md-1 d-none d-md-block">
                <img class="avatar-sm" :src="image.cover_img_url" alt="镜像" />
            </div>

            <div class="col-6 col-md-5">
                <h5 class="d-block text-truncate text-dark mb-0 list-item-name">
                    {{ image.name }}
                </h5>
                <p class="text-muted text-truncate mb-0">{{ image.desc }}</p>
            </div>

            <div class="col-2 col-md-2">
                <span class="badge bg-primary me-2"
                    :class="{
                        'bg-info': `${image.type}` === 'GPU'
                    }"
                >
                    {{ image.type }}
                </span>
            </div>

            <div class="col-2 col-md-2 flex-wrap">
                <div v-if="image.tags && image.tags.length > 0">
                    <i class="bx bx-git-branch me-1"></i>
                    <span class="badge bg-primary me-2">
                        {{ image.tags[0] }}
                    </span>
                    <b-dropdown
                        class="card-drop"
                        variant="white"
                        menu-class="dropdown-menu-end"
                        right
                        toggle-class="p-0"
                        >
                        <template v-slot:button-content>
                            <i class="mdi bx bx-code-alt font-size-18"></i>
                        </template>
                        <b-dropdown-item
                            v-for="item in image.tags"
                            :key="item"
                            >
                            {{ item }}
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>

            <div class="col-2 col-md-1">
                <img class="rounded-circle avatar-xs" :src="image.user.avatar_url" :alt="image.user.username" />
            </div>

            <div class="col-md-1 text-end d-none d-md-block">
                <i class="bx bx-calendar me-1"></i>
                <span>{{ image.update_time | moment("from", "now") }}</span>
            </div>

        </div>
    </div>
</template>

<style scoped>
.proj-item-con {
    background-color: #fff;
    padding: 0.75rem;
    margin-top: 0.75rem;
}
</style>