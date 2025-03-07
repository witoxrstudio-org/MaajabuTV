<template>
  <div class="relative w-full bg-black">
    <!-- Section avec image de fond -->
    <section
      class="relative w-full h-[300px] bg-cover bg-center flex items-center md:h-[300px] sm:h-[200px]"
      style="background-image: url('/img/luk.jpg')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
      ></div>
      <div class="relative z-10 ml-6 text-white mj-container mt-28">
        <h1 class="text-4xl font-bold sm:text-3xl">
          Notre télévision en direct est diffusée sur Plex
        </h1>
        <p class="mt-2 text-gray-300 sm:text-sm text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="bg-black text-white py-8">
      <div class="mj-container bg-black px-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate">
            <h2
              class="flex items-center justify-start text-xl font-semibold text-bleu sm:text-2xl"
            >
              <span data-v-8f1205ab="">TV</span>
            </h2>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <!-- debut -->
        <h1 class="text-3xl font-bold mb-6">Episodes</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="video in videos"
            :key="video.slug"
            @click="$router.push(`/tv/${video.slug}`)"
            class="cursor-pointer p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <div
              class="relative w-full h-40 bg-gray-600 flex items-center justify-center rounded-lg"
            >
              <span class="text-4xl">▶️</span>
            </div>
            <div class="mt-4">
              <span class="text-sm bg-blue-600 text-white px-2 py-1 rounded"
                >Episode {{ video.episode }}</span
              >
              <h2 class="text-lg font-semibold mt-2">{{ video.title }}</h2>
              <p class="text-gray-400 mt-1">{{ video.description }}</p>
              <p class="text-gray-500 mt-2">Duration: {{ video.duration }}</p>
            </div>
          </div>
        </div>
        <!-- fin -->
      </div>
    </section>
  </div>
</template>
<script setup>
const videos = [
  {
    episode: 1,
    title: "I Know What You Did Last Summer",
    slug: "i-know-what-you-did-last-summer",
    description: "As high schoolers...",
    duration: "60m",
  },
  {
    episode: 2,
    title: "1792 Days of Summer",
    slug: "1792-days-of-summer",
    description: "Yunah and Sung reunite...",
    duration: "59m",
  },
  {
    episode: 3,
    title: "What I Hate About You",
    slug: "what-i-hate-about-you",
    description: "Eager to film...",
    duration: "59m",
  },
  // Ajoutez les autres vidéos ici...
];
</script>