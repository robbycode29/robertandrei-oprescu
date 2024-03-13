<template>
    <div @click="goTo(project.url)" class="bg-white tile-shadow rounded-xl sm:min-w-72 sm:min-h-72 cursor-pointer">
        <div class="flex flex-col h-full">
            <div class="flex-1">
                <img :src="project.image" alt="Project image"
                    class="rounded-t-xl w-full h-36 object-cover" />
            </div>
            <div class="flex-1 p-2">
                <h1 class="text-sm font-semibold">{{ project.name }}</h1>
                <span class="text-xs font-normal">{{ project.description }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectTile',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    methods: {
        goTo(url: string) {
            window.open(url, '_blank');
        },
    },
});
</script>
<style scoped>
.tile-shadow {
    box-shadow:
        2.8px 2.8px 2.8px -65px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 6.7px -65px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 12.5px -65px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 22.3px -65px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 41.8px -65px rgba(0, 0, 0, 0.05),
        100px 100px 100px -65px rgba(0, 0, 0, 0.07);
}
</style>