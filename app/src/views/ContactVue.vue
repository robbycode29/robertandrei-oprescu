<template>
  <div class="flex flex-row background-color h-full">
    <div
        class="flex flex-col gap-6 w-full p-4 m-4 sm:p-4 sm:m-8 rounded-xl background-page overflow-y-scroll scrollbar-thin adjusted-height">
        <h1 class="text-3xl font-semibold text-center self-center">Get in touch</h1>
        <span class="text-lg font-semibold self-center">I am always open to new opportunities and collaborations, remote or in Bucharest. Feel free to
            reach out to me. 📧</span>
        <div class="flex flex-col gap-16 md:gap-0 items-center mb-6 md:flex-row md:justify-evenly">
          <div class="flex flex-col justify-center items-center">
            <img src="@/assets/bucharest.png" class="w-48"/>
            <img src="@/assets/refresh.svg" class="w-12" />
            <img src="@/assets/remote.svg" class="w-48"/>
          </div>
          <div class="flex flex-col justify-center">
            <span class="text-lg font-normal">Email: robertandrei.oprescu@gmail.com</span>
            <span class="text-lg font-normal">University email: robert.oprescu@stud.aero.upb.ro</span>
            <span class="text-lg font-normal">Phone: +40740069681</span>
            <span class="text-lg font-normal">Linkedin: <a class="underline" target="_blank" href="https://www.linkedin.com/in/robert-andrei-oprescu-513072221/">https://www.linkedin.com/in/robert-andrei-oprescu-513072221/</a></span>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactVue',
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

.background-color {
    background-color: rgba(204, 227, 255, 0.65);
}
.height-adjusted {
    height: calc(100vh - 60px);
}
</style>