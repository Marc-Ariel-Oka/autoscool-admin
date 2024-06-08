<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ["guest"],
});
</script>

<template>
  <div class="min-h-screen w-full flex justify-center items-center">
    <div class="w-[500px]">
      <UCard>
        <h1 class="text-[2.25rem] text-center font-bold mb-10">Auto Scool</h1>
        <p class="text-center mb-10">
          Bonjour et bienvenu sur
          <span class="font-bold text-gray-400">Autoscool</span><br />
          une autre manière d'enseigner les codes de la route.
        </p>

        <UForm class="space-y-10">
          <div class="space-y-4">
            <UFormGroup name="email">
              <UInput size="xl" placeholder="Entrer votre Email">
                <template #leading>
                  <img
                    src="~/assets/img/gmail.png"
                    class="w-4 h-4 object-contain"
                  />
                </template>
              </UInput>
            </UFormGroup>

            <UFormGroup name="password">
              <UInput
                type="password"
                size="xl"
                placeholder="Tapez votre mot de passe"
              />
            </UFormGroup>
            <div class="flex justify-between items-center">
              <UCheckbox
                name="notifications"
                label="Se souvenir de moi"
              />
              <ULink
                to="/"
                class="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200"
              >
                Mot de passe oublié
              </ULink>
            </div>
          </div>

          <div class="flex flex-col justify-center items-center">
            <UButton type="submit" size="lg" block label="">
              S'identifier
            </UButton>
            <UButton variant="link" size="lg" color="gray">
              S'inscrire
            </UButton>
          </div>
        </UForm>
      </UCard>
    </div>
  </div>
</template>
