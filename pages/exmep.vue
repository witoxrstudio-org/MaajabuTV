<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="emissions_pending" class="text-center">
      Chargement des émissions...
    </div>
    <div v-if="emissions_error" class="text-red-500 text-center">
      Erreur de chargement des émissions.
    </div>

    <div
      v-if="emissions"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="emission in emissions"
        :key="emission.id"
        class="bg-white p-4 rounded-lg shadow-md"
      >
        <img
          :src="config.public.apiBase + '/assets/' + emission.image_pochette"
          alt="Image de l'émission"
          class="w-full h-48 object-cover rounded-lg"
        />
        <h3 class="text-xl font-semibold mt-4">{{ emission.titre }}</h3>
        <p class="text-gray-600 mt-2">{{ emission.description }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
const { getItems } = useDirectusItems();
const config = useRuntimeConfig();

const fieldsEmissions = ref("id, titre, description, image_pochette");

const {
  data: emissions,
  pending: emissions_pending,
  error: emissions_error,
} = await useAsyncData("emissions", () =>
  getItems({
    collection: "emissions", // Changer ici de live_streams à emissions
    params: { fields: fieldsEmissions.value, limit: 6 },
  })
);
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

