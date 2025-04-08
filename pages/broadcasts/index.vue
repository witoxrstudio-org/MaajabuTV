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
              <span data-v-8f1205ab="">Broadcasts</span>
            </h2>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <div class="container mx-auto py-8">
          <!-- Barre de sélection + image et titre de l’émission -->
          <div
            class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 p-4"
          >
            <!-- Sélecteur d'émission -->
            <div class="w-full md:w-1/2">
              <select
                v-model="filtreEmission"
                @change="changerFiltre(filtreEmission)"
                class="w-full p-3 border border-gray-600 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="All">Toutes les émissions</option>
                <option
                  v-for="emission in emissions"
                  :key="emission.id"
                  :value="emission.id"
                >
                  {{ emission.titre }}
                </option>
              </select>
            </div>

            <!-- Détails de l'émission sélectionnée -->
            <div
              v-if="emissionSelectionnee"
              class="w-full md:w-1/2 flex items-center gap-4 bg-white p-4 rounded-lg shadow"
            >
              <img
                :src="emissionSelectionnee.image_pochettes"
                alt="Image de l'émission"
                class="w-24 h-24 object-cover rounded-lg shadow-md"
              />
              <div>
                <h2 class="text-lg font-semibold text-gray-900">
                  {{ emissionSelectionnee.titre }}
                </h2>
                <p class="text-sm text-gray-600 line-clamp-3">
                  {{ emissionSelectionnee.description }}
                </p>
              </div>
            </div>
          </div>
          <h2
            v-if="emissionSelectionnee"
            class="text-2xl font-bold mb-4 text-center"
          >
            Émission : {{ emissionSelectionnee.titre }}
          </h2>
          <!-- Grille des épisodes -->
          <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div
              v-for="episode in episodesAffiches"
              :key="episode.id"
              class="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300 group relative"
            >
              <NuxtLink :to="`/broadcasts/${episode.slug}`" class="block">
                <img
                  :src="episode.emission_id?.image_pochettes"
                  alt="Image de l'émission"
                  class="w-full h-56 object-cover"
                />
                <div class="p-4">
                  <h2
                    class="text-lg md:text-xl font-semibold text-gray-900 mb-1 line-clamp-2"
                  >
                    {{ episode.titre }}
                  </h2>
                  <p class="text-sm text-gray-500 mb-2">
                    {{ formatDateTime(episode.date_diffusion) }} •
                    {{ episode.duree }} mins
                  </p>
                  <p class="text-gray-700 text-sm line-clamp-3">
                    {{ episode.description }}
                  </p>
                </div>
              </NuxtLink>
              <!-- Bouton Voir plus -->
              <div class="absolute bottom-2 right-2 group">
                <div
                  class="relative flex items-center cursor-pointer text-sm text-blue-500 group-hover:text-blue-700"
                >
                  <span class="relative">
                    Voir plus
                    <span
                      class="absolute left-0 bottom-0 h-0.8 bg-blue-500 w-0 group-hover:w-full transition-all duration-300"
                    ></span>
                  </span>
                  <i
                    class="fas fa-arrow-right px-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-8 space-x-2">
            <button
              v-for="n in nombreTotalPages"
              :key="n"
              @click="pageActuelle = n"
              class="px-4 py-2 border transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
              :class="{
                'bg-blue-600 text-white border-blue-600': pageActuelle === n,
                'bg-white text-gray-700 hover:bg-gray-100 border-gray-300':
                  pageActuelle !== n,
              }"
            >
              {{ n }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRuntimeConfig } from "#app";

const episodes = ref([]);
const emissions = ref([]);
const filtreEmission = ref("All");
const loading = ref(true);
const error = ref(null);
const pageActuelle = ref(1);
const itemsParPage = 6;

const fetchData = async () => {
  loading.value = true;
  try {
    const config = useRuntimeConfig();
    const directusUrl = config.public.directus.url;

    const episodesResponse = await fetch(
      `${directusUrl}/items/episodes?fields=*,emission_id.*`
    );
    if (!episodesResponse.ok)
      throw new Error("Erreur lors de la récupération des épisodes.");
    const episodesData = await episodesResponse.json();

    episodes.value = episodesData.data.map((episode) => ({
      ...episode,
      slug: episode.slug || episode.titre.toLowerCase().replace(/\s+/g, "-"),
    }));

    const emissionsResponse = await fetch(`${directusUrl}/items/emissions`);
    if (!emissionsResponse.ok)
      throw new Error("Erreur lors de la récupération des émissions.");
    const emissionsData = await emissionsResponse.json();
    emissions.value = [
      "All",
      ...emissionsData.data.map((e) => ({ id: e.id, titre: e.titre })),
    ];
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
const emissionSelectionnee = computed(() => {
  if (filtreEmission.value === "All") return null;
  return emissions.value.find((e) => e.id === filtreEmission.value);
});
onMounted(() => {
  fetchData();
});

const episodesFiltres = computed(() => {
  const data =
    filtreEmission.value === "All"
      ? episodes.value
      : episodes.value.filter(
          (episode) => episode.emission_id?.id === filtreEmission.value
        );
  return data.sort(
    (a, b) => new Date(b.date_diffusion) - new Date(a.date_diffusion)
  );
});
// Pagination
const nombreTotalPages = computed(() =>
  Math.ceil(episodesFiltres.value.length / itemsParPage)
);
const episodesAffiches = computed(() => {
  const debut = (pageActuelle.value - 1) * itemsParPage;
  return episodesFiltres.value.slice(debut, debut + itemsParPage);
});
const changerFiltre = (emissionId) => {
  filtreEmission.value = emissionId;
  pageActuelle.value = 1;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("filtreEmission", emissionId);
  }
};

const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fr-FR", optionsDate);
};
</script>
