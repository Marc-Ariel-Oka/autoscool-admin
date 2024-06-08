<script setup lang="ts"></script>

<template>
  <div
    class="w-full h-[70px] bg-white shadow flex justify-between items-center px-10"
  >
    <h1 class="text-[31px] text-[#5631F1]">Accueil</h1>
    <UInput
      :ui="{ base: 'w-[934px]', color: { gray: { outline: 'shadow-none ring-0' } } }"
      icon="i-heroicons-magnifying-glass-20-solid"
      size="xl"
      color="gray"
      :trailing="true"
      placeholder="Recherche générale"
    />
    <UButton
      icon="i-heroicons-bell"
      size="lg"
      color="black"
      square
      variant="link"
    />
  </div>
</template>
