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
        <div class="flex justify-between items-center py-4 md:px-0">
          <div class="w-1/3 border-t-2 border-white"></div>
          <div class="w-1/3 text-center hidden md:block"></div>
          <div class="w-1/3 border-t-2 border-white"></div>
        </div>
        <div class="flex items-center justify-between w-full mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-white relative group">
            <span class="text-blue-500">Abonnez-vous</span> à notre chaîne
          </h2>
          <NuxtLink
            to="/contact"
            class="text-white font-medium text-sm md:text-base relative group"
          >
            nous contacter
            <span
              class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </NuxtLink>
        </div>
        <div class="my-8">
          <p class="text-center text-white text-lg mb-4">
            Rejoignez la communauté Maajabu TV et ne manquez jamais nos
            dernières actualités ! En vous abonnant, vous recevrez des mises à
            jour exclusives sur nos programmes, des offres spéciales et des
            contenus inspirants directement dans votre boîte mail. Restez
            connecté avec nous et découvrez le meilleur de Maajabu TV.
          </p>

          <form
            name="email-form"
            class="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row"
          >
            <input
              type="email"
              class="mb-3 mr-6 block h-9 w-full bg-white px-6 py-7 text-sm text-[#333333] focus:border-[#3898ec]"
              placeholder="Entrez votre email"
              required=""
            />
            <input
              type="submit"
              value="Subscribe"
              class="inline-block w-full cursor-pointer bg-[#276ef1] px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] sm:w-28"
            />
          </form>
        </div>
      </div>
    </div>

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
            ><i class="fab fa-facebook-f hover:text-blue-400"></i
          ></NuxtLink>
          <NuxtLink to="#" class="group" aria-label="Instagram">
            <i
              class="fab fa-instagram text-white transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500"
            >
            </i
          ></NuxtLink>
          <NuxtLink to="#" class="group" aria-label="TikTok"
            ><i
              class="fab fa-tiktok text-white transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-white"
            ></i
          ></NuxtLink>

          <NuxtLink to="#" aria-label="YouTube"
            ><i class="fab fa-youtube hover:text-red-700"></i
          ></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
