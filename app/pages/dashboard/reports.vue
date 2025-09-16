<script setup lang="ts">
const reportCards = [
  {
    title: 'Báo cáo doanh thu',
    description: 'Theo dõi doanh thu theo ngày, tuần, tháng và so sánh với mục tiêu.',
    icon: 'i-heroicons-chart-bar-square'
  },
  {
    title: 'Hiệu suất sản phẩm',
    description: 'Xác định mặt hàng bán chạy và sản phẩm cần khuyến mãi.',
    icon: 'i-heroicons-fire'
  },
  {
    title: 'Hiệu suất nhân viên',
    description: 'Đánh giá năng suất chuẩn bị đơn hàng và chăm sóc khách hàng.',
    icon: 'i-heroicons-user-group'
  }
] as const

definePageMeta({
  layout: 'dashboard',
  title: 'Báo cáo'
})
</script>

<template>
  <div class="space-y-6">
    <UCard class="card-ambient fade-up">
      <template #header>
        <div class="flex flex-col gap-1">
          <h1 class="text-xl font-semibold text-black drop-shadow-sm">Báo cáo & Phân tích</h1>
          <p class="text-sm text-neutral-600">Tổng hợp các số liệu quan trọng giúp đưa ra quyết định kịp thời.</p>
        </div>
      </template>

      <div class="grid gap-4 md:grid-cols-3">
        <UCard v-for="report in reportCards" :key="report.title" class="card-ambient fade-up">
          <div class="flex flex-col gap-3">
            <UIcon :name="report.icon" class="h-8 w-8 text-brand-dark" />
            <div>
              <p class="text-base font-semibold text-black">{{ report.title }}</p>
              <p class="text-sm text-neutral-600">{{ report.description }}</p>
            </div>
            <UButton color="primary" variant="soft" class="rounded-full px-4">Xem lộ trình phát triển</UButton>
          </div>
        </UCard>
      </div>

      <div class="mt-6 rounded-lg border border-dashed border-brand-light/70 bg-white/60 p-6 text-sm text-neutral-600">
        Các biểu đồ tương tác (line chart, bar chart, heatmap) sẽ xuất hiện tại đây khi tích hợp với hệ thống phân tích dữ liệu.
      </div>
    </UCard>
  </div>
</template>
