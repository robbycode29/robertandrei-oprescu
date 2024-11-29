<template>
  <div
    class="flex flex-col gap-6 w-full p-1 m-4 sm:p-4 sm:m-8 lg:ml-24 rounded-xl background-page overflow-y-scroll scrollbar-thin adjusted-height">
    <h1 class="text-xl font-semibold text-center self-center">Academia and Education</h1>
    <div class="h-[1.5px] bg-black w-full rounded-xl"></div>
    <div class="flex flex-col gap-16">
      <div class="flex flex-col lg:flex-row gap-4">
        <img src="@/assets/acs.png" class="w-72 lg:ml-36 self-center" />
        <div class="flex flex-1"></div>
        <div class="flex flex-col gap-2 lg:text-right self-center lg:mr-36">
          <h2 class="text-lg font-semibold">Master of Science in Internet Systems Engineering</h2>
          <span class="text-sm font-normal">University "Politehnica" Bucharest, Faculty of Automatic Control and
            Computers</span>
          <span class="text-sm font-normal">2023 - 2025</span>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-4">
        <img src="@/assets/fia.png" class="flex lg:hidden w-72 lg:ml-36 self-center" />
        <div class="flex lg:hidden flex-1"></div>
        <div class="flex flex-col gap-2 lg:text-left self-center lg:ml-36">
          <h2 class="text-lg font-semibold">Bachelor of Science in Aerospace Engineering</h2>
          <span class="text-sm font-normal">University "Politehnica" Bucharest, Faculty of Aerospace Engineering</span>
          <span class="text-sm font-normal">2019 - 2023</span>
        </div>
        <div class="lg:flex flex-1 hidden"></div>
        <img src="@/assets/fia.png" class="lg:flex hidden w-72 lg:mr-36 self-center" />
      </div>
      <img src="@/assets/upb.png" class="w-20 self-center justify-self-center"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AcademiaPage',
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

/* .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #555;
} */

body {
  scrollbar-width: thin;
}

.adjusted-height {
  height: calc(100vh - 140px);
}
</style>