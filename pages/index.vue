<template>
  <div class="bg-black">
    <HeroSection>
      <MediaCarousel :mediaList="mediaList" />
    </HeroSection>
    <section>
      <div class="mj-container my-8">
        <div class="flex justify-between items-center py-4 md:px-0">
          <div class="w-1/3 border-t-2 border-white"></div>
          <div class="w-1/3 text-center hidden md:block"></div>
          <div class="w-1/3 border-t-2 border-white"></div>
        </div>
        <div class="flex items-center justify-between w-full mx-auto mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-white relative group">
            <span class="text-blue-500">Nos</span> Émissions
          </h2>
          <a
            href="#"
            class="text-white font-medium text-sm md:text-base relative group"
          >
            Voir plus
            <span
              class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>
        <div
          v-if="emissions"
          class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <div
            v-for="emission in emissions"
            :key="emission.id"
            class="relative group"
          >
            <div
              class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                v-if="
                  config.public.apiBase + '/assets/' + emission.image_pochette
                "
                :src="
                  config.public.apiBase + '/assets/' + emission.image_pochette
                "
                :alt="emission.titre"
                class="w-full h-56 object-cover"
              />
              <div v-else class="w-full h-56 bg-gray-700"></div>

              <div class="p-3">
                <h3 class="text-white text-sm md:text-base font-semibold">
                  {{ emission.titre }} ({{
                    formatDate(emission.date_creation)
                  }})
                </h3>
                <p class="text-gray-400 text-xs md:text-sm">
                  {{ emission.animateur }}
                </p>
              </div>

              <div
                class="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-500 opacity-0 group-hover:opacity-90 flex flex-col items-center justify-center transition-opacity text-center p-4"
              >
                <h3 class="text-white text-sm md:text-lg font-semibold">
                  {{ emission.titre }} ({{
                    formatDate(emission.date_creation)
                  }})
                </h3>
                <p class="text-gray-300 text-xs md:text-sm">
                  {{ movie.genre }}
                </p>

                <div class="mt-4 flex gap-3 justify-center sm:justify-start">
                  <NuxtLink :to="`/broadcasts?emissionId=${emission.id}`">
                    <button
                      class="p-3 bg-gray-600 rounded-full text-white transition-all duration-300 hover:bg-yellow-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                        />
                      </svg>
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section movies -->

    <!-- Fin section movies -->
    <section class="bg-black pb-6">
      <div class="mj-container">
        <div
          class="relative flex flex-col md:flex-row bg-blue-900 rounded-lg overflow-hidden shadow-lg"
        >
          <!-- Texte -->
          <div
            class="w-full md:w-1/2 p-8 text-white flex flex-col justify-center relative z-20 md:pr-16"
          >
            <h2 class="text-4xl font-bold mb-4">Maajabu Tv</h2>
            <p
              class="mb-6 text-lg md:-mr-52 text-justify bg-blue-900/60 rounded-lg"
            >
              Maajabu Gospel est un label de production musicale très connu,
              associé à quatre ambassadeurs talentueux et populaires : Mike
              Kalambay, Sandra Mbuyi, Deborah Lukalu et Rosny Kayiba. Ces
              artistes, qui comptent parmi les meilleurs chanteurs de gospel en
              RDC, ont contribué à la popularité du label, notamment à travers
              des événements comme Maajabu Talent, où ils jouent le rôle de
              coachs et de juges.
            </p>
            <div class="flex space-x-4">
              <button
                class="bg-white text-blue-900 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200 transition"
              >
                Nous contacter
              </button>
            </div>
          </div>

          <!-- Image -->
          <div class="hidden md:block md:w-1/2 relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent z-10"
            ></div>
            <img
              src="/img/luk.jpg"
              alt="People reading books"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-black py-6">
      <div class="mj-container text-white">
        <div class="flex justify-between items-center py-4 md:px-0">
          <div class="w-1/3 border-t-2 border-white"></div>
          <div class="w-1/3 text-center hidden md:block"></div>
          <div class="w-1/3 border-t-2 border-white"></div>
        </div>
        <div class="flex items-center justify-between w-full mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-white relative group">
            <span class="text-blue-500">Movies</span> Collections
          </h2>
          <a
            href="#"
            class="text-white font-medium text-sm md:text-base relative group"
          >
            Voir plus
            <span
              class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6"
        >
          <NuxtLink
            v-for="movie in movies"
            :key="movie.id"
            :to="`/movies/${slugify(movie.title)}`"
            class="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer h-64"
          >
            <img
              :src="movie.image"
              :alt="movie.title"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
            >
              <h3 class="text-white font-semibold text-sm md:text-lg">
                {{ movie.title }} ({{ movie.year }})
              </h3>
              <p class="text-xs md:text-sm text-gray-400">{{ movie.genre }}</p>
              <div class="flex space-x-2 mt-2">
                <button
                  class="bg-gray-700 p-1.5 md:p-2 rounded-full text-white hover:bg-blue-500 text-xs md:text-sm"
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
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </button>
                <button
                  class="bg-gray-700 p-1.5 md:p-2 rounded-full text-white hover:bg-blue-500 text-xs md:text-sm"
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
                      d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                </button>
                <button
                  class="bg-gray-700 p-1.5 md:p-2 rounded-full text-white hover:bg-blue-500 text-xs md:text-sm"
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
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="flex justify-between items-center py-4 md:px-0">
          <div class="w-1/3 border-t-2 border-white"></div>
          <div class="w-1/3 text-center hidden md:block"></div>
          <div class="w-1/3 border-t-2 border-white"></div>
        </div>
      </div>
    </section>
    <section class="relative bg-black pb-6 overflow-hidden">
      <!-- Image de fond filigrane -->

      <div class="mj-container relative z-10">
        <img
          src="/img/david.png"
          alt="Filigrane"
          class="absolute -left-48 top-12 h-full w-full max-w-[1200px] object-contain opacity-40 pointer-events-none"
        />
        <div
          class="text-white flex flex-col lg:flex-row items-center justify-between py-12 mx-auto"
        >
          <div
            class="w-full lg:w-1/2 text-left flex flex-col justify-start h-full px-4 -mt-96"
          >
            <h2 class="text-3xl md:text-4xl font-bold text-left">
              Frequently <span class="text-blue-500">Asked</span> Questions
            </h2>
            <p class="text-gray-400 mt-2 text-left">
              Les questions les plus fréquemment posées par nos abonnés. Vous ne
              trouvez pas de réponse?
            </p>
          </div>

          <div class="w-full lg:w-1/2 mt-8 lg:mt-0 space-y-4 px-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="border border-blue-500 rounded-lg overflow-hidden"
            >
              <button
                @click="toggle(index)"
                class="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span class="text-lg">{{ faq.question }}</span>
                <span class="text-blue-400 text-2xl">
                  {{ openIndex === index ? "−" : "+" }}
                </span>
              </button>

              <NuxtTransition name="fade">
                <div v-if="openIndex === index" class="p-4 text-gray-300">
                  {{ faq.answer }}
                </div>
              </NuxtTransition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-900 py-8">
      <brands />
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
const mediaList = [
  { image: "/img/a2.png" },
  { image: "/img/a3.png" },
  { image: "/img/c2.jpg" },
  { image: "/img/a2.png" },
  { image: "/img/a3.png" },
  { image: "/img/c2.jpg" },
];
const movies = [
  {
    id: 1,
    title: "Plus q'un chant",
    year: 2017,
    genre: "Musical, Gospel",
    image: "/img/al1.jpg",
  },
  {
    id: 2,
    title: "Je te fais confiance",
    year: 2019,
    genre: "Musical, Gospel",
    image: "/img/al2.jpg",
  },
  {
    id: 3,
    title: "To tomboli Kombo",
    year: 2016,
    genre: "Musical, Gospel",
    image: "/img/al3.jpg",
  },
  {
    id: 4,
    title: "Benga ngai",
    year: 2022,
    genre: "Musical, Gospel",
    image: "/img/al4.jpg",
  },
  {
    id: 5,
    title: "Bikuke",
    year: 2021,
    genre: "Musical, Gospel",
    image: "/img/al5.jpg",
  },
  {
    id: 6,
    title: "Faveur Mukoko",
    year: 2022,
    genre: "Musical, Gospel",
    image: "/img/fol3.png",
  },
];
const movie = [
  {
    id: 1,
    title: "Psaumes",
    year: 2019,
    genre: "Musical, Gospel",
    image: "/img/e1.png",
  },
];
const openIndex = ref(null);

const { getItems } = useDirectusItems();
const config = useRuntimeConfig();
// Les Emissions
const fieldsEmissions = ref(
  "id, titre, description, image_pochette,date_creation"
);

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
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("fr-FR", options); // Format "jour mois année" (ex: 8 avr. 2025)
};
const faqs = ref([
  {
    question: "lorem ipsum",
    answer:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus !",
  },
  {
    question: "lorem ipsum",
    answer:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus !",
  },
  {
    question: "lorem ipsum",
    answer:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus !",
  },
  {
    question: "lorem ipsum",
    answer:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus !",
  },
  {
    question: "lorem ipsum",
    answer:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus !",
  },
  {
    question: "lorem ipsum",
    answer:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus !",
  },
]);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
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

