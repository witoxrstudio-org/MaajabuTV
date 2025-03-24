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
              <span data-v-8f1205ab="">Broadcasts</span>
            </h2>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <div class="bg-black pb-6">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <div v-for="movie in movie" :key="movie.id" class="relative group">
              <div
                class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  v-if="movie.image"
                  :src="movie.image"
                  :alt="movie.title"
                  class="w-full h-56 object-cover"
                />
                <div v-else class="w-full h-56 bg-gray-700"></div>

                <div class="p-3">
                  <h3 class="text-white text-sm md:text-base font-semibold">
                    {{ movie.title }} ({{ movie.year }})
                  </h3>
                  <p class="text-gray-400 text-xs md:text-sm">
                    {{ movie.genre }}
                  </p>
                </div>

                <div
                  class="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-500 opacity-0 group-hover:opacity-90 flex flex-col items-center justify-center transition-opacity text-center p-4"
                >
                  <h3 class="text-white text-sm md:text-lg font-semibold">
                    {{ movie.title }} ({{ movie.year }})
                  </h3>
                  <p class="text-gray-300 text-xs md:text-sm">
                    {{ movie.genre }}
                  </p>

                  <div class="mt-4 flex gap-3 justify-center sm:justify-start">
                    <!-- Bouton Lecture -->
                    <button
                      class="p-3 bg-gray-600 rounded-full text-white transition-all duration-300 hover:bg-yellow-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                        />
                      </svg>
                    </button>

                    <!-- Bouton Favoris -->
                    <button
                      class="p-3 bg-gray-600 rounded-full text-white transition-all duration-300 hover:bg-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const movie = [
  {
    id: 1,
    title: "Psaumes",
    year: 2019,
    genre: "Musical, Gospel",
    image: "/img/e1.png",
  },
  {
    id: 2,
    title: "Reponse",
    year: 2019,
    genre: "Musical, Gospel",
    image: "/img/e2.png",
  },
  {
    id: 3,
    title: "KDO",
    year: 2016,
    genre: "Musical, Gospel",
    image: "/img/e3.jpeg",
  },
  {
    id: 4,
    title: "Amour Inco.",
    year: 2024,
    genre: "Musical, Gospel",
    image: "/img/e4.jpg",
  },
  {
    id: 5,
    title: "Jésus",
    year: 2023,
    genre: "Musical, Gospel",
    image: "/img/e5.jpg",
  },
  {
    id: 6,
    title: "Wondefull",
    year: 2022,
    genre: "Musical, Gospel",
    image: "/img/e6.jpg",
  },
  {
    id: 7,
    title: "Historia",
    year: 2021,
    genre: "Musical, Gospel",
    image: "/img/e7.jpg",
  },
  {
    id: 8,
    title: "Sois mon Dieu",
    year: 2017,
    genre: "Musical, Gospel",
    image: "/img/e8.jpg",
  },
  {
    id: 9,
    title: "Emmanuel",
    year: 2020,
    genre: "Musical, Gospel",
    image: "/img/e9.jpg",
  },
  {
    id: 10,
    title: "Monde Electrifié",
    year: 2019,
    genre: "Musical, Gospel",
    image: "/img/e10.jpg",
  },
];
</script>
