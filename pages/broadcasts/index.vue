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
          <div class="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div class="w-full md:w-1/2">
              <label class="block mb-2 font-semibold">
                Choisir une émission
              </label>
              <select
                v-model="filtreEmission"
                @change="changerFiltre(filtreEmission)"
                class="p-2 border rounded w-full text-black"
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
            <div
              v-if="emissionSelectionnee"
              class="w-full md:w-1/2 flex items-center gap-4"
            >
              <img
                :src="emissionSelectionnee.image_pochettes"
                alt="Image de l'émission"
                class="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h2 class="text-lg font-bold">
                  {{ emissionSelectionnee.titre }}
                </h2>
                <p class="text-sm text-gray-600">
                  {{ emissionSelectionnee.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Grille des épisodes -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="episode in episodesAffiches"
              :key="episode.id"
              class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <!-- :src="episode.emission_id?.image_pochettes" -->
              <img
                :src="episode.emission_id?.image_pochettes"
                alt="Image de l'émission"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h2 class="text-xl font-bold mb-2">{{ episode.titre }}</h2>
                <p class="text-sm text-gray-600 mb-2">
                  {{ formatDateTime(episode.date_diffusion) }} •
                  {{ episode.duree }} mins
                </p>
                <p class="text-gray-700 mb-4">{{ episode.description }}</p>
                <button
                  @click="afficherDetails(episode.slug)"
                  class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Voir détails
                </button>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-8 space-x-2">
            <button
              v-for="n in nombreTotalPages"
              :key="n"
              @click="pageActuelle = n"
              :class="[
                'px-4 py-2 border rounded',
                {
                  'bg-blue-600 text-white': pageActuelle === n,
                  'bg-white text-black': pageActuelle !== n,
                },
              ]"
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
import { useRuntimeConfig, navigateTo } from "#app";
const { t, locale } = useI18n();

// Déclaration des variables réactives
const episodes = ref([]);
const emissions = ref([]);
const filtreEmission = ref("All");
const loading = ref(true);
const error = ref(null);
const pageActuelle = ref(1);
const itemsParPage = 6;

// Récupération des données depuis Directus
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

    // Vérification et génération du slug si absent
    episodes.value = episodesData.data.map((episode) => ({
      ...episode,
      slug: episode.slug || episode.titre.toLowerCase().replace(/\s+/g, "-"),
    }));

    console.log("Épisodes récupérés :", episodes.value);

    const emissionsResponse = await fetch(`${directusUrl}/items/emissions`);
    if (!emissionsResponse.ok)
      throw new Error("Erreur lors de la récupération des émissions.");
    const emissionsData = await emissionsResponse.json();
    emissions.value = [
      "All",
      ...emissionsData.data.map((e) => ({
        id: e.id,
        titre: e.titre,
      })),
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
// Charger les données
onMounted(() => {
  fetchData();
});

// Filtrage basé sur l'émission
const episodesFiltres = computed(() => {
  const data =
    filtreEmission.value === "All"
      ? episodes.value
      : episodes.value.filter(
          (episode) => episode.emission_id?.id === filtreEmission.value
        );

  // Tri décroissant par date_diffusion
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
// Redirection vers la page détail
const afficherDetails = (slug) => {
  if (!slug) {
    console.error("Erreur : le slug est indéfini !");
    return;
  }
  navigateTo(`/broadcast/${slug}`);
};
const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", optionsDate);
  return `${formattedDate}`;
};
</script>
