<template>
    <div class="flex flex-row background-color h-screen">
        <SideMenu />
        <div class="flex-1 flex"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '@/components/SideMenu.vue';

export default defineComponent({
    name: 'AboutMe',
    components: {
        SideMenu,
    }
});
</script>
<style lang="scss" scoped>
.background-color {
    background-color: rgba(204, 227, 255, 0.65);
}
</style>