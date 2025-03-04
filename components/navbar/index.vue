<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 bg-tansparent text-white"
    :class="
      isScrolled
        ? 'mj-container bg-black mt-2 rounded-lg bg-opacity-80 text-white shadow-md'
        : 'bg-transparent text-white'
    "
  >
    <header class="mj-container flex w-full items-center justify-between p-4">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="Maajabu Logo" class="h-20 sm:h-20" />
        </NuxtLink>
      </div>

      <!-- Menu Desktop -->
      <nav
        class="hidden md:flex flex-grow justify-center space-x-6 font-semibold"
      >
        <NuxtLink
          v-for="(item, index) in menuItem"
          :key="index"
          :to="localPath(item)"
          class="relative group transition duration-400 transform hover:scale-105 hover:text-blue-400"
          :class="{ 'text-blue-500': isActiveLink(localPath(item)) }"
        >
          {{ item }}
          <span
            class="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"
          ></span>
        </NuxtLink>
      </nav>

      <!-- Icônes de droite -->
      <div class="flex items-center space-x-4">
        <!-- Langue -->
        <div class="relative">
          <LangSwitcher class="hidden md:block" />
        </div>

        <!-- Recherche -->
        <button class="hidden md:block">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <!-- Notifications -->
        <button class="relative hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          <span
            class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xs text-white"
          >
            1
          </span>
        </button>

        <!-- Profil -->
        <button class="hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>

        <!-- Bouton menu mobile -->
        <!-- Bouton Toggle Menu Mobile toujours visible -->
        <div class="flex items-center justify-between">
          <!-- LangSwitcher aligné à gauche -->
          <!-- Bouton de menu -->
          <button
            @click="toggleMenu"
            class="fixed right-4 top-6 z-50 text-blue-500 md:hidden p-2 -mt-4 bg-blue-100"
          >
            <!-- SVG pour le bouton du menu -->
            <svg
              v-if="!menuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Menu Mobile -->
        <transition name="fade">
          <nav
            v-if="menuOpen"
            class="fixed h-auto inset-0 z-40 m-4 flex flex-grow flex-col items-center space-y-6 rounded-lg border border-gray-300 bg-gradient-to-b from-white via-white/70 to-white/40 p-8 backdrop-blur-md transition-transform duration-300 ease-out"
          >
            <NuxtLink
              v-for="(item, index) in menuItems"
              :key="index"
              :to="localPath(item)"
              @click="closeMenu"
              class="font-semibold text-blue-400 hover:text-blue-400 hover:underline text-2xl
  transition-opacity duration-300 opacity-0 animate-fadeIn delay-{{
    index * 100
  }}"
              :class="{
                'text-blue-800 underline': isActiveLink(localPath(item)),
              }"
            >
              {{ item }}
            </NuxtLink>
          </nav>
        </transition>
      </div>
    </header>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const route = useRoute();
const menuOpen = ref(false);

// Méthode pour basculer l'état du menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Fonction pour fermer le menu
const closeMenu = () => {
  menuOpen.value = false;
};
// État pour gérer l'ouverture via clic
const isDropdownOpen = ref(false);

// État pour détecter le survol
const isHovering = ref(false);

// Fonction pour basculer l'état du dropdown via clic
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

// Fonction pour fermer le dropdown
function closeDropdown() {
  isDropdownOpen.value = false;
}
// Les éléments du menu
const menuItem = computed(() => [
  t("menu.home"),
  t("menu.tv"),
  t("menu.submit"),
  t("menu.Broadcasts"),
  t("menu.contact"),
]);
const menuItems = computed(() => [
  t("menu.home"),
  t("menu.tv"),
  t("menu.submit"),
  t("menu.broadcasts"),
  t("menu.contact"),
]);

// Fonction de gestion des liens avec la langue actuelle
const localPath = (item) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  switch (item) {
    case t("menu.home"):
      return `${prefix}/`;
    case t("menu.tv"):
      return `${prefix}/tv`;
    case t("menu.submit"):
      return `${prefix}/submit`;
    case t("menu.contact"):
      return `${prefix}/contact`;
    default:
      return `${prefix}/`;
  }
};

// Vérification si le lien est actif
const isActiveLink = (path) => route.path === path;
const isLoading = ref(false);
watch(
  route,
  () => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  },
  { immediate: true }
);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
/* Loader Styles */
.loader {
  z-index: 99 !important;
  width: 36px;
  height: 36px;
  display: block;
  margin: 10px auto;
  position: relative;
  color: #f0efef;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  -webkit-animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(0, 0);
  background-color: #055fc5;
  border-radius: 50%;
  animation: animloader 1s infinite ease-in-out;
  -webkit-transform: scale(0.5) translate(0, 0);
  -moz-transform: scale(0.5) translate(0, 0);
  -ms-transform: scale(0.5) translate(0, 0);
  -o-transform: scale(0.5) translate(0, 0);
}

.loader::before {
  background-color: #02ab4b;
  transform: scale(0.5) translate(-36px, -36px);
  -webkit-transform: scale(0.5) translate(-36px, -36px);
  -moz-transform: scale(0.5) translate(-36px, -36px);
  -ms-transform: scale(0.5) translate(-36px, -36px);
  -o-transform: scale(0.5) translate(-36px, -36px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

@keyframes animloader {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
