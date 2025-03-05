<template>
  <!-- <section class="bg-black py-6 min-h-screen flex justify-center items-center">
    <div class="mj-container text-white text-center">
      <div class="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <img
          :src="movie.image"
          :alt="movie.title"
          class="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 class="text-3xl font-bold text-blue-500">{{ movie.title }}</h1>
        <p class="text-gray-400 text-lg">
          ({{ movie.year }}) - {{ movie.genre }}
        </p>
      </div>
    </div>
  </section> -->
  <div class="bg-gray-900 text-white min-h-screen">
    <!-- Section Vidéo -->
    <div
      class="relative h-96 flex items-center justify-center bg-gray-300 bg-cover bg-center"
      :style="{ backgroundImage: `url(${movie.image})` }"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <img
          src="/img/btn_play.png"
          alt="Bouton"
          class="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center"
        />
      </div>
      <div class="mj-container">
        <div class="absolute">
          <h1 class="text-4xl font-bold text-white">{{ movie.title }}</h1>
          <div class="mt-4">
            <button class="bg-blue-600 text-white px-4 py-2 rounded">
              Watch Now
            </button>
            <button
              class="ml-2 bg-gray-500 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed"
            >
              Add to Playlist
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Infos -->
    <div class="mj-container p-6">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Image de l'album (Carré) -->
        <div
          class="w-full md:w-[250px] h-[350px] bg-gray-800 rounded-lg overflow-hidden flex-shrink-0"
        >
          <img
            :src="movie.image"
            :alt="movie.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Infos du film -->
        <div class="flex-1">
          <!-- Titre -->
          <h2 class="text-3xl font-bold mb-4">{{ movie.title }}</h2>

          <!-- Détails -->
          <div class="space-y-2">
            <p><span class="font-semibold">Genre:</span> {{ movie.genre }}</p>
            <p class="flex items-center">
              <span class="font-semibold mr-2">Note:</span>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star-half-alt text-yellow-400"></i>
              <span class="ml-2 text-gray-300">(4.4/5)</span>
            </p>
            <p><span class="font-semibold">Maturity:</span> Maajabu Gospel</p>
            <p><span class="font-semibold">Durée:</span> 3 min</p>
            <p><span class="font-semibold">Année:</span> {{ movie.year }}</p>
          </div>

          <!-- Description -->
          <h3 class="font-semibold text-xl mt-4">Description</h3>
          <p class="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet eveniet expedita quidem esse incidunt deserunt accusamus nihil.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet eveniet expedita quidem esse incidunt deserunt accusamus nihil.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet eveniet expedita quidem esse incidunt deserunt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const movies = [
  {
    id: 1,
    title: "Plus q'un chant",
    year: 2017,
    genre: "Musical, Gospel",
    image: "/img/al1.jpg",
  },
  {
    id: 2,
    title: "Je te fais confiance",
    year: 2019,
    genre: "Musical, Gospel",
    image: "/img/al2.jpg",
  },
  {
    id: 3,
    title: "To tomboli Kombo",
    year: 2016,
    genre: "Musical, Gospel",
    image: "/img/al3.jpg",
  },
  {
    id: 4,
    title: "Benga ngai",
    year: 2022,
    genre: "Musical, Gospel",
    image: "/img/al4.jpg",
  },
  {
    id: 5,
    title: "Bikuke",
    year: 2021,
    genre: "Musical, Gospel",
    image: "/img/al5.jpg",
  },
  {
    id: 6,
    title: "Faveur Mukoko",
    year: 2022,
    genre: "Musical, Gospel",
    image: "/img/fol3.png",
  },
];

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");

const movie = computed(() => {
  return movies.find((m) => slugify(m.title) === route.params.slug);
});
</script>
