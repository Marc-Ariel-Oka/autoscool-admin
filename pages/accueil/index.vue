<script setup lang="ts"></script>

<template>
  <div class="w-full bg-white shadow-sm p-14 mb-8 rounded-lg">
    <div class="grid grid-cols-3 gap-5">
      <UCard>
        <h1 class="text-[40px]">15 800 <span class="text-sm">CFA</span></h1>
        <p class="uppercase">aujourd'hui</p>
        <h2 class="text-[24px]">72 000</h2>
      </UCard>
      <UCard>
        <h1 class="text-[40px]">15 800 <span class="text-sm">CFA</span></h1>
        <p class="uppercase">aujourd'hui</p>
        <h2 class="text-[24px]">72 000</h2>
      </UCard>
      <UCard>
        <h1 class="text-[40px]">15 800 <span class="text-sm">CFA</span></h1>
        <p class="uppercase">aujourd'hui</p>
        <h2 class="text-[24px]">72 000</h2>
      </UCard>
    </div>
  </div>

  <UCard>
    <template #header>
      <h1 class="text-[25px] text-gray-300 font-light">Statistiques</h1>
    </template>

    <Placeholder class="h-32" />
  </UCard>
</template>
