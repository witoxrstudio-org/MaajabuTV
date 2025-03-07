<template>
  <footer class="mj-container text-white py-10">
    <div class="mx-auto grid grid-cols-2 md:grid-cols-4">
      <!-- Colonne Logo + Contact -->
      <div>
        <img src="/img/logo.png" alt="MovieMax Logo" class="h-24 w-auto" />
        <div class="mt-4 space-y-2 text-gray-400">
          <p>
            <span class="font-semibold text-white">Email: </span>
            <span
              class="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >maajabu@tv.com</span
            >
          </p>
          <p>
            <span class="font-semibold text-white">Téléphone: </span>
            <span
              class="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >(243) 999-7172</span
            >
          </p>
          <p>
            <span class="font-semibold text-white">Siège: </span><br />
            <span
              class="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >120 quartier, Avenue, DRC</span
            >
          </p>
        </div>
      </div>

      <!-- Colonne Quick Links -->

      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul class="space-y-2 text-gray-400">
          <li v-for="link in quickLinks" :key="link">
            <a
              href="#"
              class="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-indigo-400"
              >{{ link }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Colonne Social Media -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Social Media</h3>
        <ul class="grid grid-cols-1 sm:grid-cols-1 gap-4 text-gray-400 mb-6">
          <li v-for="social in socialMedia" :key="social.name">
            <a href="#" class="flex items-center space-x-2 hover:text-blue-500">
              <i :class="social.icon" class="fa"></i>
              <span
                class="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
                >{{ social.name }}</span
              >
            </a>
          </li>
        </ul>
      </div>

      <!-- Colonne Réseaux Sociaux + Newsletter -->
      <div class="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 class="text-xl font-semibold text-white mb-4">
          <span class="text-blue-500 cursor-pointer hover:underline"
            >Newsletter</span
          >
        </h3>
        <p class="text-gray-300 text-sm mb-6">
          Restez au courant des dernières sorties de films, des promotions
          exclusives et des offres spéciales en vous abonnant à notre
          newsletter.
        </p>
        <div class="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Votre EMail"
            class="px-4 py-2 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            S'abonner
          </button>
        </div>
      </div>
    </div>

    <!-- Copyright + Liens Légaux -->
    <div
      class="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-center text-sm"
    >
      <p>Copyright © 2025 Maajabu TV. All rights reserved.</p>
      <div class="flex justify-center gap-4 mt-2">
        <a href="#" class="hover:text-blue-400">Privacy Policy</a>
        <a href="#" class="hover:text-blue-400">Terms & Conditions</a>
        <a href="#" class="hover:text-blue-400">Cookie Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = ["Accueil", "Live", "Submit", "Emission", "Contacts"];

const socialMedia = ref([
  { name: "Instagram", icon: "fab fa-instagram" },
  { name: "Facebook", icon: "fa-brands fa-facebook-f" },
  { name: "Youtube", icon: "fab fa-youtube" },
]);
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>
