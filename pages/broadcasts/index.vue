<template>
  <section class="relative w-full bg-black">
    <!-- Image de fond enlevée -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-[length:200%_100%] animate-smoke"
    ></div>
    <div
      class="relative mj-container z-10 flex flex-col items-start justify-center pt-28 text-white text-center px-4"
    >
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        eius iure commodi, accusamus error incidunt quasi soluta velit dolore
        delectus pariatur aliquid sed blanditiis praesentium magnam voluptatum
        sint harum repellendus.Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
