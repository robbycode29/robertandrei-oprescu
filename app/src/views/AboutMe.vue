<template>
    <div class="flex flex-row background-color h-full">
        <SideMenu />
        <div class="flex-1 flex">
            <component :is="currentComponent" />
            <InfoAlert />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '@/components/SideMenu.vue';
import ProjectsPage from '@/components/ProjectsPage.vue';
import AcademiaPage from '@/components/AcademiaPage.vue';
import ExperiencePage from '@/components/ExperiencePage.vue';
import InfoAlert from '@/components/InfoAlert.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'AboutMe',
    components: {
        SideMenu,
        ProjectsPage,
        AcademiaPage,
        ExperiencePage,
        InfoAlert,
    },
    computed: {
        ...mapGetters(['getMenu']),
        currentComponent() {
            if (this.getMenu === 0) {
                return 'ProjectsPage';
            } else if (this.getMenu === 1) {
                return 'AcademiaPage';
            } else if (this.getMenu === 2) {
                return 'ExperiencePage';
            }
            return 'ProjectsPage';
        },
    },
});
</script>
<style lang="scss" scoped>
.background-color {
    background-color: rgba(204, 227, 255, 0.65);
}
</style>