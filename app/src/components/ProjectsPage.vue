<template>
    <div
        class="flex flex-col gap-6 w-full p-1 m-4 lg:ml-24 sm:p-4 sm:m-8 rounded-xl background-page overflow-y-scroll scrollbar-thin adjusted-height">
        <h1 class="text-xl font-semibold text-center self-center">Personal projects</h1>
        <span class="text-sm font-normal self-center">These are a few projects that I love sharing. They are no start-up
            ideas 🚀, just a few things to display my coding capabilities. 💻</span>
        <div class="h-[1.5px] bg-black w-full rounded-xl"></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
            <div v-for="project in projects" :key="project.id">
                <ProjectTile :project="project" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ProjectTile from './ProjectTile.vue';
import projects from '@/assets/projects.json';

export default defineComponent({
    name: 'ProjectsPage',
    components: {
        ProjectTile,
    },
    data() {
        return {
            boxes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
    },
    computed: {
        projects() {
            return projects.map(project => ({
                ...project,
                image: require('@/assets/' + project.image)
            }));
        },
    },
});
</script>
<style scoped>
.background-page {
    background-color: rgba(255, 255, 255, 0.53);
}

.scrollbar-thin::-webkit-scrollbar {
    width: 13px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    height: calc(100% - 20px);
    border: 5px solid rgba(255, 255, 255, 0.9);
}

body {
    scrollbar-width: thin;
}

.adjusted-height {
    height: calc(100vh - 140px);
}
</style>