<template>
  <footer class="mj-container bg-black text-white py-10 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Colonne Logo + Contact -->
      <div>
        <h2 class="text-2xl font-bold">
          MOVIE<span class="text-indigo-400">MAX</span>
        </h2>
        <div class="mt-4 space-y-2 text-gray-400">
          <p>
            <span class="font-semibold text-white">Email:</span>
            support@moviemax.com
          </p>
          <p>
            <span class="font-semibold text-white">Phone:</span> (868) 577-7172
          </p>
          <p>
            <span class="font-semibold text-white">Headquartered:</span><br />
            120 Albright Wy, Los Gatos,<br />
            United States
          </p>
        </div>
      </div>

      <!-- Colonne Quick Links -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul class="space-y-2 text-gray-400">
          <li v-for="link in quickLinks" :key="link">
            <a href="#" class="hover:text-indigo-400">{{ link }}</a>
          </li>
        </ul>
      </div>

      <!-- Colonne Collections -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Collections</h3>
        <ul class="space-y-2 text-gray-400">
          <li v-for="collection in collections" :key="collection">
            <a href="#" class="hover:text-indigo-400">{{ collection }}</a>
          </li>
        </ul>
      </div>

      <!-- Colonne Réseaux Sociaux + Newsletter -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">Social Media</h3>
        <ul class="space-y-2 text-gray-400 mb-6">
          <li v-for="social in socialMedia" :key="social">
            <a href="#" class="hover:text-indigo-400">{{ social }}</a>
          </li>
        </ul>

        <h3 class="text-lg font-semibold text-white mb-2">
          Newsletter <span class="text-indigo-400 cursor-pointer">Sign Up</span>
        </h3>
        <p class="text-gray-400 text-sm mb-3">
          Stay up to date with the latest movie releases, exclusive promotions,
          and special offers by subscribing to our newsletter.
        </p>
        <div class="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            class="px-3 py-2 w-full text-black rounded-md focus:outline-none"
          />
          <button
            class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <!-- Copyright + Liens Légaux -->
    <div
      class="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-center text-sm"
    >
      <p>Copyright © 2024 MovieMax. All rights reserved.</p>
      <div class="flex justify-center gap-4 mt-2">
        <a href="#" class="hover:text-indigo-400">Privacy Policy</a>
        <a href="#" class="hover:text-indigo-400">Terms & Conditions</a>
        <a href="#" class="hover:text-indigo-400">Cookie Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = ["Pricing Plan", "Promotion", "How It Works", "Blog", "FAQ"];
const collections = [
  "Binge Watch",
  "Top Trending",
  "Movies",
  "TV Series",
  "Reality Shows",
  "Docuseries",
];
const socialMedia = ["Instagram", "Twitter", "Facebook", "Youtube", "LinkedIn"];
</script>
