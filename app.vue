<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <div class="po-wrapper bg-black text-white">
        <navbar />
      </div>
      <div>
        <transition name="page" mode="out-in">
          <div>
            <NuxtPage />
          </div>
        </transition>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
const config = useAppConfig();
useSeoMeta({
  title: config.title,
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
