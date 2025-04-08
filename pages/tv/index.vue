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
        <div v-if="live_streams_pending">Chargement en cours...</div>
        <div v-else-if="live_streams_error" class="text-red-500">
          Erreur : {{ live_streams_error.message }}
        </div>
        <div
          v-else
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
              <img
                :src="config.public.apiBase + '/assets/' + live.couverture"
                :alt="live.titre"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/40"
              >
                <img
                  src="/img/ply.png"
                  alt="Play icon"
                  class="w-16 h-16 opacity-80 group-hover:opacity-100 transition duration-300"
                />
              </div>
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
const { getItems } = useDirectusItems();
const config = useRuntimeConfig();

const fieldslive = ref(
  "id, titre, description, youtube_live_url, date_live, etiquette, couverture, slug"
);

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
</script>