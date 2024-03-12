<template>
    <div class="bg-[#cce3ff] shadow-xl px-5 py-16 flex flex-col gap-9 w-16 overflow-x-hidden hover:w-72 text-nowrap group transition-all duration-300 ease-in-out">
        <button class="flex flex-row gap-6">
            <img src="../assets/wand.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">My Projects</span>
        </button>
        <button class="flex flex-row gap-6">
            <img src="../assets/academic.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">Academia</span>
        </button>
        <button class="flex flex-row gap-6">
            <img src="../assets/experience.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">Professional Experience</span>
        </button>
        <div class="flex-1"></div>
        <button class="flex flex-row gap-6">
            <img src="../assets/info.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">Info</span>
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideMenu',
});
</script>