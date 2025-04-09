<template>
  <footer class="mj-container text-white py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Logo + Description -->
        <div>
          <div class="flex items-center space-x-2">
            <img src="/img/logo.png" alt="Pagedone Logo" class="h-48 w-auto" />
          </div>
        </div>

        <!-- Links Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Menu</h4>
          <ul class="space-y-3 text-gray-500 text-sm">
            <li>
              <NuxtLink
                to="/"
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Accueil</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/tv"
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Live</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/submit"
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Submit</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/broadcasts"
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Emission</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Contacts</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Support Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Support</h4>
          <ul class="space-y-3 text-gray-500 text-sm">
            <li>
              <NuxtLink
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Customer Support</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Cookies</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >License</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Terms & Conditions</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white"
                >Privacy Policy</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Instagram Feed -->
        <div>
          <div class="flex justify-between items-center mb-4">
            <h4 class="text-white font-semibold">Instagram</h4>
            <NuxtLink
              to="/instagram"
              class="relative inline-block text-gray-500 text-sm after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
            >
              Visit All
            </NuxtLink>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              alt="Instagram post"
              class="h-20 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright + Liens Légaux -->
    <div
      class="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-center text-sm"
    >
      <p class="text-gray-500 text-sm mt-4">
        Copyright © {{ currentYear }} Maajabu TV. All rights reserved.
      </p>
      <div class="flex justify-center gap-4 mt-2">
        <a href="#" class="relative group text-gray-700 hover:text-blue-400">
          Privacy Policy
          <span
            class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a href="#" class="relative group text-gray-700 hover:text-blue-400">
          Terms & Conditions
          <span
            class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a href="#" class="relative group text-gray-700 hover:text-blue-400">
          Cookie Policy
          <span
            class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const images = [
  "/img/e4.jpg",
  "/img/e2.png",
  "/img/e1.png",
  "/img/e10.jpg",
  "/img/e5.jpg",
  "/img/e6.jpg",
];
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>
