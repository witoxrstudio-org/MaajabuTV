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
    <section class="bg-black text-white py-7">
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
        <div class="container mx-auto py-4">
          <h2
            v-if="emissionSelectionnee"
            class="text-4xl font-bold mb-8 text-center"
          >
            Émission : {{ emissionSelectionnee.titre }}
          </h2>

          <div
            class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6"
          >
            <!-- Sélecteur d'émission -->
            <div class="w-full relative">
              <select
                v-model="filtreEmission"
                @change="changerFiltre(filtreEmission)"
                class="w-full appearance-none px-4 py-3 pr-12 border border-gray-300 text-white bg-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              <!-- Icône de recherche -->
              <div
                class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white"
              >
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
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div v-if="loading" class="loader"></div>
          <!-- Grille des épisodes -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="episode in episodesAffiches"
              :key="episode.id"
              class="bg-white shadow-md hover:shadow-lg transition duration-300 group relative overflow-hidden"
            >
              <!-- NuxtLink avec effet sur hover -->
              <NuxtLink
                :to="`/broadcasts/${episode.slug}`"
                class="block group-hover:relative group-hover:opacity-90"
              >
                <img
                  :src="`https://maajabu.space/assets/${episode.emission_id?.image_pochette}`"
                  alt="Image de l'émission"
                  class="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
                />
                <div class="p-4">
                  <h2
                    class="text-lg md:text-xl font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600"
                  >
                    {{ episode.titre }}
                  </h2>
                  <hr class="p-2" />
                  <div
                    class="flex flex-wrap items-center justify-start space-x-4 mb-4"
                  >
                    <!-- Date -->
                    <p class="text-sm text-gray-500 flex items-center">
                      <i class="fas fa-calendar-alt mr-2 text-gray-400"></i>
                      {{ formatDateTime(episode.date_diffusion) }}
                    </p>

                    <!-- Durée -->
                    <p class="text-sm text-gray-500 flex items-center">
                      <i class="fas fa-clock mr-2 text-gray-400"></i>
                      {{ episode.duree }} mins
                    </p>
                  </div>
                </div>
              </NuxtLink>

              <div
                class="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div
                  class="absolute bottom-4 left-4 right-4 flex justify-center"
                >
                  <NuxtLink
                    :to="`/broadcasts/${episode.slug}`"
                    class="text-white font-semibold bg-transparent px-4 py-2 rounded-lg border border-yellow-200 transform scale-0 group-hover:scale-100 transition-all duration-300"
                  >
                    Voir plus
                  </NuxtLink>
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
              class="px-4 py-2 border transition duration-300 font-medium focus:outline-none focus:ring-2"
              :class="{
                'bg-black text-white border-white': pageActuelle === n,
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
    <section>
      <subscription />
    </section>
    <section class="bg-black">
      <laster />
    </section>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRuntimeConfig, useRoute } from "#app";

const route = useRoute();

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

onMounted(async () => {
  await fetchData();

  const emissionIdFromQuery = route.query.emissionId;
  if (emissionIdFromQuery) {
    filtreEmission.value = emissionIdFromQuery;
    changerFiltre(emissionIdFromQuery);
  }
});

const emissionSelectionnee = computed(() => {
  if (filtreEmission.value === "All") return null;
  return emissions.value.find((e) => e.id === filtreEmission.value);
});

const changerFiltre = (emissionId) => {
  filtreEmission.value = emissionId;
  pageActuelle.value = 1;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("filtreEmission", emissionId);
  }
};

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

const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fr-FR", optionsDate);
};
</script>


