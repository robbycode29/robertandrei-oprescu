<template>
    <div class="absolute l-0 height-adjusted bg-[#cce3ff] shadow-xl px-5 py-16 hidden lg:flex flex-col gap-9 w-16 overflow-x-hidden lg:hover:w-72 text-nowrap group transition-all duration-300 ease-in-out">
        <button @click="changeMenu(0)" class="flex flex-row gap-6">
            <img src="../assets/wand.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">My Projects</span>
        </button>
        <button @click="changeMenu(1)" class="flex flex-row gap-6">
            <img src="../assets/academic.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">Academia</span>
        </button>
        <button @click="changeMenu(2)" class="flex flex-row gap-6">
            <img src="../assets/experience.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">Professional Experience</span>
        </button>
        <div class="flex-1"></div>
        <button @click="changeShowInfoAlert(true)" class="flex flex-row gap-6">
            <img src="../assets/info.svg" class="w-6 h-6" />
            <span class="text-gray-800 font-medium group-hover:flex">Info</span>
        </button>
    </div>
    <div v-if="$route.path == '/'" class="fixed bottom-0 w-full bg-[#cce3ff] shadow-xl px-5 py-5 lg:hidden flex flex-row justify-center gap-12">
        <button @click="changeMenu(0)" class="flex flex-row gap-6">
            <img src="../assets/wand.svg" class="w-6 h-6" />
        </button>
        <button @click="changeMenu(1)" class="flex flex-row gap-6">
            <img src="../assets/academic.svg" class="w-6 h-6" />
        </button>
        <button @click="changeMenu(2)" class="flex flex-row gap-6">
            <img src="../assets/experience.svg" class="w-6 h-6" />
        </button>
        <button @click="$router.push('/contact')" class="flex flex-row gap-6">
            <img src="../assets/phone.svg" class="w-6 h-6" />
        </button>
    </div>
    <div v-else-if="$route.path == '/contact'" class="fixed bottom-0 w-full bg-[#cce3ff] shadow-xl px-5 py-5 lg:hidden flex flex-row justify-center gap-12">
        <button @click="$router.push('/')" class="flex flex-row items-center gap-6">
            <img src="../assets/user.svg" class="w-5 h-5" />
        </button>
        <button @click="$router.push('/contact')" class="flex flex-row items-center gap-6">
            <img src="../assets/phone.svg" class="w-6 h-6" />
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'SideMenu',
  methods: {
    ...mapActions(['changeMenu', 'changeShowInfoAlert']),
  },
});
</script>
<style>
.height-adjusted {
    height: calc(100vh - 60px);
}
</style>