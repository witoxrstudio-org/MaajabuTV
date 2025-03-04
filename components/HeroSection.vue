<template>
  <section class="relative w-full h-screen">
    <!-- Image de fond -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/img/bg.jpg')"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"
    ></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
    >
      <h1 class="text-4xl md:text-6xl font-bold -mt-24">
        Now showing!<br />Let’s share dreams
      </h1>
      <p class="mt-2 text-lg">Available on Apple Soundcast and Spotify</p>

      <div class="mt-6 space-x-4">
        <button
          class="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700"
        >
          Stream Now
        </button>
        <button
          class="border border-white px-6 py-2 rounded-lg text-white font-semibold hover:bg-white hover:text-blue-900"
        >
          Stream Now
        </button>
      </div>
    </div>

    <div class="relative z-10 -mt-60 mb-4 md:px-16">
      <slot />
    </div>
  </section>
</template>
