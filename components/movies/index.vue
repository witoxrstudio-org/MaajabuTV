<template>
  <section class="bg-black py-6">
    <div class="mj-container text-white">
      <h2 class="text-2xl font-bold text-white">
        <span class="text-blue-500">Movies</span> Collections
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6 mt-6"
      >
        <NuxtLink
          v-for="movie in movies"
          :key="movie.id"
          :to="`/movies/${slugify(movie.title)}`"
          class="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer h-64"
        >
          <img
            :src="movie.image"
            :alt="movie.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
          >
            <h3 class="text-white font-semibold text-sm md:text-lg">
              {{ movie.title }} ({{ movie.year }})
            </h3>
            <p class="text-xs md:text-sm text-gray-400">{{ movie.genre }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</script>