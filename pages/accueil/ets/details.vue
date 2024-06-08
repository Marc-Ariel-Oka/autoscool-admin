<script setup lang="ts">
const links = [
  [{ label: "Les candidats" }],
  [{ label: "les groupes" }],
  [{ label: "Classement" }],
  [{ label: "Annonces" }],
  [{ label: "Portefeuil" }],
  [{ label: "Avis candidat" }],
];

const menuSelect = ref(false);
</script>

<template>
  <div class="w-full bg-white rounded-md">
    <div class="bg-white p-1 shadow-sm">
      <div class="card-auto-recap bg-[#F5F6FD] px-2 py-1">
        <div class="flex justify-between items-center">
          <div class="flex space-x-5">
            <UButton
              icon="i-heroicons-chevron-left"
              size="md"
              color="gray"
              variant="link"
            />

            <div class="flex items-center space-x-3">
              <img src="/img/logo_auto.png" alt="" height="70" width="70" />
              <div class="detail-block">
                <h1 class="text-[12px] font-bold text-[#5631F1]">
                  Auto école du griffe
                </h1>
                <p class="text-[12px]">Yamoussoukro, 220lgts</p>
                <p class="text-[12px]">Inscrit le 10/01/2022</p>
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <div>
              <h1 class="font-bold text-[#5631F1] text-[15px]">192</h1>
              <p class="font-light text-[#5631F1] text-[15px]">Candidats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-20 pt-6 shadow-sm">
      <UHorizontalNavigation
        :links="links"
        class="border-b border-transparent dark:border-gray-800"
      />
    </div>
    <div class="px-1 pb-1">
      <div class="bg-[#F5F6FD] p-4">
        <div class="flex space-x-4">
          <div class="bg-white card-compte w-96 rounded-md">
            <div class="border-b">
              <div class="p-2">
                <h1 class="text-gray-400">Compte</h1>
              </div>
            </div>
            <div class="ps-4 pt-5 flex flex-col float-start w-full space-y-4">
              <UButton
                @click="menuSelect = false"
                icon="i-heroicons-building-office-2"
                color="gray"
                variant="solid"
                size="lg"
                block
                :ui="{
                  block: 'justify-start',
                  rounded: 'rounded-none',
                  color: {
                    gray: {
                      solid:
                        'ring-0 border-l-4 border-transparent focus-visible:border-l-4 focus-visible:border-[#5631F1] shadow-none focus-visible:bg-[#F2F0FE] hover:border-l-4 hover:border-[#5631F1] hover:bg-[#F2F0FE] bg-white text-gray-400 focus-visibile:text-[#5631F1] font-light',
                    },
                  },
                }"
                >Entreprise</UButton
              >
              <UButton
                @click="menuSelect = true"
                icon="i-heroicons-user"
                color="gray"
                variant="solid"
                size="lg"
                block
                :ui="{
                  block: 'justify-start',
                  rounded: 'rounded-none',
                  color: {
                    gray: {
                      solid:
                        'ring-0 border-l-4 border-transparent focus-visible:border-l-4 focus-visible:border-[#5631F1] shadow-none focus-visible:bg-[#F2F0FE] hover:border-l-4 hover:border-[#5631F1] hover:bg-[#F2F0FE] bg-white text-gray-400 focus-visibile:text-[#5631F1] font-light',
                    },
                  },
                }"
                >Gerant</UButton
              >
            </div>
          </div>
          <div class="flex-1 bg-white rounded-md">
            <div class="border-b">
              <div class="p-2 flex justify-between items-center">
                <h1 class="text-gray-400">
                  {{ menuSelect ? "Compte" : "Entreprise" }}
                </h1>
                <UButton
                  :padded="false"
                  icon="i-heroicons-bars-3"
                  size="sm"
                  color="black"
                  square
                  variant="link"
                />
              </div>
            </div>
            <div class="entreprise" v-if="!menuSelect">
              <div class="p-4 mb-4">
                <div class="flex space-x-4">
                  <div class="w-64 2xl:w-96 h-full">
                    <UCard>
                      <img src="/img/driving_cool.png" alt="" />
                    </UCard>
                  </div>
                  <div class="flex-1">
                    <div class="border-b mb-3">
                      <div class="pb-1 flex justify-between items-center">
                        <p class="text-gray-400 text-[13px]">Denomination</p>
                        <p class="text-[13px]">On prouve</p>
                      </div>
                    </div>
                    <div class="border-b mb-3">
                      <div class="pb-1 flex justify-between items-center">
                        <p class="text-gray-400 text-[13px]">Slogan</p>
                        <p class="text-[13px]">Notre mission vous satisfaire</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 pb-4">
                <UCard>
                  <div class="h-5 flex justify-between items-center">
                    <h1 class="text-[14px] text-gray-400">Description</h1>
                    <UButton
                      :padded="false"
                      color="gray"
                      variant="link"
                      icon="i-heroicons-pencil-20-solid"
                    />
                  </div>
                  <div class="h-56 flex justify-center items-center">
                    <p class="text-[14px] text-gray-400">
                      Décrivez votre entreprise au candidat et à vos futurs
                      clients
                    </p>
                  </div>
                </UCard>
              </div>
            </div>
            <div class="compte" v-else>
              <div class="p-4">
                <div class="border-b mb-3">
                  <div class="pb-1 flex justify-between items-center">
                    <p class="text-gray-400 text-[13px]">Denomination</p>
                    <p class="text-[13px]">On prouve</p>
                  </div>
                </div>
                <div class="border-b mb-3">
                  <div class="pb-1 flex justify-between items-center">
                    <p class="text-gray-400 text-[13px]">Slogan</p>
                    <p class="text-[13px]">Notre mission vous satisfaire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
