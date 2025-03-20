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
    <img :src="config.public.apiBase + '/assets/' + couverture" alt="" />
  </div>
</template>
<script setup>
const { getItems, getItemById } = useDirectusItems();
const config = useRuntimeConfig();
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

const fieldslive = ref(
  "titre, description, youtube_live_url, date_live, etiquette, couverture"
);
const filter = {
  slug: route.params.slug,
  status: { _eq: "published" },
};
const [
  {
    data: live_streams,
    pending: live_streams_pending,
    error: live_streams_error,
    refresh: live_streams_refresh,
  },
] = await Promise.all([
  useAsyncData("live_streams", () =>
    getItems({
      collection: "live_streams",
      params: { fields: fieldslive.value, limit: 6 },
    })
  ),
]);

console.log(config.public.apiBase);
</script>