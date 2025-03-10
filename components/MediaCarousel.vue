<template>
  <div class="relative w-full mj-container">
    <swiper
      @swiper="onSwiper"
      :modules="[Navigation, Autoplay]"
      :slides-per-view="1"
      :autoplay="{ delay: 4500 }"
      :centered-slides="true"
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2, spaceBetween: 6 },
        1024: { slidesPerView: 3, spaceBetween: 6 },
      }"
      class="w-full px-2 md:px-4 lg:px-4"
    >
      <swiper-slide v-for="(media, index) in mediaList" :key="index">
        <div
          class="relative rounded-lg overflow-hidden transition-transform duration-300"
        >
          <img
            :src="media.image"
            class="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-60 object-cover"
          />
          <!-- Icône Play centrée avec effet hover -->
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="/img/btn_play.png"
              alt="Play"
              class="w-16 h-16 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Boutons -->
    <button
      @click="prevSlide"
      class="absolute left-2 lg:-left-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 font-bold p-3 rounded-full z-10 hover:bg-opacity-80 transition hidden sm:block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute -right-2 lg:-right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 font-bold p-3 rounded-full z-10 hover:bg-opacity-80 transition hidden sm:block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

defineProps({
  mediaList: Array,
});

const swiperRef = ref(null);

// Capture l'instance de Swiper dès qu'elle est disponible
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

// Fonction pour aller au slide précédent
const prevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

// Fonction pour aller au slide suivant
const nextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};
</script>
