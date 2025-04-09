<template>
  <div class="relative flex flex-col justify-between text-white">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="/img/petit.jpeg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="mj-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        eligendi quibusdam nostrum amet omnis tempore nemo, quasi optio qui
        quas. Earum assumenda omnis enim minima mollitia ex voluptate, at
        sit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        eligendi quibusdam nostrum amet omnis tempore nemo, quasi optio qui
        quas. Earum assumenda omnis enim minima mollitia ex voluptate, at
        sit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        elig
      </div>
    </div>

    <!-- Footer Blur Bar -->
    <div class="backdrop-blur bg-white/10 py-6 w-full z-10">
      <div
        class="mj-container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <p class="text-lg font-semibold text-white mb-4 md:mb-0">
          Abonnez-vous à notre newsletter pour les dernières mises à jour et
          offres.
        </p>
        <div class="flex items-center space-x-6 text-2xl">
          <NuxtLink to="#" aria-label="Facebook"
            ><i class="fab fa-facebook-f"></i
          ></NuxtLink>
          <NuxtLink to="#" aria-label="Instagram"
            ><i class="fab fa-instagram"></i
          ></NuxtLink>
          <NuxtLink to="#" aria-label="TikTok"
            ><i class="fab fa-tiktok"></i
          ></NuxtLink>

          <NuxtLink to="#" aria-label="YouTube"
            ><i class="fab fa-youtube"></i
          ></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
