<template>
  <div v-if="episode" class="relative w-full bg-black">
    <!-- Section avec image de fond -->
    <section
      class="relative w-full h-[300px] bg-cover bg-center flex items-center md:h-[300px] sm:h-[200px]"
      style="background-image: url('/img/luk.jpg')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
      ></div>
      <div
        class="relative z-10 text-white mj-container mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8"
      >
        <!-- Titre -->
        <h1
          class="text-3xl sm:text-4xl font-bold flex flex-wrap items-center gap-2"
        >
          <span class="text-blue-400">{{ episode.emission_id?.titre }}</span>
          <span class="text-white">{{ episode.titre }}</span>
        </h1>

        <!-- Description -->
        <p class="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
          {{ episode.description }}
        </p>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="bg-black text-white py-8">
      <div class="mj-container bg-black px-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap">
            <NuxtLink
              to="/broadcasts"
              class="relative flex items-center justify-start text-xl font-semibold text-bleu sm:text-2xl after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bleu after:transition-all after:duration-300 hover:after:w-full"
            >
              <span>Retour</span>
            </NuxtLink>
          </div>

          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-start gap-6">
          <!-- Vidéo ou Image de l'émission -->
          <div class="w-full md:w-2/2">
            <div v-if="episode.youtube_video_id" class="relative w-full">
              <div class="h-0 pb-[56.25%] relative">
                <!-- Ratio 16:9 -->
                <div
                  class="absolute top-0 left-0 w-full h-full plyr__video-embed"
                  ref="player"
                  data-plyr-provider="youtube"
                  :data-plyr-embed-id="episode.youtube_video_id"
                ></div>
                <div class="flex items-center text-sm text-gray-600 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>

                  <span
                    >{{ formatDateTime(episode.date_diffusion) }} •
                    {{ episode.duree }} mins</span
                  >
                </div>
              </div>
            </div>
            <div v-else>
              <img
                :src="episode.emission_id?.image_pochettes"
                alt="Image de l'émission"
                class="w-full h-64 md:h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <subscription />
    </section>
    <section class="bg-black">
      <laster />
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRuntimeConfig } from "#app";

const route = useRoute();
const episode = ref(null);
const loading = ref(true);
const error = ref(null);
const player = ref(null);

const fetchEpisode = async () => {
  loading.value = true;
  try {
    const config = useRuntimeConfig();
    const directusUrl = config.public.directus.url;
    const response = await fetch(
      `${directusUrl}/items/episodes?filter[slug][_eq]=${route.params.slug}&fields=*,emission_id.*`
    );
    if (!response.ok)
      throw new Error("Erreur lors de la récupération de l'épisode.");
    const data = await response.json();
    episode.value = data.data[0] || null;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchEpisode();

  if (player.value && episode.value?.youtube_video_id) {
    const Plyr = (await import("plyr")).default;
    new Plyr(player.value, { youtube: { noCookie: true } });
  }
});

const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fr-FR", optionsDate);
};
</script>

