<script setup lang="ts">
function goToDetail() {
  navigateTo("/accueil/ets/details");
}
</script>

<template>
  <div class="w-full bg-white rounded-sm">
    <div class="card-title p-4 shadow rounded-sm">
      <h1 class="text-[30px] font-normal">LES ETABLISSEMENTS</h1>
    </div>
    <div class="p-1">
      <div class="p-3 bg-[#F5F6FD]">
        <div
          class="cursor-pointer w-full card-ets bg-white px-2 py-1 rounded-md"
          @click="goToDetail"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <img src="/img/logo_auto.png" alt="" height="90" width="90" />
              <div class="card-auto-details">
                <h1 class="text-[15px] font-bold">Auto école du griffe</h1>
                <p class="text-[15px]">Yamoussoukro, 220 lgts</p>
                <p class="text-[15px]">Inscrit le 10/02/2022</p>
              </div>
            </div>

            <div class="card-auto-contact">
              <p class="text-[15px] font-light">Contact</p>
              <p class="font-bold text-[15px]">+255 0173861515</p>
            </div>

            <div class="card-auto-contact text-right">
              <p class="text-[15px] font-light">Candidats</p>
              <p class="font-bold text-[15px]">192</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
