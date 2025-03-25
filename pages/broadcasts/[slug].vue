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
      <div class="relative z-10 ml-6 text-white mj-container mt-28">
        <h1 class="text-4xl font-bold sm:text-3xl">
          {{ episode.emission_id?.titre }}
        </h1>
        <p class="mt-2 text-gray-300 sm:text-sm text-xs">
          {{ episode.titre }}
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
          <div class="w-full md:w-1/2">
            <div v-if="episode.youtube_video_id" class="relative w-full">
              <div class="h-0 pb-[56.25%] relative">
                <!-- Ratio 16:9 -->
                <div
                  class="absolute top-0 left-0 w-full h-full plyr__video-embed"
                  ref="player"
                  data-plyr-provider="youtube"
                  :data-plyr-embed-id="episode.youtube_video_id"
                ></div>
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

          <!-- Détails de l'épisode -->
          <div class="w-full md:w-1/2 space-y-4">
            <h1 class="text-2xl font-bold">{{ episode.titre }}</h1>
            <h2 class="text-lg text-gray-600">
              Émission :
              <span class="font-semibold">{{
                episode.emission_id?.titre
              }}</span>
            </h2>
            <p class="text-sm text-gray-600">
              {{ formatDateTime(episode.date_diffusion) }} •
              {{ episode.duree }} mins
            </p>
            <p class="text-gray-700">{{ episode.description }}</p>
          </div>
        </div>

        <!-- Message de chargement -->
      </div>
    </section>
  </div>
  <div v-else class="text-center text-gray-500">Chargement...</div>
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

