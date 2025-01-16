<template>
  <div
    class="flex items-center md:items-stretch pt-4 md:pt-0 flex-col gap-6 w-full p-1 m-4 lg:ml-24 sm:p-4 sm:m-8 rounded-xl background-page overflow-y-scroll scrollbar-thin adjusted-height">
    <div class="grid sm:flex sm:flex-row sm:justify-evenly gap-2 md:gap-0 items-center">
      <img src="@/assets/django.png" class="w-24" />
      <!-- <img src="@/assets/firebase.png" class="w-32" /> -->
      <!-- <img src="@/assets/gee.png" class="w-12" /> -->
      <img src="@/assets/vue-logo.png" class="w-24" />
      <img src="@/assets/docker.png" class="w-12 justify-self-center" />
      <!-- <img src="@/assets/node.png" class="w-20" /> -->
      <img src="@/assets/postgres.png" class="w-24" />
<!--      <img src="@/assets/tensorflow.png" class="w-24" />-->
      <!-- <img src="@/assets/ubuntu.png" class="w-24" /> -->
      <img src="@/assets/pytorch.png" class="w-24" />
    </div>
<!--    <img src="@/assets/carrer.png" class="md:flex hidden py-16 px-36" />-->
    <div class="flex flex-col gap-6 justify-self-center items-center mb-6">
      <h1 class="text-2xl font-semibold text-center md:text-left">Download CV in PDF format</h1>
      <a href="https://drive.google.com/file/d/1PdefIXyYJKvJ7nXW4ZpIAFJ41x2PWdPu/view?usp=sharing" target="_blank" class="flex items-center justify-center w-32 h-12 bg-black text-white rounded-xl">
        <img src="@/assets/drive.svg" class="w-6 mr-2"/>
        Download
      </a>
    </div>
    <div class="flex flex-col gap-6 lg:mx-44">
      <div class="flex flex-col gap-4 border-2 border-black rounded-xl p-4">
        <div class="flex md:flex-row flex-col items-center gap-2 md:gap-0">
            <h2 class="text-2xl font-semibold text-center md:text-left">Software Engineer Consultant @ Tremend, Publicis Groupe</h2>
            <div class="flex flex-1"></div>
            <img src="@/assets/consultant.svg" class="w-8"/>
        </div>
        <div class="flex w-full h-[1.5px] bg-black"></div>
        <span class="flex flex-col text-lg font-medium">As a Python Engineer and Consultant my responsibilities revolve around:
          <span class="pl-6">• Translated client requirements into fully developed, tested, and deployed features using Python, enhancing overall system functionality.</span>
          <span class="pl-6">• Played a pivotal role in agile ceremonies, including sprint planning, backlog refinement, and retrospectives, driving project alignment and efficient task execution.</span>
          <span class="pl-6">• Improved team capacity by at least 30% by taking on cross-functional roles, including front-end, back-end, and testing, which boosted overall team output by 3x.</span>
          <span class="pl-6">• Contributed to achieving a company milestone of $1.6 billion USD in sales during my tenure through consistent delivery of high-quality, scalable solutions.</span>
          <span class="pl-6">• Provided software consultancy and implemented best practices to enhance product quality and system performance.</span>
        </span>
      </div>
      <div class="flex flex-col gap-4 border-2 border-black rounded-xl p-4">
        <div class="flex md:flex-row flex-col items-center gap-2 md:gap-0">
          <h2 class="text-2xl font-semibold text-center md:text-left">Freelance Developer @ Nezo Global</h2>
          <div class="flex flex-1"></div>
          <img src="@/assets/ecommerce.svg" class="w-8"/>
        </div>
        <div class="flex w-full h-[1.5px] bg-black"></div>
        <span class="flex flex-col text-lg font-medium">As a contract developer for Nezo Global I helped with:
          <span class="pl-6">• Development and testing of e-commerce platform functionality</span>
          <span class="pl-6">• Maintaining an Agile workflow and implementing best practices for frameworks like Nuxt.</span>
          <span class="pl-6">• Transforming design from Figma into functional Vue apps using Tailwind.</span>
          <span class="pl-6">• Communication and planning of development activities surrounding project area of expertise.</span>
        </span>
      </div>
      <div class="flex flex-col gap-4 border-2 border-black rounded-xl p-4">
        <div class="flex md:flex-row flex-col items-center gap-2 md:gap-0">
          <h2 class="text-2xl font-semibold text-center md:text-left">Junior SWE @ GMV Innovating Solutions</h2>
          <div class="flex flex-1"></div>
          <img src="@/assets/satellite.svg" class="w-8"/>
        </div>
        <div class="flex w-full h-[1.5px] bg-black"></div>
        <span class="flex flex-col text-lg font-medium">As a full-stack software engineer my responsibilities revolved
          around the scope of two projects.
          <span class="pl-6">• Most of my time was allocated to internal tool development of a GIS workflow app. During this time, I
            worked
            closely with the product team to ensure we laid out key milestones, organized our tasks using Azure and
            then update and write status reports during both development and testing. Technologies I learned to use
            and master during this project are: Django for building backend REST API endpoints, Vue.js as a very
            capable and versatile frontend framework, Geoserver WMS API for the use of geospatial data and maps,
            and environment orchestration tools such as Docker with Docker Compose, and for version control git with
            Gitlab. (also other peripherals such as Vue Test Utils, es-lint, Vuetify)</span>
          <span class="pl-6">• The second project I was involved in, was concerning the use of Convolutional Neural Network
            architectures
            trained on sets of data that is being generated by Super-Resolution Generative Adversary Neural Networks
            for the purpose of identifying spectral signatures of certain materials in Sentinel low resolution image
            data.</span>
        </span>
      </div>
      <div class="flex flex-col gap-4 border-2 border-black rounded-xl p-4">
        <div class="flex md:flex-row flex-col items-center gap-2 md:gap-0">
          <h2 class="text-2xl font-semibold text-center md:text-left">Web designer @ Viralize</h2>
          <div class="flex flex-1"></div>
          <img src="@/assets/design.svg" class="w-8"/>
        </div>
        <div class="flex w-full h-[1.5px] bg-black"></div>
        <span class="flex flex-col text-lg font-medium">As a web developer at Viralize I worked on the development of
          the e-commerce platform Amibios.
          I was responsible for the development of frontend features consisting of:
          <span class="pl-6">• Landing pages and product pages</span>
          <span class="pl-6">• Payment funnels</span>
          <span class="pl-6">• CMS integration</span>
          <span class="pl-6">• Email automation</span>
          <span>I was also responsible for client relations for the specific product helping with:</span>
          <span class="pl-6">• Brand building</span>
          <span class="pl-6">• Brand exposure</span>
          <span class="pl-6">• Sales campaign management for client</span>
          <span class="pl-6">• Marketing solutions</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExperiencePage',
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