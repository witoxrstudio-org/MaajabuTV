<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Lives en cours</h2>

    <div v-if="live_streams_pending">Chargement en cours...</div>
    <div v-else-if="live_streams_error" class="text-red-500">
      Erreur : {{ live_streams_error.message }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="live in live_streams"
        :key="live.id"
        :to="`/tv/${live.slug}`"
        class="block hover:opacity-90 transition"
      >
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            :src="config.public.apiBase + '/assets/' + live.couverture"
            :alt="live.titre"
            class="w-full h-40 object-cover rounded-lg"
          />
          <h3 class="text-lg font-semibold mt-2">{{ live.titre }}</h3>
          <p class="text-gray-600">{{ live.description }}</p>
          <p class="text-sm text-gray-500 mt-1">📅 {{ live.date_live }}</p>
          <span
            v-if="live.etiquette"
            class="inline-block bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded"
          >
            {{ live.etiquette }}
          </span>
        </div>
      </NuxtLink>
    </div>
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
