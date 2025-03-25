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
              <span data-v-8f1205ab="">Submit</span>
            </h2>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-stretch gap-8 h-screen">
          <!-- Section principale contenant le formulaire et l'image -->
          <div class="flex w-full h-full">
            <!-- Formulaire -->
            <div
              class="w-full md:w-1/2 bg-gray-100 p-6 shadow-lg flex flex-col justify-center"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center"
              >
                Soumission de chanson
              </h2>

              <p
                class="text-black text-sm sm:text-base md:text-lg mb-4 text-justify sm:text-left"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat blanditiis eveniet magni provident quisquam rerum ad quo
                maiores reiciendis nulla officia explicabo magnam quos, tempora
                excepturi molestias eligendi illum iusto!
              </p>

              <form
                @submit.prevent="submitSubmission"
                class="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label class="block text-gray-700">Titre de la chanson</label>
                  <input
                    v-model="titre_chanson"
                    type="text"
                    class="text-black w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label class="block text-gray-700">Nom de l'artiste</label>
                  <input
                    v-model="artiste_nom"
                    type="text"
                    class="text-black w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label class="block text-gray-700">URL YouTube</label>
                  <input
                    v-model="youtube_url"
                    type="url"
                    class="text-black w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label class="block text-gray-700">Réseaux sociaux</label>
                  <input
                    v-model="socials"
                    type="text"
                    class="text-black w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label class="block text-gray-700"
                    >URL du fichier audio</label
                  >
                  <input
                    v-model="fichier_audio"
                    type="url"
                    class="text-black w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label class="block text-gray-700">Genre</label>
                  <select
                    v-model="genre"
                    class="text-black w-full p-2 border rounded"
                  >
                    <option value="">Sélectionner un genre</option>
                    <option value="gospel">Gospel</option>
                    <option value="louange">Louange</option>
                  </select>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-gray-700">Commentaire Admin</label>
                  <textarea
                    v-model="commentaire_admin"
                    class="text-black w-full p-2 border rounded"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-gray-700">Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="text-black w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label class="block text-gray-700">Téléphone</label>
                  <input
                    v-model="telephone"
                    type="tel"
                    class="text-black w-full p-2 border rounded"
                  />
                </div>
                <div class="md:col-span-2">
                  <button
                    type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                  >
                    Soumettre
                  </button>
                </div>
                <div
                  v-if="successMessage"
                  class="md:col-span-2 text-green-500 mt-4"
                >
                  {{ successMessage }}
                </div>
                <div
                  v-if="errorMessage"
                  class="md:col-span-2 text-red-500 mt-4"
                >
                  {{ errorMessage }}
                </div>
              </form>
            </div>

            <!-- Image avec overlay gradient -->
            <div class="hidden md:block w-1/2 relative h-full">
              <div
                class="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent"
              ></div>
              <img
                src="/img/rosny.png"
                alt="Description de l'image"
                class="object-cover w-full h-full rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";

const titre_chanson = ref("");
const artiste_nom = ref("");
const youtube_url = ref("");
const socials = ref("");
const fichier_audio = ref(""); // URL de l'audio
const genre = ref("");
const commentaire_admin = ref("");
const date_soumission = ref(new Date().toISOString());
const email = ref("");
const telephone = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const { createItems } = useDirectusItems();

const submitSubmission = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (!validateEmail(email.value)) {
    errorMessage.value = "Veuillez entrer une adresse email valide.";
    return;
  }

  try {
    const items = [
      {
        titre_chanson: titre_chanson.value,
        artiste_nom: artiste_nom.value,
        youtube_url: youtube_url.value,
        socials: socials.value,
        fichier_audio: fichier_audio.value,
        genre: genre.value, // Sélection via Directus
        commentaire_admin: commentaire_admin.value,
        date_soumission: date_soumission.value,
        email: email.value,
        telephone: telephone.value,
      },
    ];

    await createItems({ collection: "submissions", items });
    successMessage.value = "Soumission réussie !";
    resetFields();
  } catch (e) {
    if (e?.data?.errors?.[0]?.extensions?.code === "RECORD_NOT_UNIQUE") {
      errorMessage.value = "Cet email existe déjà.";
    } else {
      errorMessage.value =
        "Une erreur est survenue. Veuillez réessayer plus tard.";
      console.error("Erreur : ", e);
    }
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const resetFields = () => {
  titre_chanson.value = "";
  artiste_nom.value = "";
  youtube_url.value = "";
  socials.value = "";
  fichier_audio.value = "";
  genre.value = "";
  commentaire_admin.value = "";
  email.value = "";
  telephone.value = "";
};
</script>
