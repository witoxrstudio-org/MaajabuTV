<template>
  <section class="bg-black py-6 min-h-screen flex justify-center items-center">
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
  </section>
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
