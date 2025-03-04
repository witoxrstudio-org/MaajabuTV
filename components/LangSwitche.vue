<template>
  <div class="relative dropdown">
    <button
      class="flex items-center text-custom-green py-2t"
      @click="toggleDropdown"
    >
      <span class="mr-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 21L15.75 9.75 21 21m-9-3h7.5M3 5.621c1.977-.12 3.977-.37 6-.371 1.12 0 2.233.038 3.334.114V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </span>
      <span class="flex items-center">
        <img
          :src="currentFlag"
          class="w-4 h-4 rounded-full mr-2"
          :alt="locale.value + ' Flag'"
        />
        <span class="text-sm">{{
          locale.value ? locale.value.toUpperCase() : ""
        }}</span>
      </span>
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

    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-48 bg-transparent backdrop-blur-md border border-green-300 border-opacity-20 rounded-lg shadow-lg py-1 z-10 transition duration-150 ease-in-out"
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

const flags = {
  "fr-FR": "https://flagcdn.com/w20/fr.png",
  "en-UK": "https://flagcdn.com/w20/us.png",
};

const currentFlag = computed(() => flags[locale.value] || "");

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
