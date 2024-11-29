<template>
  <div class="flex flex-col background h-screen">
    <div class="hidden lg:flex flex-row header-shadow bg-[#F5F5F5] h-16 items-center px-5 gap-4">
      <div class="flex">
        <img src="./assets/favicon-logo.png" class="w-8 h-8" />
      </div>
      <div class="flex-1 flex flex-row items-center justify-center gap-5">
        <router-link to="/" class="flex items-center justify-center">
          <h1 class="text-xl font-medium text-gray-700">About me</h1>
        </router-link>
        <router-link to="/contact" class="flex items-center justify-center">
          <h1 class="text-xl font-medium text-gray-700">Contact</h1>
        </router-link>
      </div>
    </div>
    <div class="flex lg:hidden flex-row header-shadow bg-[#F5F5F5] h-16 items-center justify-center px-5 gap-4">
      <div class="flex">
          <img src="./assets/favicon-logo.png" class="w-8 h-8" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.header-shadow {
  box-shadow:
    2px 0.5px 1.6px -15px rgba(0, 0, 0, 0.017),
    4.5px 1.1px 3.6px -15px rgba(0, 0, 0, 0.024),
    7.9px 2px 6.3px -15px rgba(0, 0, 0, 0.03),
    12.5px 3.1px 10px -15px rgba(0, 0, 0, 0.035),
    19.3px 4.8px 15.5px -15px rgba(0, 0, 0, 0.04),
    30.1px 7.5px 24.1px -15px rgba(0, 0, 0, 0.046),
    50px 12.5px 40px -15px rgba(0, 0, 0, 0.053),
    100px 25px 80px -15px rgba(0, 0, 0, 0.07);
}

.background {
  background-image: url('./assets/flowing-lines.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
</style>
<script setup lang="ts">
</script>