<template>
  <div class="p-8 bg-gray-900 min-h-screen text-white">
    <button
      @click="$router.push('/tv')"
      class="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
    >
      ⬅ Retour
    </button>
    <div class="bg-gray-800 p-6 rounded-lg">
      <h1 class="text-3xl font-bold">{{ video.title }}</h1>
      <div
        class="relative w-full h-60 bg-gray-600 flex items-center justify-center rounded-lg mt-4"
      >
        <span class="text-4xl">▶️</span>
      </div>
      <p class="text-gray-400 mt-4">{{ video.description }}</p>
      <p class="text-gray-500 mt-2">Duration: {{ video.duration }}</p>
    </div>

    <h2 class="text-2xl font-bold mt-6">Autres épisodes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div
        v-for="v in videos"
        :key="v.slug"
        @click="$router.push(`/tv/${v.slug}`)"
        class="cursor-pointer p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
      >
        <div
          class="relative w-full h-40 bg-gray-600 flex items-center justify-center rounded-lg"
        >
          <span class="text-4xl">▶️</span>
        </div>
        <div class="mt-4">
          <span class="text-sm bg-blue-600 text-white px-2 py-1 rounded"
            >Episode {{ v.episode }}</span
          >
          <h2 class="text-lg font-semibold mt-2">{{ v.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
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
const video = videos.find((v) => v.slug === route.params.slug) || {};
</script>
