<template>
  <div v-if="live_pending">Chargement en cours...</div>
  <div v-else-if="live_error" class="text-red-500">
    Erreur : {{ live_error.message }}
  </div>
  <div v-else class="relative w-full bg-black">
    <section
      class="relative w-full h-[300px] bg-cover bg-center flex items-center md:h-[300px] sm:h-[200px]"
      style="background-image: url('/img/luk.jpg')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
      ></div>
      <div class="relative z-10 ml-6 text-white mj-container mt-28">
        <h1 class="text-4xl font-bold sm:text-3xl">
          {{ live.titre }}
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
            :src="config.public.apiBase + '/assets/' + live.couverture"
            :alt="live.titre"
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
          <h1 class="text-3xl font-bold text-white">{{ live.titre }}</h1>

          <div class="flex items-center text-gray-400">
            <i class="fas fa-film mr-2"></i>
            <p>{{ live.date_live }}</p>
          </div>

          <div class="flex items-center text-gray-400">
            <i class="fas fa-calendar-alt mr-2"></i>
            <p>{{ live.description }}</p>
          </div>

          <div class="flex items-center text-gray-500">
            <i class="fas fa-clock mr-2"></i>
            <p
              v-if="live.etiquette"
              class="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded mb-4"
            >
              {{ live.etiquette }}
            </p>
            <div v-if="live.youtube_live_url" class="mt-4">
              <a
                :href="live.youtube_live_url"
                target="_blank"
                class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Regarder en direct sur YouTube
              </a>
            </div>
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
          <NuxtLink
            v-for="live in live_streams"
            :key="live.id"
            :to="`/tv/${live.slug}`"
            class="group bg-gray-900 cursor-pointer rounded-lg relative"
          >
            <div
              class="relative w-full h-48 bg-gray-700 rounded-t-md overflow-hidden flex items-center justify-center"
            >
              <!-- Image de fond -->
              <img
                :src="config.public.apiBase + '/assets/' + live.couverture"
                :alt="live.titre"
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
              <p class="text-xs text-gray-400">genre</p>
              <p
                class="text-white font-bold group-hover:underline transition duration-300"
              >
                {{ live.titre }}
                <span class="text-gray-400">({{ live.date_live }})</span>
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
          </NuxtLink>
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
const { getItemById, getItems } = useDirectusItems();
const config = useRuntimeConfig();
const route = useRoute();

// On récupère le slug depuis l'URL
const slug = route.params.slug;

// Champs à récupérer depuis l'API
const fieldslive = ref(
  "id, titre, description, youtube_live_url, date_live, etiquette, couverture, slug"
);

// Récupération de la liste des 6 derniers lives
const {
  data: live_streams,
  pending: live_streams_pending,
  error: live_streams_error,
} = await useAsyncData("live_streams", () =>
  getItems({
    collection: "live_streams",
    params: { fields: fieldslive.value, limit: 6 },
  })
);

// Récupération d'un live spécifique via le slug
const {
  data: live,
  pending: live_pending,
  error: live_error,
} = await useAsyncData(`live_${slug}`, () =>
  getItems({
    collection: "live_streams",
    params: {
      fields: fieldslive.value,
      filter: {
        slug: { _eq: slug },
        status: { _eq: "published" },
      },
      limit: 1,
    },
  }).then((res) => res[0])
);
</script>

