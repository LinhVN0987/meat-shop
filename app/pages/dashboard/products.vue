<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Sản phẩm'
})

const actions = [
  { label: 'Nhập sản phẩm mới', icon: 'i-heroicons-arrow-up-on-square-stack' },
  { label: 'Cập nhật tồn kho', icon: 'i-heroicons-cube-transparent' },
  { label: 'Xuất danh mục', icon: 'i-heroicons-arrow-down-tray' }
]
</script>

<template>
  <div class="space-y-6">
    <UCard class="card-ambient fade-up">
      <template #header>
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-semibold text-black drop-shadow-sm">Quản lý sản phẩm</h1>
          <p class="text-sm text-neutral-600">Theo dõi tồn kho và cập nhật bảng giá cho từng loại thịt.</p>
        </div>
      </template>

      <div class="grid gap-4 md:grid-cols-3">
        <UCard v-for="action in actions" :key="action.label" class="card-ambient fade-up">
          <div class="flex flex-col items-start gap-3">
            <UIcon :name="action.icon" class="h-6 w-6 text-brand-dark" />
            <p class="font-medium text-black">{{ action.label }}</p>
            <p class="text-sm text-neutral-600">Chức năng này đang được triển khai.</p>
            <UButton variant="soft" color="primary" class="rounded-full px-4">Thông báo khi hoàn tất</UButton>
          </div>
        </UCard>
      </div>

      <div class="mt-6 rounded-lg border border-dashed border-brand-light/70 bg-white/60 p-6 text-center text-sm text-neutral-600">
        Bảng quản lý sản phẩm chi tiết sẽ hiển thị tại đây khi hoàn thiện.
      </div>
    </UCard>
  </div>
</template>
