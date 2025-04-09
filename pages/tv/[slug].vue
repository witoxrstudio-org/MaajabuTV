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
      <div
        class="bg-gray-900 rounded-lg flex flex-col md:flex-row overflow-hidden shadow-lg"
      >
        <!-- Section de la vidéo -->
        <div
          class="relative w-full md:w-2/3 h-60 md:h-auto flex items-center justify-center"
        >
          <div v-if="live.youtube_live_url" class="w-full h-full">
            <div class="h-full">
              <div
                class="plyr__video-embed w-full h-full"
                id="player"
                ref="player"
                data-plyr-provider="youtube"
                :data-plyr-embed-id="live.youtube_live_url"
              ></div>
            </div>
          </div>
        </div>

        <!-- Section des détails -->
        <div
          class="p-6 w-full md:w-1/3 rounded-2xl shadow-xl space-y-6 text-white"
        >
          <h1 class="text-3xl font-bold sm:text-2xl text-center">
            {{ live.titre }}
          </h1>
          <!-- Date -->
          <div class="flex items-center space-x-3 text-sm text-gray-300">
            <i class="fas fa-calendar-alt text-blue-400"></i>
            <p>{{ live.date_live }}</p>
          </div>

          <!-- Description -->
          <div class="flex items-start space-x-3 text-sm text-gray-300">
            <i class="fas fa-info-circle text-green-400 mt-0.5"></i>
            <p>{{ live.description }}</p>
          </div>

          <!-- Etiquette -->
          <div v-if="live.etiquette" class="flex flex-wrap gap-2">
            <span
              class="inline-flex items-center bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium shadow hover:bg-blue-300 transition"
            >
              <i class="fas fa-tag mr-1 text-xs"></i> {{ live.etiquette }}
            </span>
          </div>

          <!-- Bouton YouTube -->
          <div v-if="live.youtube_live_url">
            <a
              :href="live.youtube_live_url"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition shadow-lg hover:scale-105"
            >
              <i class="fab fa-youtube text-lg"></i> Regarder en direct
            </a>
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

const slug = route.params.slug;

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

// Intégration de Plyr (Import dynamique)
const player = ref(null);

onMounted(async () => {
  if (player.value && live.value?.youtube_live_url) {
    const Plyr = (await import("plyr")).default;
    new Plyr(player.value, {
      youtube: { noCookie: true },
    });
  }
});
</script>



