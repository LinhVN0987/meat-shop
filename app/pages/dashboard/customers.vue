<script setup lang="ts">
const segments = [
  { label: 'Nhà hàng & khách sạn', value: 28, color: 'blue' },
  { label: 'Nhà bán lẻ', value: 46, color: 'emerald' },
  { label: 'Hộ gia đình', value: 126, color: 'amber' }
] as const

const colorMap = {
  blue: 'bg-blue-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500'
} as const

definePageMeta({
  layout: 'dashboard',
  title: 'Khách hàng'
})
</script>

<template>
  <div class="space-y-6">
    <UCard class="card-ambient fade-up">
      <template #header>
        <div class="flex flex-col gap-1">
          <h1 class="text-xl font-semibold text-black drop-shadow-sm">Khách hàng</h1>
          <p class="text-sm text-neutral-600">Xây dựng mối quan hệ và theo dõi lịch sử mua hàng.</p>
        </div>
      </template>

      <div class="grid gap-6 md:grid-cols-2">
        <UCard class="card-ambient fade-up">
          <template #header>
            <h2 class="text-base font-semibold text-black">Phân khúc khách hàng</h2>
          </template>
          <ul class="space-y-4">
            <li v-for="segment in segments" :key="segment.label" class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span :class="['h-3 w-3 rounded-full', colorMap[segment.color]]" />
                <span class="text-neutral-700">{{ segment.label }}</span>
              </div>
              <span class="font-medium text-black">{{ segment.value }} tài khoản</span>
            </li>
          </ul>
        </UCard>

        <div class="card-ambient fade-up flex flex-col justify-center gap-3 text-sm text-neutral-600">
          <p>Danh sách khách hàng chi tiết, điểm thưởng và lịch sử đơn hàng sẽ xuất hiện tại đây khi hoàn thành.</p>
          <p>Ưu tiên phát triển: đồng bộ CRM và tự động nhắc lịch chăm sóc khách hàng.</p>
        </div>
      </div>
    </UCard>
  </div>
</template>
