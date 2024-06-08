<script></script>

<template>
  <div class="w-full min-h-screen flex bg-[#F8F9FF]">
    <Sidebar class="w-64 flex-shrink-0" />
    <div class="flex-1 flex flex-col">
      <Navbar class="flex-shrink-0" />
      <div class="flex-1 p-[20px]">
        <slot />
      </div>
    </div>
  </div>
</template>
