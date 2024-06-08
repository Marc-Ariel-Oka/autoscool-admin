<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const menus = [
  {
    label: "Soldes General",
  },
  {
    label: "Les cours",
    to: "/getting-started/installation",
  },
  {
    label: "Annonces",
    to: "/components/command-palette",
  },
  {
    label: "Paramètres",
    to: "/components/command-palette",
  },
  {
    label: "Données",
    to: "/components/command-palette",
  },
  {
    label: "Compte",
    to: "/components/command-palette",
  },
];

const accueil = [
  {
    label: "Les établissements",
    to: "/accueil/ets",
  },
  {
    label: "Les candidats",
  },
  {
    label: "Classements",
  },
  {
    label: "Avis Candidats",
  },
];

const items = [
  {
    label: "MENU",
    icon: "i-heroicons-bars-3",
  },
  {
    label: "ACCCUEIL",
    icon: "i-heroicons-home",
  },
];

const route = useRoute();
const router = useRouter();

const selected = computed({
  get() {
    const index = items.findIndex((item) => item.label === route.query.tab);
    if (index === -1) {
      return 0;
    }
    return index;
  },
  set(value) {
    router.replace({
      query: { tab: items[value].label },
      hash: "#control-the-selected-index",
    });
  },
});

const links = computed(() => {
  return selected.value === 0 ? menus : accueil;
});
</script>

<template>
  <div class="w-64 shadow-md bg-white">
    <div class="px-2 pt-4">
      <div class="text-center">
        <UTabs
          v-model="selected"
          :items="items"
          :ui="{
            list: {
              height: 'h-[60px]',
              background: 'bg-white',
              tab: { height: 'h-[50px]', active: 'text-[#FF9500]' },
              marker: {
                base: 'border border-[#FF9500]',
                shadow: 'shadow-none',
              },
            },
          }"
        >
          <template #default="{ item, index, selected }">
            <div class="flex flex-col items-center gap-1">
              <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
              <span>{{ item.label }}</span>
            </div>
          </template>
        </UTabs>
      </div>
      <div class="flex flex-col items-start space-x-2">
        <UVerticalNavigation
          :links="links"
          :ui="{ size: 'text-lg', font: 'font-normal' }"
        />
      </div>
    </div>
  </div>
</template>
