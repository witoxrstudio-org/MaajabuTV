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
          class="relative rounded-lg overflow-hidden transition-transform duration-300 gap-4"
        >
          <img
            :src="media.image"
            class="h-40 md:h-48 lg:h-56 w-full md:w-80 lg:w-96 object-cover rounded-lg"
          />
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
