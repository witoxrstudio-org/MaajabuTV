<template>
  <div class="relative w-full mj-container">
    <swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="1"
      :autoplay="{ delay: 6000 }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :centered-slides="true"
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 15 },
      }"
      class="w-full"
    >
      <swiper-slide v-for="(media, index) in mediaList" :key="index">
        <div
          class="relative rounded-lg overflow-hidden transition-transform duration-300"
        >
          <img
            :src="media.image"
            class="h-32 md:h-40 lg:h-48 w-full md:w-64 lg:w-80 object-cover rounded-lg border-2 border-dotted"
          />
          <!-- Icône Play centrée avec effet hover -->
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="/img/btn_play.png"
              alt="Play"
              class="w-12 h-12 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

defineProps({
  mediaList: Array,
});
</script>
