<template>
  <HeroSection>
    <MediaCarousel :mediaList="mediaList" />
  </HeroSection>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import MediaCarousel from "@/components/MediaCarousel.vue";

const mediaList = [
  { image: "/img/a2.png" },
  { image: "/img/a3.png" },
  { image: "/img/c2.jpg" },
  { image: "/img/a2.png" },
  { image: "/img/a3.png" },
  { image: "/img/c2.jpg" },
];
</script>
