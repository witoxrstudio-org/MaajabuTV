<template>
  <div>
    <h1>{{ episode.titre }}</h1>
    <p>{{ episode.description }}</p>
    <iframe
      :src="'https://www.youtube.com/embed/' + episode.youtube_video_id"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <p>Durée : {{ episode.duree }}</p>
    <p>Date de diffusion : {{ episode.date_diffusion }}</p>
  </div>
</template>

<script setup>
import { useBroadcastStore } from "~/stores/broadcasts";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const episode = ref(null);

onMounted(async () => {
  const response = await fetch(
    `https://maajabu.space/items/episodes/${route.params.slug}`
  );
  const data = await response.json();
  episode.value = data.data;
});
</script>
