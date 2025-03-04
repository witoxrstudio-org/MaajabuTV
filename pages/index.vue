<template>
  <HeroSection>
    <MediaCarousel :mediaList="mediaList" />
  </HeroSection>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque
    fugiat esse. Sed eius nam esse nesciunt, eveniet eaque distinctio! Fugiat
    temporibus necessitatibus laborum minus architecto, provident animi esse
    eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
    esse placeat aspernatur. Est earum numquam eaque in exercitationem.
    Obcaecati nobis, atque fugit necessitatibus id quasi consectetur ut optio
  </div>
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
