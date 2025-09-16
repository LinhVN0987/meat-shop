<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen text-black">
    <header class="sticky top-0 z-30 border-b border-brand-light bg-white/80 shadow-sm backdrop-blur">
      <UContainer class="flex items-center justify-between py-4">
        <NuxtLink to="/" class="text-2xl font-semibold tracking-tight transition hover:text-brand-dark">
          Meat Shop
        </NuxtLink>
        <div class="flex items-center gap-3">
          <UButton to="/login" color="primary" variant="soft" class="transition hover:scale-[1.02]">
            Đăng nhập
          </UButton>
          <UButton to="/dashboard" color="primary" class="shadow-sm shadow-emerald-200/60 transition hover:-translate-y-0.5">
            Bảng điều khiển
          </UButton>
        </div>
      </UContainer>
    </header>

    <main>
      <UContainer class="py-12">
        <slot />
      </UContainer>
    </main>

    <footer class="mt-16 border-t border-brand-light bg-white/80 backdrop-blur">
      <UContainer class="py-6 text-sm text-neutral-600">
        © {{ year }} Meat Shop. All rights reserved.
      </UContainer>
    </footer>
  </div>
</template>
