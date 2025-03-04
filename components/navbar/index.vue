<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 bg-tansparent text-white"
    :class="
      isScrolled ? 'bg-black text-white shadow-md' : 'bg-transparent text-white'
    "
  >
    <header class="mj-container flex w-full items-center justify-between p-4">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="Ieda Logo" class="h-14 sm:h-14" />
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
        <button>
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
        <button class="relative">
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
        <button>
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
        <button @click="toggleMenu" class="md:hidden">
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
    </header>

    <!-- Menu Mobile -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
      >
        <nav class="flex flex-col space-y-4 p-4">
          <NuxtLink
            v-for="(item, index) in menuItem"
            :key="index"
            :to="localPath(item)"
            class="block text-lg font-semibold"
          >
            {{ item }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
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
  t("menu.contact"),
]);
const menuItems = computed(() => [
  t("menu.home"),
  t("menu.tv"),
  t("menu.submit"),
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
