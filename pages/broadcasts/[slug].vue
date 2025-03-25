<template>
  <div
    v-if="episode"
    class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"
  >
    <img
      :src="episode.emission_id?.image_pochettes"
      alt="Image de l'émission"
      class="w-full h-64 object-cover rounded-lg mb-4"
    />
    <h1 class="text-2xl font-bold mb-2">{{ episode.titre }}</h1>
    <h2 class="text-lg text-gray-600 mb-4">
      Émission : {{ episode.emission_id?.titre }}
    </h2>
    <p class="text-sm text-gray-600 mb-2">
      {{ formatDateTime(episode.date_diffusion) }} • {{ episode.duree }} mins
    </p>
    <p class="text-gray-700">{{ episode.description }}</p>
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

onMounted(() => {
  fetchEpisode();
});

const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fr-FR", optionsDate);
};
</script>
