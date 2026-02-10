<script setup lang="ts">
import { computed, ref } from 'vue'

const sidebarOpen = ref(false)
const route = useRoute()

const pageTitle = computed(() => (route.meta?.title as string | undefined) ?? 'Dashboard')

const navigationLinks = [
  { label: 'Tổng quan', icon: 'i-heroicons-home-modern', to: '/dashboard' },
  { label: 'Đơn hàng', icon: 'i-heroicons-document-text', to: '/dashboard/orders' },
  { label: 'Sản phẩm', icon: 'i-heroicons-shopping-bag', to: '/dashboard/products' },
  { label: 'Khách hàng', icon: 'i-heroicons-users', to: '/dashboard/customers' },
  { label: 'Báo cáo', icon: 'i-heroicons-chart-bar', to: '/dashboard/reports' }
]

const userActions = [
  [
    {
      label: 'Hồ sơ',
      icon: 'i-heroicons-user-circle',
      to: '/dashboard/profile'
    },
    {
      label: 'Cài đặt chung',
      icon: 'i-heroicons-cog-6-tooth',
      to: '/dashboard/settings'
    }
  ],
  [
    {
      label: 'Đăng xuất',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      to: '/login'
    }
  ]
]
</script>

<template>
  <div class="flex min-h-screen text-black">
    <USlideover v-model="sidebarOpen" side="left">
      <div class="flex h-full w-72 flex-col bg-white/85 backdrop-blur">
        <div class="border-b border-brand-light p-5">
          <div class="text-lg font-semibold text-brand-dark">Meat Shop</div>
          <p class="mt-1 text-sm text-neutral-500">Bảng điều khiển quản trị</p>
        </div>
        <div class="flex-1 overflow-y-auto px-3 py-6">
          <UVerticalNavigation :links="navigationLinks" class="space-y-2" />
        </div>
      </div>
    </USlideover>

    <aside class="hidden w-72 shrink-0 border-r border-brand-light bg-white/80 backdrop-blur lg:flex lg:flex-col">
      <div class="border-b border-brand-light p-6">
        <div class="text-xl font-semibold text-brand-dark">Meat Shop</div>
        <p class="mt-1 text-sm text-neutral-500">Bảng điều khiển quản trị</p>
      </div>
      <div class="flex-1 overflow-y-auto px-4 py-6">
        <UVerticalNavigation :links="navigationLinks" class="space-y-2" />
      </div>
    </aside>

    <div class="flex min-h-screen flex-1 flex-col">
      <header class="sticky top-0 z-20 border-b border-brand-light bg-white/80 shadow-sm backdrop-blur">
        <div class="flex items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <div class="flex items-center gap-3">
            <UButton icon="i-heroicons-bars-3" variant="ghost" color="gray" class="lg:hidden" @click="sidebarOpen = true" />
            <h1 class="text-lg font-semibold drop-shadow-sm">{{ pageTitle }}</h1>
          </div>

          <div class="flex items-center gap-3">
            <UInput icon="i-heroicons-magnifying-glass" placeholder="Tìm kiếm đơn hàng..." class="hidden rounded-full border-brand-light bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-light md:flex" size="lg" />
            <UButton icon="i-heroicons-bell" variant="ghost" color="gray" class="rounded-full hover:bg-brand-light/60" aria-label="Thông báo" />
            <UDropdown :items="userActions" mode="hover">
              <UButton variant="ghost" color="gray" class="rounded-full hover:bg-brand-light/70">
                <div class="flex items-center gap-3">
                  <UAvatar src="https://i.pravatar.cc/96?img=12" size="lg" alt="Nhân viên" />
                  <div class="hidden text-left sm:block">
                    <p class="text-sm font-semibold">Nguyễn Văn A</p>
                    <p class="text-xs text-neutral-500">Quản lý cửa hàng</p>
                  </div>
                </div>
              </UButton>
            </UDropdown>
          </div>
        </div>
      </header>

      <main class="flex-1 px-4 py-6 lg:px-8">
        <slot />
      </main>
    </div>
  </div>
</template>
