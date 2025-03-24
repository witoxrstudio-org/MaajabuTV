<template>
  <div class="container mx-auto py-8">
    <div v-if="loading" class="text-center">{{ t("Chargement...") }}</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="episode" class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">{{ episode.titre }}</h1>
      <p class="text-gray-700 mb-2">{{ episode.description }}</p>
      <p class="text-sm text-gray-600 mb-4">
        {{ formatDateTime(episode.date_diffusion) }} • {{ episode.duree }} mins
      </p>

      <!-- Emission Info -->
      <div class="flex items-center gap-4 mb-6">
        <img
          :src="episode.emission_id?.image_pochettes"
          alt="Image de l'émission"
          class="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h2 class="text-xl font-semibold">
            {{ episode.emission_id?.titre }}
          </h2>
          <p class="text-sm text-gray-600">
            {{ episode.emission_id?.description }}
          </p>
          <p class="text-xs italic text-gray-500">
            Animé par {{ episode.emission_id?.animateur }}
          </p>
        </div>
      </div>

      <!-- Video YouTube -->
      <div class="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          :src="`https://www.youtube.com/embed/${youtubeVideoId}`"
          frameborder="0"
          allowfullscreen
          class="w-full h-full"
        ></iframe>
      </div>

      <!-- Retour -->
      <button
        @click="navigateTo('/broadcast')"
        class="text-blue-600 hover:underline"
      >
        ← Retour aux épisodes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRuntimeConfig, navigateTo } from "#app";
const { t } = useI18n();
const route = useRoute();

const episode = ref(null);
const loading = ref(true);
const error = ref(null);

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
    episode.value = data.data[0];
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchEpisode();
});

const youtubeVideoId = computed(() => {
  if (!episode.value) return "";
  const url = episode.value.youtube_video_url;
  return url?.split("v=")[1] || "";
});

const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", optionsDate);
  return `${formattedDate}`;
};
</script>
