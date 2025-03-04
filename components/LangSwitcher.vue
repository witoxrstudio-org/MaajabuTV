<template>
  <div class="relative flex items-center dropdown">
    <div class="flex items-center space-x-2">
      <button
        class="flex items-center text-custom-green py-2 text-lg"
        @click="toggleDropdown"
      >
        <span class="text-sm mr-2">{{ languageName }}</span>
        <svg
          class="ml-2 w-4 h-4 transform transition-transform duration-200"
          :class="isDropdownOpen ? 'rotate-180' : ''"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Séparateur sur la même ligne -->
      <span class="text-gray-400 text-lg">|</span>
    </div>
    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-48 bg-transparent backdrop-blur-md border border-blue-300 border-opacity-20 rounded-lg shadow-lg py-1 z-10 transition duration-150 ease-in-out"
        style="
          background: linear-gradient(
              to bottom,
              rgba(255, 255, 0, 0.2),
              rgba(255, 255, 0, 0) 70%
            ),
            rgba(0, 0, 0, 0.5);
        "
      >
        <button
          v-for="item in locales"
          :key="typeof item === 'object' ? item.code : item"
          @click="changeLanguage(typeof item === 'object' ? item.code : item)"
          class="flex items-center px-4 py-2 text-gray-800 hover:bg-black w-full text-left transition duration-150 ease-in-out"
        >
          <img
            :src="flags[typeof item === 'object' ? item.code : item]"
            class="w-4 h-4 rounded-full mr-2"
            :alt="typeof item === 'object' ? item.name : item"
          />
          <span class="text-sm text-white">{{
            typeof item === "object" ? item.name : item
          }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const isDropdownOpen = ref(false);

const langage = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

const languageNames = {
  "fr-FR": "fr-FR",
  "en-UK": "en-UK",
};

const languageName = computed(
  () => languageNames[locale.value] || locale.value
);

const flags = {
  "fr-FR": "https://flagcdn.com/w20/fr.png",
  "en-UK": "https://flagcdn.com/w20/us.png",
};

// Fonction pour basculer l'affichage du menu déroulant
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Fonction pour changer la langue et fermer le menu
const changeLanguage = (code) => {
  langage.value = code;
  isDropdownOpen.value = false;
};

// Ferme le dropdown lorsqu'on clique en dehors
const handleClickOutside = (event) => {
  const dropdown = event.target.closest(".dropdown");
  if (!dropdown) {
    isDropdownOpen.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>