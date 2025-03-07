<template>
  <div class="relative w-full bg-black">
    <section
      class="relative w-full h-[300px] bg-cover bg-center flex items-center md:h-[300px] sm:h-[200px]"
      style="background-image: url('/img/luk.jpg')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
      ></div>
      <div class="relative z-10 ml-6 text-white mj-container mt-28">
        <h1 class="text-4xl font-bold sm:text-3xl">
          {{ video.title }}
        </h1>
        <p class="mt-2 text-gray-300 sm:text-sm text-xs">Maajabu TV</p>
      </div>
    </section>
    <div class="mj-container bg-black text-white">
      <div class="my-8 flex items-center justify-between space-x-4">
        <div class="whitespace-nowrap aos-init aos-animate">
          <nuxt-link to="/tv" class="text-bleu">
            <h2
              class="relative flex items-center justify-start text-xl font-semibold text-bleu sm:text-2xl group"
            >
              <span>Retour</span>
              <span
                class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
              ></span>
            </h2>
          </nuxt-link>
        </div>
        <div class="relative mt-1 h-4 w-full">
          <div
            data-aos-anchor-placement="top-bottom"
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
      </div>

      <div class="bg-gray-800 rounded-lg flex flex-col md:flex-row">
        <!-- Section de la vidéo -->
        <div
          class="relative w-full md:w-2/3 h-60 bg-gray-600 flex items-center justify-center rounded-lg mt-4 md:mt-0 md:mr-4"
        >
          <img
            :src="video.img"
            alt="Video Thumbnail"
            class="w-full h-full object-cover rounded-l-lg"
          />
          <!-- Image du bouton play -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg transition-opacity hover:bg-opacity-50"
          >
            <img
              src="/img/btn_play.png"
              alt="Play"
              class="w-16 h-16 transition-transform transform hover:scale-110"
            />
          </div>
        </div>

        <!-- Section des détails -->
        <div class="mt-4 md:mt-0 md:w-1/3 space-y-3 p-6">
          <h1 class="text-3xl font-bold text-white">{{ video.title }}</h1>

          <div class="flex items-center text-gray-400">
            <i class="fas fa-film mr-2"></i>
            <p>{{ video.genre }}</p>
          </div>

          <div class="flex items-center text-gray-400">
            <i class="fas fa-calendar-alt mr-2"></i>
            <p>{{ video.year }}</p>
          </div>

          <div class="flex items-center text-gray-500">
            <i class="fas fa-clock mr-2"></i>
            <p>Durée : 4 min</p>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-black text-white py-8">
      <div class="mj-container bg-black px-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate">
            <h2
              class="flex items-center justify-start text-xl font-semibold text-bleu sm:text-2xl"
            >
              <span data-v-8f1205ab="">Les Top du TV</span>
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

        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <div
            v-for="video in videos"
            :key="video.slug"
            @click="$router.push(`/tv/${video.slug}`)"
            class="group bg-gray-900 cursor-pointer rounded-lg relative"
          >
            <div
              class="relative w-full h-48 bg-gray-700 rounded-t-md overflow-hidden flex items-center justify-center"
            >
              <!-- Image de fond -->
              <img
                :src="video.img"
                alt="Description de l'image"
                class="w-full h-full object-cover"
              />

              <!-- Icône Play centrée -->
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 text-white opacity-80 group-hover:text-yellow-500 transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <!-- Dégradé noir en bas de l'image -->
              <div
                class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent"
              ></div>
            </div>

            <div class="my-1 p-2">
              <p class="text-xs text-gray-400">{{ video.genre }}</p>
              <p
                class="text-white font-bold group-hover:underline transition duration-300"
              >
                {{ video.title }}
                <span class="text-gray-400">({{ video.year }})</span>
              </p>
              <div
                class="absolute bottom-2 right-2 transform group-hover:rotate-90 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 text-white group-hover:text-yellow-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- fin -->
        <div class="my-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate"></div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
      </div>
    </section>
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
    genre: "Gospel Music",
    img: "/img/v1.jpg",
    year: 2023,
  },
  {
    episode: 2,
    title: "1792 Days  in the last hood",
    slug: "1792-days-of-summer",
    genre: "Gospel Music",

    img: "/img/v2.jpg",
    year: 2024,
  },
  {
    episode: 3,
    title: "What I Hate About You",
    slug: "what-i-hate-about-you",
    genre: "Gospel Music",
    img: "/img/v3.jpg",
    year: 2022,
  },
  {
    episode: 4,
    title: "2024 Maajabu Talents",
    slug: "2024-taajabu-talents",
    genre: "Gospel Music",
    img: "/img/v4.jpg",
    year: 2024,
  },
  {
    episode: 5,
    title: "1792 Days of ummers",
    slug: "1792-days-of-summers",
    genre: "Gospel Music",
    img: "/img/v5.jpg",
    year: 2024,
  },
  {
    episode: 6,
    title: "1792 Days of mering",
    slug: "1792-days-of-summering",
    genre: "Gospel Music",
    img: "/img/v6.jpg",
    year: 2024,
  },
];
const video = videos.find((v) => v.slug === route.params.slug) || {};
</script>
